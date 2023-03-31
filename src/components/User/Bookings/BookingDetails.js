import styles from "../Profile.module.css";
export const BookingDetails = ({ current }) => {
  const data = {
    id: current.user_id,
    tour_id: current.u_id,
  };
  const cancelBooking = async () => {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/booking/cancel`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: data.id,
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request;
    const res = await response.json();
  };
  return (
    <div className={styles.bookingWrap}>
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
          {current.status == "Completed" ? (
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
              <th scope="col">UNIT PRICE</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Five days in Paris</th>
              <td>{current.guests}</td>
              <td>{Number(current.price).toFixed(2)} BGN</td>
              <td>{Number(current.total_price).toFixed(2)} BGN</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.bookingTotal}>
          <ul>
            <li>
              <strong>Discount:</strong> 0.00
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
        <button className={styles.cancel} onClick={cancelBooking}>
          Cancel Reservation
        </button>
        <a href="">Cancelation policy</a>
        <a href="">Refund Policy</a>
      </div>
    </div>
  );
};
