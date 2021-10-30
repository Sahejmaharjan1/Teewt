import axios, { AxiosResponse } from 'axios';
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NotifierTitle } from '../../utils/enums';
import notifier from '../../utils/Notifiers/Notifier';
import { Loading } from '../common';
import { UserFeed, UserProfile } from './types';

interface UserProfileContextType {
  allUserProfileData: UserProfile | null;
  setAllUserProfileData: Dispatch<SetStateAction<UserProfile | null>>;
  userPosts: UserFeed | null;
  setUserPosts: Dispatch<SetStateAction<UserFeed | null>>;
}

const UserProfileContext = createContext<UserProfileContextType>({} as UserProfileContextType);

interface Props {
  children: ReactElement;
}

export default function ProfileContext({ children }: Props): ReactElement {
  const [allUserProfileData, setAllUserProfileData] = useState<UserProfile | null>(null);
  const [userPosts, setUserPosts] = useState<UserFeed | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getUserProfile = useCallback(async () => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(
        'https://res.cloudinary.com/prohorde/raw/upload/v1633980023/cdn/teewt_api/users_profile_info_d9whys.json'
      );
      const allProfiles = response.data as UserProfile;
      setAllUserProfileData(allProfiles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        notifier.error(NotifierTitle.PROFILE, error.message);
      }
    }
  }, []);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  const AppComp = () => {
    if (loading) {
      return <Loading />;
    }
    return children;
  };

  return (
    <UserProfileContext.Provider value={{ allUserProfileData, setAllUserProfileData, userPosts, setUserPosts }}>
      {AppComp()}
    </UserProfileContext.Provider>
  );
}

export const useProfile = (): UserProfileContextType => useContext(UserProfileContext);
