import { signIn } from "@/api/auth/sign-in";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = (onSuccess: any, onError: any) => {
  return useMutation({
    mutationFn: signIn,
    onSuccess,
    onError,
  });
};
