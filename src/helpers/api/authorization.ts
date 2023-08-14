import { $API } from ".";

export default class AuthService {
  static async login(username: string, password: string) {
    return $API.post('/users/token/', {username, password})
    .then(response => response.data)
  }

  static async refreshAccessToken(token: string) {
    return $API.post('/users/token/verify/', {token})
    .then(response => response.data)
  }
}