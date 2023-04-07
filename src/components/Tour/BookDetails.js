import styles from "./Tour.module.css";
import { Link } from "react-router-dom";
export const BookDetails = ({
  tour,
  success,
  onBookClick,
  reviewScore,
  errorMessage,
}) => {
  const discount_price = tour.price - (tour.price * tour.discount) / 100;
  const save = (tour.price * tour.discount) / 100;
  return (
    <div className={styles.right}>
      <div className={styles.sale}>On sale</div>
      <div className={styles.duration}>{tour.duration}</div>
      <div className={styles.rate}>
        {`${tour.destination}, ${tour.country}`}
        <b>{reviewScore ? reviewScore.toFixed(1) : 0}</b>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.price}>
          <strong>Price: {Number(tour.price).toFixed(2)} BGN</strong>
          <b>{Number(discount_price).toFixed(2)} BGN</b>
        </span>
        <span className={styles.discount}>
          {tour.discount}% Discount <br />
          Valid until {tour.discount_valid}
        </span>
      </div>
      <div className={styles.book}>
        <button onClick={onBookClick}>Book now</button>
      </div>
      <div className={styles.rightBottom}>
        <b>Special offers</b>
        Save {Number(save).toFixed(2)} BGN until {tour.discount_valid}
      </div>
      {success && (
        <div className={styles.success}>
          Booking completed! <Link to="/profile">Go to my bookings</Link>
        </div>
      )}
      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage} <Link to="/support">Contact support now.</Link>
        </div>
      )}
    </div>
  );
};
