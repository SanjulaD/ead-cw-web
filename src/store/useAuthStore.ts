import { create } from 'zustand';
import { logger } from './logger';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState['isAuthenticated']) => void;
  setIsAdmin: (args: AuthState['isAdmin']) => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false,
  isAdmin: false,
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }));
      },
      setIsAdmin: (isAdmin) => {
        set(() => ({ isAdmin }));
      },
    }),
    'authStore'
  )
);

export default useAuthStore;
