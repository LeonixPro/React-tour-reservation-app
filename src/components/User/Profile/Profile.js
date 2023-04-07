import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { bookingList } from "../../../services/bookingServices";
import styles from "../Profile.module.css";
import { Edit } from "../Edit/Edit";
import { Bookings } from "../Bookings/Bookings";
import { General } from "../General/General";
export const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const location = useLocation();
  useEffect(() => {
    bookingList(user.u_id).then((res) => setBooking(res));
  }, [user.u_id]);
  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
              <div className={styles.headerPhoto}></div>
            </div>
            <div className={styles.headerMiddle}>
              <h3>
                {user.name} {user.lastname}
              </h3>
              <span>{user.email}</span>
              <button onClick={logOut}>Log out</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.navWrapper}>
          <div className={styles.navigation}>
            <nav>
              <ul>
                <li>
                  <Link
                    to=""
                    className={
                      location.pathname === "/profile"
                        ? styles.activeLink
                        : null
                    }
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="edit"
                    className={
                      location.pathname === "/profile/edit"
                        ? styles.activeLink
                        : null
                    }
                  >
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="my-bookings"
                    className={
                      location.pathname === "/profile/my-bookings"
                        ? styles.activeLink
                        : null
                    }
                  >
                    My bookings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route index element={<General user={user} />} />
          <Route path="edit" element={<Edit user={user} />} />
          <Route
            path="my-bookings"
            element={<Bookings user={user} booking={booking} />}
          />
        </Routes>
      </main>
    </>
  );
};
