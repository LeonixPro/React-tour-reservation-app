import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.login}>
        <form action="">
          <h3>Log In</h3>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};
