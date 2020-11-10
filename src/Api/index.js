import { BASE_URL, apiPath } from "../url";

const Config = (method) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const fetchData = async (url, method = "GET") => {
  const response = await fetch(BASE_URL + url, Config(method));
  if (response.ok) {
    const jsonResponse = await response.json();
    if (jsonResponse.status === "success") return jsonResponse.data.response;
  }
};

export const makeOrder = async (data, sucessCallBack, failedCallBack) => {
  const response = await fetch(BASE_URL + apiPath.order, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    sucessCallBack();
  } else {
    failedCallBack();
  }
};

export const LoginRequest = async (data) => {
  const response = await fetch(BASE_URL + apiPath.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response.json();
  } else {
    return response.json();
  }
};

export const CreateUserRequest = async (data) => {
  const response = await fetch(BASE_URL + apiPath.signup, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response.json();
  } else {
    return response.json();
  }
};
