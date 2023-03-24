import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const { logged } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { error } = useContext(AuthContext);
  useEffect(() => {
    if (logged) {
      navigate("/");
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
            <span className={styles.error}>Please, enter your email!</span>
          )}
          <input
            className={errors?.email?.message && styles.errorInput}
            type="text"
            {...register("email", {
              required: "Please, enter your email!",
              manLength: 2,
            })}
            placeholder="Email"
          />
          {errors?.password?.message && (
            <span className={styles.error}>Please, enter your password!</span>
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
          {error && <div className={styles.errorMessage}>{error}</div>}
        </form>
      </div>
    </div>
  );
};
