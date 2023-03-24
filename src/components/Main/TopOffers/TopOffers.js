import { Link } from "react-router-dom";
import styles from "./TopOffers.module.css";
export const TopOffers = ({ tours }) => {
  return (
    <section className={styles.topOffers}>
      <div className={styles.wrapper}>
        <h2>Top Offers</h2>
        <div className={styles.tours}>
          {tours.map((tour) => (
            <div key={tour.u_id} className={styles.tour}>
              <div className={styles.tourImg}>
                <img src={tour.main_img} alt={tour.title} />
              </div>
              <div className={styles.title}>{tour.title}</div>
              <div className={styles.details}>{tour.destination}</div>
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
    </section>
  );
};
