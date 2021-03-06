const RESTURANT = "resturant";
export const currentResturant = () => {
  const value = localStorage.getItem(RESTURANT);
  if (value) return JSON.parse(value);
  return null;
};
export const addResturantToLocalStorage = (
  resturantName,
  resturantId,
  schoolName,
  external
) => {
  const value = JSON.stringify({
    resturantId,
    resturantName,
    schoolName,
    external,
  });
  localStorage.setItem(RESTURANT, value);
};

export const isOpen = () => {
  const sunday = 0;
  const today = new Date().getDay();
  if (today === sunday) {
    // no resturants open on sunday
    return false;
  } else {
    const closingTime = new Date();
    const openingTime = new Date();
    openingTime.setHours(10, 0);
    closingTime.setHours(20, 30);
    const currentTime = new Date();
    if (
      currentTime.getTime() < closingTime.getTime() &&
      currentTime.getTime() >= openingTime
    ) {
      // true
      return true;
    } else {
      return false;
    }
  }
};
