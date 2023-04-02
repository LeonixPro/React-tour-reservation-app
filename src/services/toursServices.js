export const getTop = async () => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/main`);
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};

export const getPromotions = async () => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/promotions`);
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};

export const getTours = async () => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/tours`);
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};

export const getOneTour = async (id) => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/tour/${id}`);
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};
