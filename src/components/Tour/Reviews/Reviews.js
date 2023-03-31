import { useState } from "react";
import { ReviewForm } from "./ReviewForm";
import styles from "./Reviews.module.css";
import { setName } from "../../../utils/utils";
import { EditReview } from "./EditReview";
export const Reviews = ({
  user,
  logged,
  addReview,
  reviewForm,
  tour,
  sendReview,
  reviewList,
  deleteReview,
  activeEdit,
  editReview,
  edit,
  reviewId,
}) => {
  const findArrayElementByEdit = (reviewList) => {
    return reviewList.find((element) => {
      return element.user_id === user.u_id;
    });
  };
  return (
    <>
      {edit && (
        <EditReview tour={tour} reviewId={reviewId} editReview={editReview} />
      )}
      {logged && !findArrayElementByEdit(reviewList) ? (
        <button className={styles.addReviews} onClick={addReview}>
          Add review
        </button>
      ) : null}
      {!logged && (
        <div className={styles.notLogged}>
          Please log in to be able to add a review
        </div>
      )}
      {reviewForm && (
        <ReviewForm tour={tour} user={user} sendReview={sendReview} />
      )}
      <div className={styles.reviewBox}>
        {reviewList &&
          reviewList.map((review, index) => (
            <div className={styles.review} key={review.id}>
              <div className={styles.reviewScore}>{review.score}</div>
              <div className={styles.reviewTop}>
                <div className={styles.reviewImg}>
                  {setName(review.user_name, review.user_lastname)}
                </div>
                <div className={styles.reviewInfo}>
                  <b>
                    {review.user_name} {review.user_lastname}
                  </b>
                  <span>Date: {review.add_date}</span>
                </div>
              </div>
              <div className={styles.reviewMain}>{review.text}</div>
              {review.user_id === user.u_id ? (
                <>
                  <button
                    className={styles.reviewAction}
                    onClick={() => activeEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.reviewAction}
                    onClick={() => deleteReview(review.id)}
                  >
                    Delete
                  </button>
                </>
              ) : null}
            </div>
          ))}
      </div>
    </>
  );
};
