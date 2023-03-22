import styles from "./Explore.module.css";
export const Explore = () => {
  return (
    <section className={styles.explore}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Explore More with us!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            facilis maiores, quia consectetur quae quidem nihil nostrum dolorum
            repudiandae et?
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.rightImg}>
            <img
              src="https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
              alt="Discover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
