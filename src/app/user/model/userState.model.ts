export interface User {
  token: string;
  user: UserModel;
  isLoading?: boolean;
  isLogin?: boolean;
  error?: string;
}

export interface UserModel {
  fullname: string | undefined | null;
  email: string | undefined | null;
  phone: string | undefined | null;
  password?: string | undefined | null;
}
