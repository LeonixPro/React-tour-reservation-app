import styles from "./Tour.module.css";
import { Link } from "react-router-dom";
export const BookDetails = ({ tour, success, onBookClick, reviewScore }) => {
  return (
    <div className={styles.right}>
      <div className={styles.sale}>On sale</div>
      <div className={styles.duration}>{tour.duration}</div>
      <div className={styles.rate}>
        {`${tour.destination}, ${tour.country}`}{" "}
        <b>{reviewScore ? reviewScore.toFixed(1) : 0}</b>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.price}>
          Price
          <b>{Number(tour?.price).toFixed(2)} BGN</b>
        </span>
        <span className={styles.discount}>
          20% Discount <br />
          Valid until 25.03.2023
        </span>
      </div>
      <div className={styles.book}>
        <button onClick={onBookClick}>Book now</button>
      </div>
      <div className={styles.rightBottom}>
        <b>Special offers</b>
        Save 20% until 25.03.2023
      </div>
      {success && (
        <div className={styles.success}>
          Booking completed
          <div>
            <Link to="/profile">Go to my bookings</Link>
          </div>
        </div>
      )}
    </div>
  );
};
