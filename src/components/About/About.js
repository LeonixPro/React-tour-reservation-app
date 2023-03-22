import styles from "./About.module.css";
import Discover from "./discover.jpg";
import Mission from "./mission.jpg";
export const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.headerWrapper}>
          <h1>ABOUT US</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptatum quo id quisquam! Laboriosam distinctio voluptate
            delectus, maiores perspiciatis odit repellat veniam mollitia quod
            hic, possimus temporibus a, error ipsum!
          </p>
        </div>
      </section>
      <section className={styles.title}>
        <h2>Who We are?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          quisquam.
        </p>
      </section>
      <section className={styles.discover}>
        <div className={styles.wrapper}>
          <div className={styles.boxes}>
            <div className={styles.left}>
              <h3>Discover the world!</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam blanditiis architecto odit eaque omnis vitae laudantium
                atque nisi soluta pariatur? Vitae consectetur cupiditate
                exercitationem labore doloremque porro perspiciatis molestias
                cumque?
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.rightImg}>
                <img src={Discover} alt="Discover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mission}>
        <div className={styles.wrapper}>
          <div className={styles.boxes}>
            <div className={styles.leftMission}>
              <div className={styles.missionImg}>
                <img src={Mission} alt="Mission" />
              </div>
            </div>
            <div className={styles.rightMission}>
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam blanditiis architecto odit eaque omnis vitae laudantium
                atque nisi soluta pariatur? Vitae consectetur cupiditate
                exercitationem labore doloremque porro perspiciatis molestias
                cumque?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.title}>
        <h2>Why TraveleR?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          quisquam.
        </p>
      </section>
    </>
  );
};
