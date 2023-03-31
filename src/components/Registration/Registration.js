import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.css";
export const Registration = () => {
  const navigate = useNavigate();
  const { logged } = useContext(AuthContext);
  const { error } = useContext(AuthContext);
  const { registration } = useContext(AuthContext);
  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  }, [logged]);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div className={styles.main}>
      <div className={styles.registration}>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit(registration)}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="name">Your name</label>
              {errors?.name?.message && (
                <span className={styles.error}>Please, enter your name!</span>
              )}
              <input
                type="text"
                className={errors?.name?.message && styles.errorInput}
                {...register("name", {
                  required: "Name can not be empty!",
                })}
                placeholder="Your name"
                id="name"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="lastname">Your Last name</label>
              {errors?.lastname?.message && (
                <span className={styles.error}>
                  Please, enter your last name!
                </span>
              )}
              <input
                type="text"
                className={errors?.lastname?.message && styles.errorInput}
                {...register("lastname", {
                  required: "Last name can not be empty!",
                })}
                placeholder="Your Last name"
                id="lastname"
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="email">Your Email</label>
              {errors?.email?.message && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
              <input
                type="tel"
                className={errors?.email?.message && styles.errorInput}
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
            </div>
            <div className={styles.input}>
              <label htmlFor="phone">Your Phone number</label>
              {errors?.phone?.message && (
                <span className={styles.error}>Please, enter your phone!</span>
              )}
              <input
                type="text"
                className={errors?.phone?.message && styles.errorInput}
                {...register("phone", {
                  required: "Phone can not be empty!",
                })}
                placeholder="Your Phone number"
                id="phone"
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="country">Your country</label>
              {errors?.country?.message && (
                <span className={styles.error}>
                  Please, enter your country!
                </span>
              )}
              <input
                type="text"
                className={errors?.country?.message && styles.errorInput}
                {...register("country", {
                  required: "Country can not be empty!",
                })}
                placeholder="Your country"
                id="country"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="city">Your city</label>
              {errors?.city?.message && (
                <span className={styles.error}>Please, enter your city!</span>
              )}
              <input
                type="text"
                className={errors?.city?.message && styles.errorInput}
                {...register("city", {
                  required: "City can not be empty!",
                })}
                placeholder="Your city"
                id="city"
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="password">Your password</label>
              {errors?.password?.message && (
                <span className={styles.error}>
                  {errors?.password?.message}
                </span>
              )}
              <input
                type="password"
                {...register("password", {
                  required: "Password can not be empty!",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="confirm_password">Confirm password</label>
              {errors?.confirm_password?.message && (
                <span className={styles.error}>
                  {errors?.confirm_password?.message}
                </span>
              )}
              {watch("confirm_password") !== watch("password") &&
              getValues("confirm_password") ? (
                <span className={styles.error}>Password not match</span>
              ) : null}
              <input
                type="password"
                {...register("confirm_password", {
                  validate: (value) => value === getValues("password"),
                })}
              />
            </div>
          </div>
          <div className={styles.confirm}>
            <input
              type="checkbox"
              {...register("terms", {
                required:
                  "You have to agree with Terms of use and Privacy Policy to proceed!",
              })}
            />
            By clicking Sign Up you confirm that you have read and agree with
            Terms of use and Privacy policy
            {errors?.terms?.message && (
              <span className={styles.errorTerms}>
                You have to agree with Terms of use and Privacy Policy to
                proceed!
              </span>
            )}
          </div>
          <button>Register now!</button>
          {error && <div className={styles.errorMessage}>{error}</div>}
        </form>
      </div>
    </div>
  );
};
