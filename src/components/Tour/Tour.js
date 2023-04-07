import { setTitle } from "../../utils/utils";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getOneTour, getWeather } from "../../services/toursServices";
import { Gallery } from "./Gallery";
import styles from "./Tour.module.css";
import { Booking } from "../Booking/Booking";
import { Loader } from "../../UI/Loader";
import { Reviews } from "./Reviews/Reviews";
import { InPrice } from "./InPrice";
import { NotInPrice } from "./NotInPrice";
import { BookDetails } from "./BookDetails";
import { Map } from "./Map";
import { Description } from "./Description";
import { Header } from "./Header";
import { setScore } from "../../utils/utils";
import {
  deleteRev,
  editRev,
  getReviews,
  submitReview,
} from "../../services/reviewsServices";
export const Tour = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { logged } = useContext(AuthContext);
  const [tour, setTour] = useState({});
  const [weather, setWeather] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const [book, setBook] = useState(false);
  const [login, setLogin] = useState(false);
  const [load, setLoad] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reviewForm, setReviewForm] = useState(false);
  const [reviewScore, setReviewScore] = useState(null);
  const [submitted, setSubmitted] = useState("");
  const [edit, setEdit] = useState(false);
  const [noReview, setNowReview] = useState(null);
  const [reviewId, setReviewId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getOneTour(id).then((res) => {
      if (res.status === false) {
        return navigate("/404");
      } else {
        setTour(res);
        setTitle(res.title);
        getWeather(res.destination).then((res) => setWeather(res));
        getReviews(id)
          .then((review) => {
            if (review) {
              if (review[0].message) {
                return setNowReview(review[0].message);
              }
              const scores = review?.map((x) => Number(x.score));
              const rate = scores?.reduce((a, b) => a + b);
              const finalScore = rate / scores.length;
              setReviewScore(finalScore);
              return setReviewList(review);
            }
          })
          .then(setLoad(false))
          .catch((error) => {
            console.log("There was an error!");
          });
      }
    });
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const onBookClick = () => {
    if (logged) {
      setBook(true);
    } else {
      setLogin(true);
    }
  };
  const close = (param, message = "") => {
    if (param === 1) {
      setSuccess(true);
      setBook(false);
    } else if (param === 2) {
      setLogin(!login);
    } else if (param === 3) {
      setErrorMessage(message);
      setBook(false);
    } else {
      setBook(false);
    }
  };
  const addReview = () => {
    setReviewForm(true);
  };
  const activeEdit = (id) => {
    setEdit(!edit);
    setReviewId(reviewList[id]);
  };
  const sendReview = async (data) => {
    const newData = data;
    submitReview(newData, user.u_id).then((res) => {
      if (res) {
        setReviewScore(setScore(res));
        setReviewForm(false);
        setSubmitted(true);
        if (noReview) {
          setNowReview(null);
        }
        setSubmitted("Thank you for the review!");
        setTimeout(() => {
          setSubmitted(null);
        }, 2500);
        return setReviewList(res);
      } else {
        return;
      }
    });
  };
  const deleteReview = async (review_id) => {
    const r_id = review_id;
    deleteRev(user.u_id, r_id).then((res) => {
      if (res) {
        if (res[0].message) {
          setReviewScore(0);
          setEdit(false);
          setNowReview(res[0].message);
          setSubmitted("Your review has been deleted!");
          setTimeout(() => {
            setSubmitted(null);
          }, 2500);
          return setReviewList([]);
        }
        setReviewScore(setScore(res));
        setEdit(false);
        setSubmitted("Your review has been deleted!");
        setTimeout(() => {
          setSubmitted(null);
        }, 2500);
        return setReviewList(res);
      }
    });
  };
  const editReview = async (data) => {
    const newData = data;
    editRev(newData, user.u_id).then((res) => {
      if (res) {
        if (res) {
          setReviewScore(setScore(res));
          setEdit(!edit);
          setSubmitted("Your review has been updated!");
          setTimeout(() => {
            setSubmitted(null);
          }, 2500);
          return setReviewList(res);
        }
      }
    });
  };
  return (
    <>
      {load && <Loader />}
      {login && (
        <div className={styles.loginRequired}>
          <div className={styles.loginBox}>
            <button
              onClick={() => {
                close(2);
              }}
            >
              X
            </button>
            <h5>Login Required</h5>
            <p>Please, log in to proceed!</p>
            <p>
              You should have an account to make a booking. After that, you will
              be able to make a booking and manage your all booking from the
              profile page.
            </p>
            <Link to="/login">Log in</Link> <span>or</span>{" "}
            <Link to="/registration">Create an account</Link>
          </div>
        </div>
      )}
      {book && <Booking close={close} tour={tour} user={user} />}
      <Header tour={tour} weather={weather} onBookClick={onBookClick} />
      <main>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2>{tour.title}</h2>
              <span data-type="destination">
                {`${tour.destination}, ${tour.country}`}
              </span>
              <span data-type="duration">{tour.duration}</span>
              <span data-type="category">{tour.category}</span>
            </div>
            <div className={styles.mainBox}>
              <div className={styles.left}>
                <Gallery tour={tour} />
                <div className={styles.overview}>
                  <InPrice />
                  <NotInPrice />
                </div>
                <Description tour={tour} />
                <div className={styles.onMap}>
                  <Map tour={tour} />
                  <div className={styles.reviews}>
                    <div className={styles.boxTitle}>Reviews</div>
                    {submitted && (
                      <div className={styles.reviewSubmitted}>{submitted}</div>
                    )}
                    <Reviews
                      user={user}
                      logged={logged}
                      tour={tour}
                      addReview={addReview}
                      reviewForm={reviewForm}
                      submitted={submitted}
                      noReview={noReview}
                      sendReview={sendReview}
                      reviewList={reviewList}
                      deleteReview={deleteReview}
                      editReview={editReview}
                      activeEdit={activeEdit}
                      reviewId={reviewId}
                      edit={edit}
                    />
                  </div>
                </div>
              </div>
              <BookDetails
                tour={tour}
                onBookClick={onBookClick}
                success={success}
                errorMessage={errorMessage}
                reviewScore={reviewScore}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
