export interface LoginBody {
  username: string;
  password: string;
}

export interface SignUpBody {
  username: string;
  email: string;
  password: string;
  rePassword: string;
}
