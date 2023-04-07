// Submit booking
export const bookingSubmit = async (data) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/booking/confirm`,
      {
        method: "POST",
        headers: {
          Accept: { "Content-Type": "application/json" },
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request;
    const res = await response.json();
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("There was an error!");
  }
};

// Display booking list
export const bookingList = async (id) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/user/bookings`,
      {
        method: "POST",
        headers: {
          Accept: { "Content-Type": "application/json" },
          Authorization: id,
        },
      }
    );
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("There was an error!");
  }
};

// Cancel Booking
export const cancel = async (data, id) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/booking/cancel`,
      {
        method: "POST",
        headers: {
          Accept: { "Content-Type": "application/json" },
          Authorization: id,
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("There was an error!");
  }
};
