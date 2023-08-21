import React from "react"
import { $API } from "."
import { IExportRotes } from "../../types/common";

type StringSetter = (value: string) => void;

export default class RouteService {
  static async postRoutesApi(route: string) {
    return $API.post('/pages/', { route })
      .then(response => response.data)
  }
  static async getRoutesApi(route: StringSetter) {
    return $API.get('/pages/')
      .then(response => route(response.data))
  }
}