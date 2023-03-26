import styles from "./Tour.module.css";

export const Gallery = ({tour}) => {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.mainPhoto}>
          <img src={tour.img_2} alt="Main Photo" />
        </div>
        <div className={styles.photo1}>
          <img src={tour.img_3} alt="Main Photo" />
        </div>
        <div className={styles.photo2}>
          <img src={tour.img_4} alt="Main Photo" />
        </div>
        <div className={styles.photo3}>
          <img src={tour.img_5} alt="Main Photo" />
        </div>
        <div className={styles.photo4}>
          <img src={tour.img_6} alt="Main Photo" />
        </div>
      </div>
    </>
  );
};
