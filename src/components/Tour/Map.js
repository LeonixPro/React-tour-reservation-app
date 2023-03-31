import styles from "./Tour.module.css";
export const Map = ({ tour }) => {
  return (
    <>
      <div className={styles.boxTitle}>On Map</div>
      <div
        className={styles.mapBox}
        dangerouslySetInnerHTML={{ __html: tour.map }}
      ></div>
    </>
  );
};
