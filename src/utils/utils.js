export const setName = (name, lastname) => {
  let f = name?.substring(0, 1);
  let s = lastname?.substring(0, 1);
  return `${f} ${s}`;
};
