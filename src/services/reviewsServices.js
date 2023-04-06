// Get reviews list
export const getReviews = async (id) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/reviews/show/${id}`
    );
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};

// Submit review
export const submitReview = async (data, user_id) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/review/submit`,
      {
        method: "POST",
        headers: {
          Accept: { "Content-Type": "application/json" },
          Authorization: user_id,
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {
    return;
  }
};

// Delete review
export const deleteRev = async (user_id, review_id) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/review/delete/${review_id}`,
      {
        method: "POST",
        headers: {
          Accept: { "Content-Type": "application/json" },
          Authorization: user_id,
        },
        body: JSON.stringify({ review_id: review_id }),
      }
    );
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {}
};

// Edit review
export const editRev = async (data, user_id) => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/review/edit`, {
      method: "POST",
      headers: {
        Accept: { "Content-Type": "application/json" },
        Authorization: user_id,
      },
      body: JSON.stringify(data),
    });
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {
    return;
  }
};
