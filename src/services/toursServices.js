export const getTop = async () => {
  const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/main`);
  const response = await request;
  const data = await response.json();
  return data;
};
export const getTours = async () => {
  const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/tours`);
  const response = await request;
  const data = await response.json();
  return data;
};

export const getOneTour = async (id) => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/tour/${id}`);
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const onLogin = async (data) => {
  const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await request;
  const res = await response.json();
  if (res.status === false) {
    return;
  } else {
    return res;
  }
};
