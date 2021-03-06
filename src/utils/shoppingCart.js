import { currentResturant } from "./resturant";
import { path } from "../url";

const cart = "shoppingCart";

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
        packed: cart[item].packed,
        packAmount: cart[item].packAmount,
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

export function getDeliveryCharge(external, location) {
  const externalCharges = 1000;
  const internalCharges = {
    hostel: 100,
    resturantPickUp: 50,
    classRoom: 100,
  };
  if (external) return externalCharges;
  else return internalCharges[location];
}

export const posCharges = (external, schoolName, total) => {
  if (!external && schoolName == "Bells University") {
    if (total > 1000) return 50;
    else return 20;
  } else {
    return 0;
  }
};

export function isPacked(items) {
  let mySet = new Set();
  for (let item of items) {
    mySet.add(item.packed);
  }
  console.log(mySet);
  return mySet.has(1);
}

export function findMaxPackPrice(items) {
  let max_price = Number.NEGATIVE_INFINITY;
  for (let item of items) {
    if (item.packAmount > max_price) {
      max_price = item.packAmount;
    }
  }
  return max_price;
}

export const processToCheckout = (history) => history.push(path.checkout);

// ------------------ new stuff ----------------- //

export const VENDOR_ID = "vendorID";
export const CART = "cart";

export function clearCart(id) {
  const value = JSON.stringify([]);
  localStorage.setItem(CART, value);
}
export function getOldVendor() {
  const value = localStorage.getItem(VENDOR_ID);
  if (value) return JSON.parse(value);
  return "";
}
export function addStore(vendorID) {
  const value = JSON.stringify(vendorID);
  localStorage.setItem(VENDOR_ID, value);
}

export function updateCart(cart) {
  const value = JSON.stringify(cart);
  localStorage.setItem(CART, value);
}

export const LocalStorageCart = () => {
  const value = localStorage.getItem(CART);
  if (value) return JSON.parse(value);
  return [];
};
