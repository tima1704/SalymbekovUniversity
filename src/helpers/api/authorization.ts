import { $API } from ".";

interface IForm {
  name: string;
  password: string;
}

export const AuthService = {
  async getAuthUser (data: any) {
    return $API.post('/users/token/', data)
  }
}