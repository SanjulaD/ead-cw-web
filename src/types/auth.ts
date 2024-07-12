export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface LoginResponseBody {
  jwtToken: string;
  userId: string;
  username: string;
  email: string;
  role: string;
}

export interface SignUpRequestBody {
  username: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface SignUpResponseBody {
  username: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface UserData {
  authToken: string;
  userId: string;
  username: string;
  email: string;
  roles: string;
}
