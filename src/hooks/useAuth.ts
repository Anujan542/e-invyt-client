import { useMutation, useQuery } from '@tanstack/react-query';
import {
  login,
  signup,
  verifyEmail,
  checkAuth,
  logout,
  forgotPassword,
  resetPassword,
} from '../api/auth.api';
import { useAuthStore } from '@/store/useAuthStore';

export const useAuth = () => {
  const { setUser } = useAuthStore();
  // const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      const { user, token } = res.data;
      if (token) {
        localStorage.setItem('token', token); // save JWT
      }
      setUser(user);
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const { user, token } = res.data;
      if (token) {
        localStorage.setItem('token', token);
      }
      setUser(user);
    },
  });

  const checkAuthQuery = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const res = await checkAuth();
      setUser(res.data.message); // <-- backend sends user here
      return res.data.message;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('token');
      // optionally clear user in store
      useAuthStore.getState().setUser(null);
      // setUser(null);
      // queryClient.removeQueries({ queryKey: ['auth'] });
    },
  });

  const verifyEmailMutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess: (res) => setUser(res.data.user),
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res) => setUser(res.data.user),
  });

  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (res) => setUser(res.data.user),
  });

  return {
    signup: signupMutation,
    login: loginMutation,
    verifyEmail: verifyEmailMutation,
    logout: logoutMutation,
    checkAuth: checkAuthQuery,
    forgotPassword: forgotPasswordMutation,
    resetPassword: resetPasswordMutation,
  };
};
