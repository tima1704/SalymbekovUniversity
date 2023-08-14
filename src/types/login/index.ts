export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access: string;
  refresh: string;
}