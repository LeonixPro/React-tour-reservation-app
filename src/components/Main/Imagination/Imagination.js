import styles from "./Imagination.module.css";
export const Imagination = () => {
  return (
    <section className={styles.imagination}>
      <div className={styles.wrapper}>
        <div className={styles.offersWrap}>
          <div className={styles.offer}>
            <h2>Go beyond your imagination</h2>
            <p>Discover your ideal experience with us</p>
          </div>
          <div className={styles.offer}>
            <div className={styles.hoverImg} data-title="Barcelona"></div>
            <img
              src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
              alt="Barcelona"
            />
          </div>
          <div className={styles.offer}>
            <div className={styles.hoverImg} data-title="Yerevan"></div>
            <img
              src="https://images.unsplash.com/photo-1605508556477-02459ecf93ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
              alt="Yerevan"
            />
          </div>
          <div className={styles.offer}>
            <div className={styles.hoverImg} data-title="Milan"></div>
            <img
              src="https://images.unsplash.com/photo-1543864080-6d6644ddcbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="Milan"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
