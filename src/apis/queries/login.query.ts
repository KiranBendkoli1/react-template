import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUsers, login } from "../services/login.service";

export const useLogin = () =>
  useMutation({
    mutationFn: () => {
      return login();
    },
  });

export const useFetchUsers = () =>
  useQuery({
    queryKey: ["fetchUsers"],
    queryFn: async () => {
      const res = await fetchUsers();
      return res;
    },
  });
