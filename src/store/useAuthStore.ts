import { create } from 'zustand';
import { getItem, storageName } from '@/lib/localStorage';
import { logger } from './logger';

interface AuthState {
  role: string | null;
}

export interface AuthStore extends AuthState {
  setRole: (role: AuthState['role']) => void;
}

const userData = getItem<{ authToken: string; roles: string }>(storageName);

const initialState: Pick<AuthStore, keyof AuthState> = {
  role: userData?.roles ?? null,
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setRole: (role) => {
        set(() => ({ role }));
      },
    }),
    'authStore'
  )
);

export default useAuthStore;
