export interface LoginResponse {
  oauth: Oauth[];
}

export interface Oauth {
  id: string;
  password: string;
  user_id: string;
}

export interface LoginError {
  message: string;
}

export interface LoginFormProps {
  username: string;
  password: string;
}
