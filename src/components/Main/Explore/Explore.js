import styles from "./Explore.module.css";
import Img from "./explore.jpg";
export const Explore = () => {
  return (
    <section className={styles.explore}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Explore More with us!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            facilis maiores, quia consectetur quae quidem nihil nostrum dolorum
            repudiandae et?
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.rightImg}>
            <img src={Img} alt="Discover More" />
          </div>
        </div>
      </div>
    </section>
  );
};
