import { useEffect } from "react";
import styles from "../Profile.module.css";
export const General = ({ user }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.title}>General Information</div>
          <div className={styles.information}>
            <div className={styles.leftInfo}>
              <ul>
                <li>
                  <b>Name</b>
                  <span>{user.name}</span>
                </li>
                <li>
                  <b>Email</b>
                  <span>{user.email}</span>
                </li>
                <li>
                  <b>Country</b>
                  <span>{user.country}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Last name</b>
                  <span>{user.lastname}</span>
                </li>
                <li>
                  <b>Phone</b>
                  <span>{user.phone}</span>
                </li>
                <li>
                  <b>City</b>
                  <span>{user.city}</span>
                </li>
              </ul>
            </div>
            <div className={styles.rightEdit}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                explicabo quae accusantium ipsum similique doloremque, odit,
                omnis esse veritatis repudiandae praesentium minus tempore illo
                eos maiores reiciendis et corrupti sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
