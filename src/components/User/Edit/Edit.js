import { setTitle } from "../../../utils/utils";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import styles from "../Profile.module.css";

export const Edit = ({ user }) => {
  setTitle("Edit information");
  const { edit, editMessage } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.edit}>
            <div className={styles.leftEdit}>
              <h5>Edit Details</h5>
              <form onSubmit={handleSubmit(edit)}>
                <ul>
                  <li>
                    <b>Name</b>
                    <span>{user.name}</span>
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={errors?.email?.message && styles.errorInput}
                      defaultValue={user.email}
                      {...register("email", {
                        required: "Email can not be empty!",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email provided",
                        },
                      })}
                      placeholder="Your Email"
                      id="email"
                    />
                    {errors?.email?.message && (
                      <span className={styles.error}>
                        {errors.email.message}
                      </span>
                    )}
                  </li>
                  <li>
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className={errors?.country?.message && styles.errorInput}
                      defaultValue={user.country}
                      {...register("country", {
                        required: "Country can not be empty!",
                        pattern: {
                          value: /^[A-Za-z ]+$/i,
                          message: "You can  not use symbols or numbers",
                        },
                        maxLength: {
                          value: 20,
                          message: "Max length is 20",
                        },
                        minLength: {
                          value: 3,
                          message: "Min length is 3",
                        },
                      })}
                      placeholder="Your Country"
                      id="country"
                    />
                    {errors?.country?.message && (
                      <span className={styles.error}>
                        {errors.country.message}
                      </span>
                    )}
                  </li>
                  <button>Submit changes</button>
                </ul>
                <ul>
                  <li>
                    <b>Last name</b>
                    <span>{user.lastname}</span>
                  </li>
                  <li>
                    <label htmlFor="country">Phone number</label>
                    <input
                      type="text"
                      className={errors?.phone?.message && styles.errorInput}
                      defaultValue={user.phone}
                      {...register("phone", {
                        required: "Phone can not be empty!",
                        pattern: {
                          value: /^[0-9 ]+$/,
                          message: "Please enter a number",
                        },
                      })}
                      placeholder="Phone"
                      id="phone"
                    />
                    {errors?.phone?.message && (
                      <span className={styles.error}>
                        {errors.phone.message}
                      </span>
                    )}
                  </li>
                  <li>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className={errors?.city?.message && styles.errorInput}
                      defaultValue={user.city}
                      {...register("city", {
                        required: "City can not be empty!",
                        pattern: {
                          value: /^[A-Za-z ]+$/i,
                          message: "You can  not use symbols or numbers",
                        },
                        maxLength: {
                          value: 20,
                          message: "Max length is 20",
                        },
                        minLength: {
                          value: 3,
                          message: "Min length is 3",
                        },
                      })}
                      placeholder="City"
                      id="city"
                    />
                    {errors?.city?.message && (
                      <span className={styles.error}>
                        {errors.city.message}
                      </span>
                    )}
                  </li>
                </ul>
              </form>
            </div>
            <div className={styles.rightEdit}>
              <h5>Useful Info</h5>
              <b>Some text</b>
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
      {editMessage && <div className={styles.success}>{editMessage}</div>}
    </>
  );
};
