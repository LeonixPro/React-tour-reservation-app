import { ShowGallery } from "./ShowGallery";
import styles from "./Tour.module.css";
import { useState } from "react";
export const Gallery = ({ tour }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [activeGallery, setActiveGallery] = useState(false);

  const imgSrc = `https://source.unsplash.com/random/?city,${tour.destination}`;

  const images = [
    tour.main_img,
    tour.img_2,
    tour.img_3,
    tour.img_4,
    tour.img_5,
    tour.img_6,
  ];

  const showImg = (e) => {
    const img = e.target.src;
    const index = images.findIndex((i) => i === img);
    setActiveGallery(true);
    setActiveImg(index);
  };
  const closeGallery = () => {
    setActiveGallery(false);
  };
  const handleError = (e) => (e.target.src = imgSrc);
  return (
    <>
      {activeGallery && (
        <ShowGallery
          images={images}
          activeImg={activeImg}
          closeGallery={closeGallery}
        />
      )}
      <div className={styles.gallery}>
        <div className={styles.mainPhoto}>
          <img
            src={tour?.img_2}
            onError={handleError}
            alt={tour.title}
            onClick={showImg}
          />
        </div>
        <div className={styles.photo1}>
          <img
            src={tour?.img_3}
            onError={handleError}
            alt={tour.title}
            onClick={showImg}
          />
        </div>
        <div className={styles.photo2}>
          <img
            src={tour?.img_4}
            onError={handleError}
            alt={tour.title}
            onClick={showImg}
          />
        </div>
        <div className={styles.photo3}>
          <img
            src={tour?.img_5}
            onError={handleError}
            alt={tour.title}
            onClick={showImg}
          />
        </div>
        <div className={styles.photo4}>
          <img
            src={tour?.img_6}
            onError={handleError}
            alt={tour.title}
            onClick={showImg}
          />
        </div>
      </div>
    </>
  );
};
