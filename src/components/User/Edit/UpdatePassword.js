import styles from "../Profile.module.css";
import { useForm } from "react-hook-form";
import { updatePassword } from "../../../services/authServices";
import { useState } from "react";
export const UpdatePassword = ({ user }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const onPasswordUpdate = (data) => {
    updatePassword(data).then((res) => {
      if (res) {
        if (res.status === false) {
          setErrorMessage(res.message);
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
          reset();
          return;
        }
        setSuccessMessage(res.message);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
        reset();
      }
    });
  };
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: user.u_id,
      name: user.name,
      lastname: user.lastname,
    },
    mode: "onBlur",
  });
  return (
    <div className={styles.updatePassword}>
      <form onSubmit={handleSubmit(onPasswordUpdate)}>
        <ul>
          <li>
            <label htmlFor="current_password">Current Password</label>
            <input
              className={errors?.password?.message && styles.errorInput}
              type="password"
              {...register("password", {
                required: "Password can not be empty!",
              })}
              id="current_password"
              placeholder="Your Current Password"
            />
            {errors?.password?.message && (
              <span className={styles.error}>{errors.password.message}</span>
            )}
          </li>
          <li>
            <label htmlFor="new_password">New password</label>
            <input
              className={errors?.country?.message && styles.errorInput}
              type="password"
              {...register("new_password", {
                required: "Password can not be empty!",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&+=]).{8,}$/,
                  message:
                    "Password should contain at least: 1 capital letter, 1 digit, 1 of symbols (!@#$%^&+=), and min length is 8",
                },
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Max length is 30 characters",
                },
              })}
              id="new_password"
              placeholder="Your new password"
            />
            {errors?.new_password?.message && (
              <span className={styles.error}>
                {errors.new_password.message}
              </span>
            )}
          </li>
        </ul>
        <button onClick={() => getValues()}>Change password</button>
      </form>
      <div className={styles.passwordInfo}>
        <b>Password should contain at least:</b>
        <ul>
          <li>1 capital letter</li>
          <li>1 digit</li>
          <li>1 of symbols (!@#$%^&+=)</li>
          <li>Min length is 8</li>
        </ul>
      </div>
      {successMessage && <div className={styles.success}>{successMessage}</div>}
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
