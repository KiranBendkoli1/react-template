import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/login.service";

export const useFetchUsers = () =>
  useQuery({
    queryKey: ["fetchUsers"],
    queryFn: async () => {
      const res = await fetchUsers();
      return res;
    },
  });