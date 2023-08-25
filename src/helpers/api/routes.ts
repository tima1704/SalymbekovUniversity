import { $API } from "."

export default class RouteService {
  static async postRoutesApi(route: string) {
    return $API.post('/pages/', { route })
      .then(response => response.data)
  }
  static async getRoutesApi() {
    return $API.get('/pages/')
      .then(response => response.data)
  }
  static async deleteRoutesApi(id: string | number) {
    return $API.delete(`/pages/${id}/`)
  }
}