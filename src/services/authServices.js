export const onRegister = async (data) => {
  const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/user/register`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await request;
  const res = await response.json();
  return res;
};

export const bookingList = async (id) => {
  const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/user/bookings`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: id,
    },
  });
  const response = await request;
  const res = await response.json();
  return res;
};
export const editUser = async (data, id) => {
  const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/user/edit`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: id,
    },
    body: JSON.stringify(data),
  });
  const response = await request;
  const res = await response.json();
  return res;
};
