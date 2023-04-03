import styles from "./UI.module.css";
export const MainLoader = () => {
  return (
    <div className={styles.mainLoader}>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
