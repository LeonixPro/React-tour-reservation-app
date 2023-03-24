import styles from "./UI.module.css";
export const Loader = () => {
  return (
    <div className={styles.loaderWrap}>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
