import styles from "./Tour.module.css";
export const InPrice = () => {
  return (
    <>
      <div className={styles.boxTitle}>In price</div>
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.serviceImg} data-type="tickets"></div>
          <div className={styles.serviceDesc}>
            <b>Tickets</b>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Sequi, beatae.
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.serviceImg} data-type="hotel"></div>
          <div className={styles.serviceDesc}>
            <b>Hotel</b>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Sequi, beatae.
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.serviceImg} data-type="transfer"></div>
          <div className={styles.serviceDesc}>
            <b>Transfer</b>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Sequi, beatae.
          </div>
        </div>
      </div>
    </>
  );
};
