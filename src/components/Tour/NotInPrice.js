import styles from "./Tour.module.css";
export const NotInPrice = () => {
  return (
    <>
      <div className={styles.boxTitle}>Not in price</div>
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.serviceImg} data-type="insurance"></div>
          <div className={styles.serviceDesc}>
            <b>Insurance</b>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Sequi, beatae.
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.serviceImg} data-type="museum"></div>
          <div className={styles.serviceDesc}>
            <b>Museum tickets</b>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sequi, beatae.
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.serviceImg} data-type="photo"></div>
          <div className={styles.serviceDesc}>
            <b>Photo shoot service</b>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sequi, beatae.
          </div>
        </div>
      </div>
    </>
  );
};
