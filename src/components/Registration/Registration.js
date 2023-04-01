import { setTitle } from "../../utils/utils";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.css";
export const Registration = () => {
  setTitle("Registration");
  const navigate = useNavigate();
  const { logged } = useContext(AuthContext);
  const { regError } = useContext(AuthContext);
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
              <input
                type="text"
                className={errors?.name?.message && styles.errorInput}
                {...register("name", {
                  required: "Name can not be empty!",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "You can  not use symbols or numbers",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max length is 20",
                  },
                  minLength: {
                    value: 2,
                    message: "Min length is 2",
                  },
                })}
                placeholder="Your name"
                id="name"
              />
              {errors?.name?.message && (
                <span className={styles.error}>{errors?.name?.message}</span>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="lastname">Your Last name</label>
              <input
                type="text"
                className={errors?.lastname?.message && styles.errorInput}
                {...register("lastname", {
                  required: "Last name can not be empty!",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "You can  not use symbols or numbers",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max length is 20",
                  },
                  minLength: {
                    value: 2,
                    message: "Min length is 2",
                  },
                })}
                placeholder="Your Last name"
                id="lastname"
              />
              {errors?.lastname?.message && (
                <span className={styles.error}>
                  {errors?.lastname?.message}
                </span>
              )}
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="email">Your Email</label>
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
              {errors?.email?.message && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="phone">Your Phone number</label>
              <input
                type="tel"
                className={errors?.phone?.message && styles.errorInput}
                {...register("phone", {
                  required: "Phone can not be empty!",
                  pattern: {
                    value: /^[0-9 ]+$/,
                    message: "Please enter a number",
                  },
                })}
                placeholder="Your Phone number"
                id="phone"
              />
              {errors?.phone?.message && (
                <span className={styles.error}>{errors?.phone?.message}</span>
              )}
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="country">Your country</label>

              <input
                type="text"
                className={errors?.country?.message && styles.errorInput}
                {...register("country", {
                  required: "Country can not be empty!",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
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
                placeholder="Your country"
                id="country"
              />
              {errors?.country?.message && (
                <span className={styles.error}>{errors?.country?.message}</span>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="city">Your city</label>

              <input
                type="text"
                className={errors?.city?.message && styles.errorInput}
                {...register("city", {
                  required: "City can not be empty!",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "You can not use symbols or numbers",
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
                placeholder="Your city"
                id="city"
              />
              {errors?.city?.message && (
                <span className={styles.error}>{errors?.city?.message}</span>
              )}
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="password">Your password</label>

              <input
                type="password"
                {...register("password", {
                  required: "Password can not be empty!",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                placeholder="Password"
              />
              {errors?.password?.message && (
                <span className={styles.error}>
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="confirm_password">Confirm password</label>
              <input
                type="password"
                {...register("confirm_password", {
                  required: "Confirm password can not be empty!",
                  validate: (value) => value === getValues("password"),
                })}
                placeholder="Confirm password"
              />
              {errors?.confirm_password?.message && (
                <span className={styles.error}>
                  {errors?.confirm_password?.message}
                </span>
              )}
              {watch("confirm_password") !== watch("password") &&
              getValues("confirm_password") ? (
                <span className={styles.error}>Password not match</span>
              ) : null}
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
          {regError && <div className={styles.errorMessage}>{regError}</div>}
        </form>
      </div>
    </div>
  );
};
