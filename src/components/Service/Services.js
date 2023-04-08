import { setTitle } from "../../utils/utils";
import styles from "./Services.module.css";
import Img from "./services.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const Services = () => {
  setTitle("Services");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className={styles.services}>
        <div className={styles.headerWrapper}>
          <div className={styles.left}>
            <h1>We make our best to proved best services!</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              iure reprehenderit modi aperiam reiciendis, eum quibusdam debitis
              omnis nobis labore.
            </p>
            <Link to="/tours">Start new journey!</Link>
          </div>
          <div className={styles.right}>
            <div>
              <img src={Img} alt="Services" />
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className={styles.second}>
          <div className={styles.wrapper}>
            <div className={styles.secondBox}>
              <div className={styles.secondLeft}>
                <h3>
                  SOME TEXT HERE FOR SERVICES! SOME MORE TEXT TO SHOW HERE JUST
                  IN CASE. 
                </h3>
              </div>
              <div className={styles.secondRight}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate sit ipsam distinctio fugiat! Minima magnam
                consequatur reiciendis soluta molestias nisi tenetur consectetur
                ab voluptates distinctio, illo, temporibus, necessitatibus
                quibusdam? Fuga.
              </div>
            </div>
          </div>
        </section>
        <div className={styles.third}>
          <div className={styles.wrapper}>
            <div className={styles.thirdBoxes}>
              <div className={styles.box}>
                <span data-box="box-1"></span>
                <b>Air Tickets</b>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, vitae.
                </p>
              </div>
              <div className={styles.box}>
                <span data-box="box-2"></span>
                <b>Worldwide destinations</b>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, vitae.
                </p>
              </div>
              <div className={styles.box}>
                <span data-box="box-3"></span>
                <b>Transfer</b>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, vitae.
                </p>
              </div>
              <div className={styles.box}>
                <span data-box="box-4"></span>
                <b>Accommodation</b>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
