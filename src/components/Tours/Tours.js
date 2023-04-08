import { setTitle } from "../../utils/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTours } from "../../services/toursServices";
import styles from "./Tours.module.css";
import { ToursLoader } from "../../UI/ToursLoader";
export const Tours = () => {
  setTitle("Available Tours");
  const [tours, setTours] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    getTours()
      .then((data) => {
        setTours(data);
      })
      .then(
        setTimeout(() => {
          setLoad(false);
        }, 1000)
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styles.header}>
        <div className={styles.wrapper}>
          <h2>Our available tours</h2>
          <p>Find the best offer and enjoy the trip with us!</p>
        </div>
      </section>
      <main>
        {load && <ToursLoader />}
        <div className={styles.wrapper}>
          <div className={styles.tours}>
            {tours.map((tour) => (
              <div key={tour.u_id} className={styles.tour}>
                {tour.promotion === '1' ? <span className={styles.promotion}>Promotion</span> : null}
                <div className={styles.tourImg}>
                  <img src={tour.main_img} alt={tour.title} />
                </div>
                <div className={styles.title} title={tour.title}>
                  {tour.title.slice(0, 50)}...
                </div>
                <div className={styles.details}>{tour.country}</div>
                <div className={styles.info}>
                  <span data-type="destination">{tour.destination}</span>
                  <span data-type="duration">{tour.duration}</span>
                </div>
                <div className={styles.more}>
                  <Link to={`/tour/${tour.u_id}`}>Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
