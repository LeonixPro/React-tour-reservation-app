import { Link } from "react-router-dom";
import { Logo } from "../../UI/Logo";
import styles from "./Top.module.css";
export const Top = () => {
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
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
