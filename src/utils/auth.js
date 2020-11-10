import {
  storeInLocalStorage,
  RemoveFromLocalStorage,
  itemInLocalStorage,
  getItemFromLocalStorage,
} from "./general";

const userData = "userData";

export const storeUserData = (data) => {
  storeInLocalStorage(userData, data);
};

export const removeUserData = () => {
  RemoveFromLocalStorage(userData);
};

export const userDataInStorage = () => {
  return itemInLocalStorage(userData);
};

export const getUserDetail = () => {
  const details = getItemFromLocalStorage(userData);
  if (details) return details;
  return "";
};
