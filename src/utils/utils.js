// Create user logo
export const setName = (name, lastname) => {
  let f = name?.substring(0, 1);
  let s = lastname?.substring(0, 1);
  return `${f} ${s}`;
};

// Set review score
export const setScore = (res) => {
  const scores = res?.map((x) => Number(x.score));
  const rate = scores?.reduce((a, b) => a + b);
  const finalScore = rate / scores.length;
  return finalScore;
};

// Set page title
export const setTitle = (title) => {
  return (document.title = `${title} - TraveleR`);
};
