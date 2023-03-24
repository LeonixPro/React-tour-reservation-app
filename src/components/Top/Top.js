import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Logo } from "../../UI/Logo";
import styles from "./Top.module.css";
export const Top = () => {
  const { user } = useContext(AuthContext);
  const { logged } = useContext(AuthContext);
  let f = user?.name?.substring(0, 1);
  let s = user?.lastname?.substring(0, 1);
  return (
    <div className={styles.top}>
      <div className={styles.Wrapper}>
        <Logo />
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              {logged === true ? (
                <li>
                  <Link className={styles.userProfile} to="/profile">
                    {f} {s}
                  </Link>
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
