import styles from "./Tour.module.css";
export const Header = ({ tour, weather, onBookClick }) => {
  return (
    <header>
      <section className={styles.header}>
        <div className={styles.headerImg}>
          <img src={tour.main_img} alt="Tour Title" />
        </div>
        <div className={styles.headerTop}>
          <h1>{tour.title}</h1>
          <button className={styles.headerButton} onClick={onBookClick}>
            Book now!
          </button>
          <div className={styles.weather}>
            <div className={styles.weatherImg}>
              <span>{weather.main?.temp?.toFixed()}°</span>{" "}
            </div>
            <div className={styles.weatherDescription}>
              {weather.main?.temp && weather.weather[0].description}
            </div>
            <div className={styles.weatherCurrent}>
              Current weather in {tour.destination}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
