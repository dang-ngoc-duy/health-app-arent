export interface UserProfile {
  username: string;
  email: string;
}

export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  message: string;
  token?: string;
}
