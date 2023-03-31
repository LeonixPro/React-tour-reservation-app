import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Reviews.module.css";
export const ReviewForm = ({ tour, user, sendReview }) => {
  const [active, setActive] = useState("");
  const setScore = (e) => {
    setActive({ ...active, [e.target.name]: e.target.value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      user_name: user.name,
      user_lastname: user.lastname,
      user_email: user.email,
      tour_id: tour.u_id,
    },
  });

  return (
    <div className={styles.reviewForm}>
      <form onSubmit={handleSubmit(sendReview)}>
        <div className={styles.scoreBox}>
          <div className={styles.scores}>
            <label
              htmlFor="1"
              className={active.rate == 1 ? styles.activeNegative : null}
            >
              <i className="bi bi-emoji-angry"></i>
            </label>
            <input
              type="radio"
              {...register("rate", { required: "Please, add a score!" })}
              value="1"
              id="1"
              onChange={setScore}
            />
          </div>
          <div className={styles.scores}>
            <label
              htmlFor="2"
              className={active.rate == 2 ? styles.activeNegative : null}
            >
              <i className="bi bi-emoji-frown"></i>
            </label>
            <input
              type="radio"
              {...register("rate", { required: "Please, add a score!" })}
              value="2"
              id="2"
              onChange={setScore}
            />
          </div>
          <div className={styles.scores}>
            <label
              htmlFor="3"
              className={active.rate == 3 ? styles.activePositive : null}
            >
              <i className="bi bi-emoji-smile"></i>
            </label>
            <input
              type="radio"
              {...register("rate", { required: "Please, add a score!" })}
              value="3"
              id="3"
              onChange={setScore}
            />
          </div>
          <div className={styles.scores}>
            <label
              htmlFor="4"
              className={active.rate == 4 ? styles.activePositive : null}
            >
              <i className="bi bi-emoji-laughing"></i>
            </label>
            <input
              type="radio"
              {...register("rate", { required: "Please, add a score!" })}
              value="4"
              id="4"
              onChange={setScore}
            />
          </div>
          <div className={styles.scores}>
            <label
              htmlFor="5"
              className={active.rate == 5 ? styles.activePositive : null}
            >
              <i className="bi bi-emoji-heart-eyes"></i>
            </label>
            <input
              type="radio"
              {...register("rate", { required: "Please, add a score!" })}
              value="5"
              id="5"
              onChange={setScore}
            />
          </div>
        </div>
        {errors?.rate?.message && (
          <span className={styles.error}>{errors.rate.message}</span>
        )}
        <textarea
          {...register("review", {
            required: "Please add text!",
          })}
          id=""
          placeholder="Your review..."
        ></textarea>
        {errors?.review?.message && (
          <span className={styles.error}>{errors.review.message}</span>
        )}
        <button>Submit Review</button>
      </form>
    </div>
  );
};
