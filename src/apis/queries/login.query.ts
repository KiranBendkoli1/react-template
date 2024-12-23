import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login.service";

export const useLogin = () =>
  useMutation({
    mutationFn: () => {
      return login();
    },
  });
