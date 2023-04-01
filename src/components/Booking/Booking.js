// import { bookingSubmit } from "../../services/bookingServices";
import { useState } from "react";
import styles from "./Booking.module.css";
export const Booking = ({ close, tour, user }) => {
  const [guests, setGuests] = useState(1);
  const price = tour.price * guests;
  const details = {
    user_id: user.u_id,
    user_email: user.email,
    user_phone: user.phone,
    user_address: `${user.country} ${user.city}`,
    tour_id: tour.u_id,
    title: tour.title,
    departure_date: tour.departure_date,
    return_date: tour.return_date,
    duration: tour.duration,
    destination: tour.destination,
    category: tour.category,
    type: tour.type,
    guests: guests,
    included: tour.included,
    not_included: tour.not_included,
    payment_method: "Card",
    payer: `${user.name} ${user.lastname}`,
    unit_price: tour.price,
    price: price,
  };
  const bookingSubmit = async () => {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/booking/confirm`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      }
    );
    const response = await request;
    const res = await response.json();
    close(1);
  };
  const addGuest = () => {
    setGuests((prev) => prev + 1);
  };
  const minusGuest = () => {
    if (guests > 1) {
      setGuests((prev) => prev - 1);
    } else {
      return;
    }
  };
  return (
    <div className={styles.hover}>
      <div className={styles.wrap}>
        <button className={styles.close} onClick={() => close(0)}>
          X
        </button>
        <h3>Booking details</h3>
        <div className={styles.description}>
          Please, read carefully booking details, before proceed. Also, you can
          manage your booking any time from your profile.
        </div>
        <div className={styles.details}>
          <ul>
            <li>
              <b>Tour:</b> {tour.title}
            </li>
            <li>
              <b>Departure date:</b> {tour.departure_date}
            </li>
            <li>
              <b>Return date:</b> {tour.return_date}
            </li>
          </ul>
          <ul>
            <li>
              <b>Category:</b> {tour.category}
            </li>
            <li>
              <b>Type:</b> {tour.type}
            </li>
            <li className={styles.guestsTitle}>
              <b>Guests:</b>
              <button className={styles.actionButtons} onClick={minusGuest}>
                -
              </button>
              <span className={styles.guestsTotal}>
                <i className="bi bi-people-fill"></i> {guests}
              </span>
              <button className={styles.actionButtons} onClick={addGuest}>
                +
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.services}>
          <span>
            <b>In price</b>
            {tour.included}
          </span>
          <span>
            <b>Not included price</b>
            {tour.not_included}
          </span>
        </div>
        <div className={styles.payment}>
          <div>
            <b>Payment method</b>
            <span>Card</span>
          </div>
          <div>
            <b>Payer:</b>
            <span>{`${user.name} ${user.lastname}`}</span>
          </div>
          <div>
            <b>Total price</b>
            <span>{Number(price).toFixed(2)} BGN</span>
          </div>
        </div>
        <div className={styles.book}>
          <button onClick={bookingSubmit}>Proceed and book</button>
        </div>
      </div>
    </div>
  );
};
