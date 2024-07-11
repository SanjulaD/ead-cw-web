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

const userData = localStorage.getItem('userData');
const parsedUserData = userData ? JSON.parse(userData) : null;

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: !!(parsedUserData && parsedUserData.authToken),
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
