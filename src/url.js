export const path = {
  home: "/",
  resturantPage: "/resturants",
  order: "/order",
  checkout: "/order/checkout",
  login: "/login",
  signup: "/signup",
  aboutUs: "/about",
};

export const apiPath = {
  schools: "/v1/schools",
  resturants: "/v1/restaurants",
  order: "/v1/order",
  login: "/v1/login",
  signup: "/v1/signup",
};

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const MW_BASE_URL = process.env.REACT_WAITER_BOT_API;
export const WHATSAPP_BASE_URL = "https://wa.me/";
export const CONTACT_US =
  WHATSAPP_BASE_URL + process.env.REACT_APP_WHATSAPP_NUMBER;
