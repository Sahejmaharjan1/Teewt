import React, { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react';
import useTimeout from '../../hooks/useTimeout';
import { Oauth } from './types';

interface UserContextType {
  user: Oauth | null;
  setUser: Dispatch<SetStateAction<Oauth | null>>;
  signOut: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [user, setUser] = useState<Oauth | null>(null);
  useTimeout(() => {
    setInitialLoading(false);
  }, 1000);

  const signOut = async () => {
    // await Auth.signOut();
  };
  const AppComp = () => {
    if (initialLoading) {
      return null;
    }
    return children;
  };

  return <UserContext.Provider value={{ user, setUser, signOut }}>{AppComp()}</UserContext.Provider>;
}

export const useUser = (): UserContextType => useContext(UserContext);
