import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { bookingList } from "../../../services/authServices";
import styles from "../Profile.module.css";
import { Edit } from "../Edit/Edit";
import { Bookings } from "../Bookings/Bookings";
import { Settings } from "../Settings/Settings";
import { General } from "../General/General";
export const Profile = () => {
  const { user, logged, logOut } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    bookingList(user.u_id).then((res) => setBooking(res));
  }, [booking]);
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
                  <Link to="">Profile</Link>
                </li>
                <li>
                  <Link to="edit">Edit Profile</Link>
                </li>
                <li>
                  <Link to="my-bookings">My bookings</Link>
                </li>
                <li>
                  <Link to="settings">Settings</Link>
                </li>
                <li>
                  <button onClick={logOut}>Log Out</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<General user={user} />} />
          <Route path="/edit" element={<Edit user={user} />} />
          <Route
            path="/my-bookings"
            element={<Bookings user={user} booking={booking} />}
          />
          <Route path="/settings" element={<Settings user={user} />} />
        </Routes>
      </main>
    </>
  );
};
