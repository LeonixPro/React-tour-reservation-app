import { setTitle } from "../../utils/utils";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  setTitle("Login");
  const navigate = useNavigate();
  const { logged } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { loginError } = useContext(AuthContext);
  useEffect(() => {
    if (logged) {
      return navigate("/profile");
    }
  }, [logged]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div className={styles.main}>
      <div className={styles.login}>
        <form onSubmit={handleSubmit(login)}>
          <h3>Log In</h3>
          {errors?.email?.message && (
            <span className={styles.error}>{errors?.email?.message}</span>
          )}
          <input
            className={errors?.email?.message && styles.errorInput}
            type="email"
            {...register("email", {
              required: "Please, enter your email!",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email provided",
              },
            })}
            placeholder="Email"
          />
          {errors?.password?.message && (
            <span className={styles.error}>{errors?.password?.message}</span>
          )}
          <input
            className={errors?.password?.message && styles.errorInput}
            type="password"
            {...register("password", {
              required: "Please, enter your password!",
            })}
            placeholder="Password"
          />
          <button>Log in</button>
          {loginError && (
            <div className={styles.errorMessage}>{loginError}</div>
          )}
        </form>
      </div>
    </div>
  );
};
