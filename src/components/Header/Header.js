import styles from "./Header.module.css";
import travel from "./travel.svg";
export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeft}>
          <h1>
            Want to travel? <br /> Find new locations with us!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam
            repellat pariatur nesciunt dolor laudantium et? Nulla molestias
            provident reiciendis.
          </p>
          <a href="">Get started now!</a>
        </div>
        <div className={styles.headerRight}>
          <img src={travel} alt="" />
        </div>
      </div>
    </section>
  );
};
