import styles from "../Profile.module.css";
export const BookingDetails = ({ current, close, cancelBooking }) => {
  return (
    <div className={styles.bookingWrap}>
      <button className={styles.closeBooking} onClick={close}>
        X
      </button>
      <div className={styles.bookingTop}>
        <ul>
          <span>Reservation Details</span>
          <li>
            <strong>Departure date:</strong> {current.departure_date}
          </li>
          <li>
            <strong>Return Date:</strong> {current.return_date}
          </li>
        </ul>
        <ul className={styles.bookingResTop}>
          {current.status === "Completed" ? (
            <span className={styles.completed}>RESERVATION COMPLETED</span>
          ) : (
            <span className={styles.canceled}>RESERVATION CANCELLED</span>
          )}
          <li>
            <strong>RESERVATION NUMBER:</strong> {current.u_id}
          </li>
          <li>
            <strong>RESERVATION DATE:</strong> {current.booking_date}
          </li>
        </ul>
        <div className={styles.clear}></div>
      </div>
      <div className={styles.tourDetailsWrap}>
        <div className={styles.bookingInfoTitle}>Tour Details</div>
        <ul>
          <span>Contact Details</span>
          <li>
            <strong>Full name:</strong>
            {current.user_name} {current.user_lastname}
          </li>
          <li>
            <strong>Email</strong>
            {current.user_email}
          </li>
          <li>
            <strong>Phone number:</strong>
            {current.user_phone}
          </li>
          <li>
            <strong>Address</strong>
            {current.user_address}
          </li>
        </ul>
        <ul>
          <span>Main Information</span>
          <li>
            <strong>Tour title:</strong>
            {current.title}
          </li>
          <li>
            <strong>Tour duration:</strong>
            {current.duration}
          </li>
          <li>
            <strong>Main destination:</strong>
            {current.destination}
          </li>
          <li>
            <strong>Guests count:</strong>
            {current.guests}
          </li>
          <li>
            <strong>Tour type:</strong>
            {current.tour_type}
          </li>
        </ul>
        <div className={styles.clear}></div>
      </div>
      <div className={styles.bookingDetailsTable}>
        <div className={styles.bookingInfoTitle}>Details</div>
        <table className={`table table-striped ${styles.bookingDetailsT}`}>
          <thead>
            <tr>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">PRICE</th>
              <th scope="col">DISCOUNT</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tour</th>
              <td>{current.guests}</td>
              <td>{Number(current.price).toFixed(2)}</td>
              <td>{Number(current.discount).toFixed(2)} %</td>
              <td>{Number(current.total_price).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.bookingTotal}>
          <ul>
            <li>
              <strong>Discount:</strong> {Number(current.discount).toFixed(2)} %
            </li>
            <li>
              <strong>Total Amount:</strong>{" "}
              {Number(current.total_price).toFixed(2)} BGN
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bookingOtherInfo}>
        <div className={styles.bookingInfoTitle}>Other Information</div>
        <ul>
          <li>
            <strong>Payment Status:</strong> {current.status}
          </li>
          <li>
            <strong>Payment Method:</strong> {current.payment_method}
          </li>
          <li>
            <strong>Paid by:</strong> {current.paid_by}
          </li>
          <li>
            <strong>Cancelation:</strong> {current.cancellation}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Tour includes:</strong> {current.included}
          </li>
          <li>
            <strong>Not included:</strong> {current.not_included}
          </li>
        </ul>
        {current.status === "Completed" ? (
          <>
            <button className={styles.cancel} onClick={cancelBooking}>
              Cancel Reservation
            </button>
            <a href="/terms" target="_blank">
              Cancelation policy
            </a>
            <a href="/terms" target="_blank">
              Refund Policy
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
};
