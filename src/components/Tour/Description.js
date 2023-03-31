import styles from "./Tour.module.css";
export const Description = ({ tour }) => {
  return (
    <div className={styles.program}>
      <div className={styles.boxTitle}>Description</div>
      <div dangerouslySetInnerHTML={{ __html: tour.description }}></div>
    </div>
  );
};
