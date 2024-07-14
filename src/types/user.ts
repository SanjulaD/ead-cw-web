export interface User {
  id: string;
  username: string;
  email: string;
  roles: string[];
}

export interface UserTableRows {
  id?: string;
  delete?: string;
  username: string;
  email: string;
  roles: string[];
}

export interface UserCreateRequestBody {
  id: string;
  username: string;
  email: string;
  password: string;
  rePassword: string;
  roles: string[];
}
