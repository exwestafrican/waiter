import { currentResturant } from "./resturant";
import { path } from "../url";

const cart = "shoppingCart";
export const FEE = 50;

export const cartInLocalStorage = () => {
  if (localStorage.getItem(cart)) return true;
  else return false;
};

export const removeCartFromLocalStorage = () => {
  localStorage.removeItem(cart);
};
export const getCartFromLocalStorage = () => {
  const value = localStorage.getItem(cart);
  if (value) return JSON.parse(value);
  return [];
};

export const findItemInCart = (id) => {
  if (cartInLocalStorage()) {
    const shoppingCart = getCartFromLocalStorage();
    const item = shoppingCart[id];
    if (item === undefined) return null;
    return item;
  }
  return null;
};

export const updateCartStorage = (newCart) => {
  const jsoncart = JSON.stringify(newCart);

  localStorage.setItem(cart, jsoncart);
};

export const createCart = (newResturantID) => {
  try {
    const oldResturantID = currentResturant().resturantId;
    if (newResturantID == oldResturantID) return;
    const value = JSON.stringify({});
    localStorage.setItem(cart, value);
  } catch (error) {
    const value = JSON.stringify({});
    localStorage.setItem(cart, value);
  }
};

export const emptyCart = () => {
  const value = JSON.stringify({});
  localStorage.setItem(cart, value);
};

export const shoppingCartList = (cart) => {
  "get list of items in cart";
  const cartList = [];
  for (let item in cart) {
    if (cart[item].total !== 0) {
      cartList.push({
        quantity: cart[item].quantity,
        baseprice: cart[item].baseprice,
        addonPrice: cart[item].addonPrice,
        name: cart[item].name,
        itemId: cart[item].itemId,
      });
    }
  }
  return cartList;
};

export const ApiShoppingList = (cart) => {
  const cartList = [];
  for (let item in cart) {
    if (cart[item].total !== 0) {
      const total = itemTotal(
        cart[item].quantity,
        cart[item].addonPrice,
        cart[item].baseprice
      );
      cartList.push({
        itemId: cart[item].itemId,
        quantity: cart[item].quantity,
        amount: total,
      });
    }
  }
  return cartList;
};

export const itemTotal = (quantity, addonPrice, baseprice) => {
  const qty = quantity - 1;
  return baseprice + qty * addonPrice;
};

export const checkoutTotal = (cart) => {
  let checkout = 0;

  for (let item in cart) {
    // console.log(item);
    const qty = cart[item].quantity;
    const baseprice = cart[item].baseprice;
    const addonPrice = cart[item].addonPrice;
    const adjQty = qty - 1;
    const total = baseprice + adjQty * addonPrice;
    checkout += total;
  }

  return checkout;
};

const deliveryCharges = {
  hostel: 100,
  resturantPickUp: 50,
};

export const processToCheckout = (history) => history.push(path.checkout);
