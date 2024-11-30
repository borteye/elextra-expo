import { signUp } from "@/api/auth/sign-up";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = (onSuccess: any, onError: any) => {
  return useMutation({
    mutationFn: signUp,
    onSuccess,
    onError,
  });
};
