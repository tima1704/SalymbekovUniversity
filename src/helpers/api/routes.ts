import { $API } from "."
export default class RouteService {
  static async postRoutesApi(route: string) {
    return $API.post('/pages/', { route })
      .then(response => response.data)
  }

  static async getRoutesApi(route: any) {
    return $API.get('/pages/')
      .then(response => route(response.data))
  }
}