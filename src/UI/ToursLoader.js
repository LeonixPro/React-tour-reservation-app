import styles from "./UI.module.css";
export const ToursLoader = () => {
  return (
    <div className={styles.toursLoader}>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
