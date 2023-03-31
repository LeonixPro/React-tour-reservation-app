import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTours } from "../../services/toursServices";
import styles from "./Tours.module.css";
export const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getTours().then((data) => {
      setTours(data);
    });
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
        <div className={styles.wrapper}>
          <div className={styles.tours}>
            {tours.map((tour) => (
              <div key={tour.u_id} className={styles.tour}>
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

            {/* <div className={styles.tour}>
              <div className={styles.tourImg}>
                <img
                  src="https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Prague"
                />
              </div>
              <div className={styles.title}>5 Days in Paris</div>
              <div className={styles.details}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, eveniet!
              </div>
              <div className={styles.info}>
                <span data-type="destination">Paris</span>
                <span data-type="duration">5 Days</span>
              </div>
              <div className={styles.more}>
                <a href="">Show Details</a>
              </div>
            </div>

            <div className={styles.tour}>
              <div className={styles.tourImg}>
                <img
                  src="https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Prague"
                />
              </div>
              <div className={styles.title}>5 Days in Paris</div>
              <div className={styles.details}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, eveniet!
              </div>
              <div className={styles.info}>
                <span data-type="destination">Paris</span>
                <span data-type="duration">5 Days</span>
              </div>
              <div className={styles.more}>
                <a href="">Show Details</a>
              </div>
            </div>

            <div className={styles.tour}>
              <div className={styles.tourImg}>
                <img
                  src="https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Prague"
                />
              </div>
              <div className={styles.title}>5 Days in Paris</div>
              <div className={styles.details}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, eveniet!
              </div>
              <div className={styles.info}>
                <span data-type="destination">Paris</span>
                <span data-type="duration">5 Days</span>
              </div>
              <div className={styles.more}>
                <a href="">Show Details</a>
              </div>
            </div>

            <div className={styles.tour}>
              <div className={styles.tourImg}>
                <img
                  src="https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Prague"
                />
              </div>
              <div className={styles.title}>5 Days in Paris</div>
              <div className={styles.details}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, eveniet!
              </div>
              <div className={styles.info}>
                <span data-type="destination">Paris</span>
                <span data-type="duration">5 Days</span>
              </div>
              <div className={styles.more}>
                <a href="">Show Details</a>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};
