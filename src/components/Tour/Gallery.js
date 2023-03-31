import styles from "./Tour.module.css";
import loading from "./loading.gif";
import { useState } from "react";
export const Gallery = ({ tour }) => {
  const [imgSrc, setImgSrc] = useState(loading);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (e) => setLoaded(true);
  const handleError = (e) => (e.target.src = imgSrc);
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.mainPhoto}>
          <img src={tour?.img_2} onError={handleError} alt="Main Photo" />
        </div>
        <div className={styles.photo1}>
          <img src={tour?.img_3} onError={handleError} alt="Main Photo" />
        </div>
        <div className={styles.photo2}>
          <img src={tour?.img_4} onError={handleError} alt="Main Photo" />
        </div>
        <div className={styles.photo3}>
          <img src={tour?.img_5} onError={handleError} alt="Main Photo" />
        </div>
        <div className={styles.photo4}>
          <img src={tour?.img_6} onError={handleError} alt="Main Photo" />
        </div>
      </div>
    </>
  );
};
