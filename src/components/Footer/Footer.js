import { Link } from "react-router-dom";
import { Logo } from "../../UI/Logo";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.footerBoxes}>
          <div className={styles.footerBox}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              provident animi rem, nam quibusdam quidem! Esse iusto nisi
              mollitia totam?
            </div>
            <div className={styles.social}>
              <b>Follow us</b>
              <a href="/" title="Facebook"></a>
              <a href="/" title="Twitter"></a>
              <a href="/" title="Instagram"></a>
              <a href="/" title="LinkedIn"></a>
            </div>
          </div>
          <div className={styles.footerBox}>
            <nav>
              <ul>
                <span>Navigation</span>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/tours">Tours</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerBox}>
            <nav>
              <ul>
                <span>General</span>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerBox}>
            <nav>
              <ul>
                <span>Account</span>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/registration">Sign Up</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <b>Copyright © Levon Aramyan</b> - Test project for SoftUni
          </div>
          <div className={styles.right}>
            <nav>
              <ul>
                <li>
                  <Link to="/terms">Terms of use</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
