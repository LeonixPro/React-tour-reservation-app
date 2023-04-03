import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { setName } from "../../utils/utils";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../UI/Logo";
import styles from "./Top.module.css";
export const Top = () => {
  const { user } = useContext(AuthContext);
  const { logged } = useContext(AuthContext);
  const activeLink = useLocation();
  const tourLink = activeLink.pathname.split("/");
  return (
    <div className={styles.top}>
      <div className={styles.Wrapper}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <Link
                  to="/about"
                  className={
                    activeLink.pathname === "/about" ? styles.activeLink : null
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={
                    activeLink.pathname === "/services"
                      ? styles.activeLink
                      : null
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className={
                    activeLink.pathname === "/tours" || tourLink[1] === "tour"
                      ? styles.activeLink
                      : null
                  }
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className={
                    activeLink.pathname === "/contacts"
                      ? styles.activeLink
                      : null
                  }
                >
                  Contacts
                </Link>
              </li>
              {logged === true ? (
                <li>
                  <Link className={styles.userProfile} to="/profile">
                    {setName(user?.name, user?.lastname)}
                  </Link>
                  <span>
                    {user?.name} {user?.lastname} <b>{user?.email}</b>
                  </span>
                </li>
              ) : (
                <>
                  <li>
                    <Link className={styles.auth} to="/login">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.auth} to="/registration">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
