import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import styles from "../Profile.module.css";
export const Edit = () => {
  const [success, setSuccess] = useState(false);
  const { user, edit, editMessage } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
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
                    {errors?.email?.message && (
                      <span className={styles.error}>
                        {errors.email.message}
                      </span>
                    )}
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
                  </li>
                  <li>
                    <label htmlFor="country">Country</label>
                    {errors?.country?.message && (
                      <span className={styles.error}>
                        {errors.country.message}
                      </span>
                    )}
                    <input
                      type="text"
                      className={errors?.country?.message && styles.errorInput}
                      defaultValue={user.country}
                      {...register("country", {
                        required: "Country can not be empty!",
                      })}
                      placeholder="Your Country"
                      id="country"
                    />
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
                    {errors?.phone?.message && (
                      <span className={styles.error}>
                        {errors.phone.message}
                      </span>
                    )}
                    <input
                      type="text"
                      className={errors?.phone?.message && styles.errorInput}
                      defaultValue={user.phone}
                      {...register("phone", {
                        required: "Phone can not be empty!",
                      })}
                      placeholder="Phone"
                      id="phone"
                    />
                  </li>
                  <li>
                    <label htmlFor="city">City</label>
                    {errors?.city?.message && (
                      <span className={styles.error}>
                        {errors.city.message}
                      </span>
                    )}
                    <input
                      type="text"
                      className={errors?.city?.message && styles.errorInput}
                      defaultValue={user.city}
                      {...register("city", {
                        required: "City can not be empty!",
                      })}
                      placeholder="City"
                      id="city"
                    />
                  </li>
                </ul>
              </form>
              {success && <div>Data has been updated</div>}
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
