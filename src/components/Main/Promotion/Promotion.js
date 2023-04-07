import styles from "./Promotion.module.css";
import { Link } from "react-router-dom";
export const Promotion = ({ promotions }) => {
  return (
    <section className={styles.promotion}>
      <div className={styles.wrapper}>
        <h2>Our incredible promotions!</h2>
        <div className={styles.offersWrap}>
          {promotions &&
            promotions.map((tour) => (
              <div className={styles.offer} key={tour.u_id}>
                <img src={tour.main_img} alt={tour.title} />
                <div className={styles.hover}>
                  <div className={styles.title}>{tour.title}</div>
                  <div className={styles.description}></div>
                  <Link to={`/tour/${tour.u_id}`}>More</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
