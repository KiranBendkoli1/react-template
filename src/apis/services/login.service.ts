import api from "../../config/api";

export const login = () => {
  const url = "/login";
  const response = api.post(url, {});
  return response;
};
