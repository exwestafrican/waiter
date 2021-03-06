// import { MW_BASE_URL } from "../../url";

const MW_BASE_URL = "http://127.0.0.1:8000/api/v1";

const Config = (method) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const fetchCart = async (id, method = "GET") => {
  const response = await fetch(MW_BASE_URL + "/carts/" + id, Config(method));
  if (response.ok) {
    const jsonResponse = await response.json();
    if (jsonResponse.success === true) return jsonResponse.data;
  }
};

export const fetchStoreProducts = async (id, method = "GET") => {
  const response = await fetch(
    MW_BASE_URL + "/stores/" + id + "/view_products",
    Config(method)
  );
  if (response.ok) {
    const jsonResponse = await response.json();
    if (jsonResponse.success === true) return jsonResponse.data;
  }
};

export const fetchStores = async (method = "GET") => {
  const response = await fetch(MW_BASE_URL + "/stores", Config(method));
  if (response.ok) {
    const jsonResponse = await response.json();
    if (jsonResponse.success === true) return jsonResponse.data;
  }
};

export const createCart = async (payload, method = "POST") => {
  const response = await fetch(MW_BASE_URL + "/carts/", {
    ...Config(method),
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    if (jsonResponse.success === true) return jsonResponse.data;
  }
};
