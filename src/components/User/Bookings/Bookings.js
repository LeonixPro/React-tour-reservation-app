import { setTitle } from "../../../utils/utils";
import { useState } from "react";
import styles from "../Profile.module.css";
import { BookingDetails } from "./BookingDetails";
import { cancel } from "../../../services/bookingServices";
export const Bookings = ({ booking }) => {
  setTitle("My bookings");
  const [current, setCurrent] = useState(false);
  const [details, setDetails] = useState([]);
  const [message, setMessage] = useState(null);
  const [bookingList, setBookingList] = useState(booking);
  const chooseCurrent = (id) => {
    setCurrent(true);
    setDetails(bookingList[id]);
  };
  const close = () => {
    setCurrent(!current);
    setDetails([]);
  };

  const cancelBooking = async () => {
    const data = {
      id: details.user_id,
      tour_id: details.u_id,
    };
    cancel(data, data.id).then((res) => {
      if (res) {
        setMessage("Your booking has been canceled successfully!");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        close();
        const canceled = bookingList.map((b) =>
          b.u_id === data.tour_id ? { ...b, status: "Canceled" } : b
        );
        return setBookingList(canceled);
      }
    });
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
                      <th scope="col">Status</th>
                      <th scope="col">Price</th>
                      <th scope="col">Open</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingList.length > 0 &&
                      bookingList.map((tour, index) => (
                        <tr
                          className={
                            details.id === tour.id ? styles.activeView : null
                          }
                          key={tour.id}
                        >
                          <th scope="row">{tour.title}</th>
                          <td
                            className={
                              tour.status === "Completed"
                                ? styles.activeTour
                                : styles.inActiveTour
                            }
                          >
                            {tour.status}
                          </td>
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
              {message && <div className={styles.success}>{message}</div>}
              {current && (
                <BookingDetails
                  current={details}
                  close={close}
                  cancelBooking={cancelBooking}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
