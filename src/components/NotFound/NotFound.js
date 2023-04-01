import styles from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h2>Page not found</h2>
          <p>Please, make sure you try to access correct page!</p>
        </div>
      </div>
    </main>
  );
};
