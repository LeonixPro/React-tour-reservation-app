import styles from "./Promotion.module.css";
export const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.wrapper}>
        <h2>Our incredible promotions!</h2>
        <div className={styles.offersWrap}>
          <div className={styles.offer}>
            <img src="https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="IMG" />
            <div className={styles.hover}>
              <div className={styles.title}>Prague</div>
              <div className={styles.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, quasi!
              </div>
              <a href="#">More</a>
            </div>
          </div>
          <div className={styles.offer}>
            <img src="https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="IMG" />
            <div className={styles.hover}>
              <div className={styles.title}>Prague</div>
              <div className={styles.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, quasi!
              </div>
              <a href="#">More</a>
            </div>
          </div>
          <div className={styles.offer}>
            <img src="https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="IMG" />
            <div className={styles.hover}>
              <div className={styles.title}>Prague</div>
              <div className={styles.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, quasi!
              </div>
              <a href="#">More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
