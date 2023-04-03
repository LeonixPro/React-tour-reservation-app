// Display Top offers
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

// Display Promotions
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

// Display tours
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

// Get specific tour information
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

// Get weather
export const getWeather = async (location) => {
  const request = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_REQUEST}`
  );
  const response = await request;
  const data = await response.json();
  return data;
};
