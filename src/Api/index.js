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
