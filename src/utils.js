import { path } from "./url";

export const pathName = (name) => {
  return name.split(" ").join("");
};

export const localStorageDict = {
  storeInLocalStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  },
  itemInLocalStorage(key) {
    if (localStorage.getItem(key)) return true;
    else return false;
  },
  RemoveFromLocalStorage(key) {
    localStorage.removeItem(key);
  },
  getItemFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return false;
  },
};

export const saveCartInLocalStorage = (cart) => {
  return localStorageDict.storeInLocalStorage("cart", cart);
};

export const getOrCreateCart = () => {
  if (localStorageDict.itemInLocalStorage("cart")) {
    return localStorageDict.getItemFromLocalStorage("cart");
  } else {
    return createCart();
  }
};
const createCart = () => {
 
  const cart = {};
  saveCartInLocalStorage(cart);
  return cart;
};

export const RemoveItemFromCart = (id) => {
  const cart = getOrCreateCart();
  delete cart[id];
  saveCartInLocalStorage(cart);
};

export const resturantInLocalStorage = () => {
  return localStorageDict.itemInLocalStorage("resturant");
};

export const addNewResturantToLocalStorage = (
  resturantName,
  resturantId,
  schoolName
) => {
  localStorageDict.storeInLocalStorage("resturant", {
    resturantId,
    resturantName,
    schoolName,
  });
};

export const checkoutTotal = (cart) => {
  let checkout = 0;
  // add id to itemIds list
  for (let item in cart) {
    checkout += cart[item].total;
  }

  return checkout;
};

export const currentResturant = (resturantId) => {
  const storageResturant = localStorageDict.getItemFromLocalStorage(
    "resturant"
  );

  if (resturantId === storageResturant.resturantId) return true;
  return false;
};

export const removeResturantFromLocalStorage = () => {
  localStorageDict.RemoveFromLocalStorage("resturant");
};

export const removeCartFromLocalStorage = () => {
  localStorageDict.RemoveFromLocalStorage("cart");
};

export const getCurrentResturantFromLocalStrorage = () => {
  return localStorageDict.getItemFromLocalStorage("resturant");
};

// export const processToCheckout = (history) => history.push(path.checkout);


export const makeCamelCase = (word) => {
  word = word.toLowerCase().split(" ");
  const arrayLenght = word.length;
  for (let i = 1; i < arrayLenght; i++) {
    let letter = word[i];
    word[i] = letter[0].toUpperCase() + letter.slice(1);
  }
  return word.join("");
};


