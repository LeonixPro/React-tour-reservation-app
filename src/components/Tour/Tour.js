import { setTitle } from "../../utils/utils";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getOneTour } from "../../services/toursServices";
import { Gallery } from "./Gallery";
import styles from "./Tour.module.css";
import { Booking } from "../Booking/Booking";
import { Loader } from "../../UI/loader";
import { Reviews } from "./Reviews/Reviews";
import { InPrice } from "./InPrice";
import { NotInPrice } from "./NotInPrice";
import { BookDetails } from "./BookDetails";
import { Map } from "./Map";
import { Description } from "./Description";
import { Header } from "./Header";
import { setScore } from "../../utils/utils";
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
  const [reviewForm, setReviewForm] = useState(false);
  const [reviewScore, setReviewScore] = useState(null);
  const [submitted, setSubmitted] = useState("");
  const [edit, setEdit] = useState(false);
  const [reviewId, setReviewId] = useState(null);
  useEffect(() => {
    getOneTour(id).then((res) => {
      setTour(res);
      setTitle(res.title);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${res?.destination}&units=metric&appid=${process.env.REACT_APP_WEATHER_REQUEST}`
      )
        .then((result) => result.json())
        .then((data) => setWeather(data));
      fetch(`${process.env.REACT_APP_MAIN_REQUEST}/reviews/show/${id}`)
        .then((reviews) => reviews.json())
        .then((review) => {
          if (review) {
            if (review[0].message) {
              return console.log(review[0].message);
            }
            setReviewList(review);
            const scores = review?.map((x) => Number(x.score));
            const rate = scores?.reduce((a, b) => a + b);
            const finalScore = rate / scores.length;
            setReviewScore(finalScore);
          }
        })
        .then(setLoad(false))
        .catch((error) =>
          console.log(
            "There are no available reviews yet. But you can be first one!"
          )
        );
    });
    window.scrollTo(0, 0);
  }, [id]);

  const onBookClick = () => {
    if (logged) {
      setBook(true);
    } else {
      setLogin(true);
    }
  };
  const close = (param) => {
    if (param === 1) {
      setSuccess(true);
      setBook(false);
    } else if (param === 2) {
      setLogin(!login);
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
    console.log(reviewId);
  };
  const sendReview = async (data) => {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/review/submit`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: user.u_id,
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request;
    const res = await response.json();
    if (res) {
      setReviewScore(setScore(res));
      setReviewForm(false);
      setSubmitted(true);
      setSubmitted("Thank you for the review!");
      setTimeout(() => {
        setSubmitted(null);
      }, 2500);
      return setReviewList(res);
    } else {
      console.log("error");
    }
  };
  const deleteReview = async (review_id) => {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/review/delete/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: user.u_id,
        },
        body: JSON.stringify({ review_id: review_id }),
      }
    );
    const response = await request;
    const res = await response.json();
    if (res) {
      if (res[0].message) {
        setReviewScore(0);
        setEdit(false);
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
  };
  const editReview = async (data) => {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/review/edit`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: user.u_id,
      },
      body: JSON.stringify(data),
    });
    const response = await request;
    const res = await response.json();
    if (res) {
      setReviewScore(setScore(res));
      setEdit(!edit);
      setSubmitted("Your review has been updated!");
      setTimeout(() => {
        setSubmitted(null);
      }, 2500);
      return setReviewList(res);
    }
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
                reviewScore={reviewScore}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
