// Login function
export const onLogin = async (data) => {
  try {
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
  } catch (error) {
    return;
  }
};

// Registration function
export const onRegister = async (data) => {
  try {
    const request = fetch(
      `${process.env.REACT_APP_MAIN_REQUEST}/user/register`,
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
    return res;
  } catch (error) {
    return;
  }
};

// Edit function
export const editUser = async (data, id) => {
  try {
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
  } catch (error) {
    return;
  }
};
