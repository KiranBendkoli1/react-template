import { Users } from "@apis/types/login";
import api from "../../config/api";

export const login = () => {
  const url = "/login";
  const response = api.post(url, {});
  return response;
};

export const fetchUsers = async (): Promise<Users> => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await api.get(url);
  return response?.data;
};
