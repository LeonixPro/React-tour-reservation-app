import styles from "./Tour.module.css";

export const Gallery = () => {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.mainPhoto}>
          <img src="/placeholder.jpg" alt="Main Photo" />
        </div>
        <div className={styles.photo1}>
          <img src="/placeholder.jpg" alt="Main Photo" />
        </div>
        <div className={styles.photo2}>
          <img src="/placeholder.jpg" alt="Main Photo" />
        </div>
        <div className={styles.photo3}>
          <img src="/placeholder.jpg" alt="Main Photo" />
        </div>
        <div className={styles.photo4}>
          <img src="/placeholder.jpg" alt="Main Photo" />
        </div>
      </div>
    </>
  );
};
