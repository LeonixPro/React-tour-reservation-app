import { useState } from "react";
import styles from "../Profile.module.css";
import { BookingDetails } from "./BookingDetails";
export const Bookings = ({ booking }) => {
  const [current, setCurrent] = useState(false);
  const [details, setDetails] = useState([]);
  const chooseCurrent = (id) => {
    setCurrent(true);
    setDetails(booking[id]);
    console.log(details);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.booking}>
            <div className={styles.leftBooking}>
              <h5>My Bookings</h5>
              <div className={styles.bookingList}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.length > 0 &&
                      booking.map((tour, index) => (
                        <tr
                          className={details.id == tour.id ? styles.activeView : null}
                          key={tour.id}
                        >
                          <th scope="row">{tour.title}</th>
                          <td>{tour.description}</td>
                          <td>{tour.duration}</td>
                          <td>{Number(tour.total_price).toFixed(2)} BGN</td>
                          <td>
                            <button
                              className={styles.view}
                              onClick={() => {
                                chooseCurrent(index);
                              }}
                            ></button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.rightBooking}>
              <h5>Booking Details</h5>
              {current && <BookingDetails current={details} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
