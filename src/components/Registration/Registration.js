import styles from "./Registration.module.css";
export const Registration = () => {
  return (
    <div className={styles.main}>
      <div className={styles.registration}>
        <h3>Sign Up</h3>
        <form action="">
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="">Your name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Your Last name</label>
              <input type="text" placeholder="Your Last name" />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="">Your Email</label>
              <input type="text" placeholder="Your Email" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Your Phone number</label>
              <input type="text" placeholder="Your Phone number" />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="">Your country</label>
              <input type="text" placeholder="Your country" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Your city</label>
              <input type="text" placeholder="Your city" />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="">Your password</label>
              <input type="password" placeholder="Your password" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Confirm password</label>
              <input type="password" placeholder="Confirm password" />
            </div>
          </div>
          <div className={styles.confirm}>
            <input type="checkbox" />
            By clicking Sign Up you confirm that you have read and agree with
            Terms of use and Privacy policy
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};
