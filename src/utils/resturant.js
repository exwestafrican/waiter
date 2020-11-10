const RESTURANT = "resturant";
export const currentResturant = () => {
  const value = localStorage.getItem(RESTURANT);
  if (value) return JSON.parse(value);
  return null;
};
export const addResturantToLocalStorage = (
  resturantName,
  resturantId,
  schoolName
) => {
  const value = JSON.stringify({
    resturantId,
    resturantName,
    schoolName,
  });
  localStorage.setItem(RESTURANT, value);
};

export const isOpen = () => {
  const closingTime = new Date();
  const openingTime = new Date();
  openingTime.setHours(9, 0);
  closingTime.setHours(20, 30);
  const currentTime = new Date();
  if (
    currentTime.getTime() < closingTime.getTime() &&
    currentTime.getTime() >= openingTime
  ) {
    return true;
  } else {
    return false;
  }
};
