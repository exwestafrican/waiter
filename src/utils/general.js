import { path } from "../url";

export const storeInLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

export const RemoveFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const itemInLocalStorage = (key) => {
  if (localStorage.getItem(key)) return true;
  else return false;
};

export const getItemFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return false;
};

export const UniqueCategories = (items) => {
  const categories = {};
  for (let item of items) {
    try {
      const item_list = categories[item.category];
      item_list.push({ ...item });
    } catch (TypeError) {
      categories[item.category] = [item];
    }
  }
  return categories;
};

export const redirectHome = (history) => history.push(path.home);
export const processToLogin = (history) => history.push(path.login);
export const seeAllResturants = (history) => history.push(path.resturantPage);
