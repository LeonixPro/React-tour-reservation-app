export const bookingSubmit = async (data) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/booking/confirm`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request;
    const res = await response.json();
    if (res) {
      return res;
    }
    return;
  } catch (error) {
    return;
  }
};
