import { useState } from "react";
import styles from "./Tour.module.css";

export const ShowGallery = ({ images, activeImg, closeGallery }) => {
  const [active, setActive] = useState(activeImg);
  const nextImg = () => {
    if (active < 5) {
      setActive((prev) => prev + 1);
    } else {
      setActive(0);
    }
  };
  const prevImg = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);
    } else {
      setActive(5);
    }
  };
  return (
    <div className={styles.activeGalleryWrap}>
      <button className={styles.closeGallery} onClick={closeGallery}>
        <i className="bi bi-x-circle-fill"></i>
      </button>
      <div className={styles.activeGalleryImgBox}>
        <div className={styles.activeImage}>
          <img src={images[active]} alt="" />
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.prevImg}>
            <i className="bi bi-arrow-left-circle-fill" onClick={prevImg}></i>
          </div>
          <div className={styles.nextImg}>
            <i className="bi bi-arrow-right-circle-fill" onClick={nextImg}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
