import axios, { AxiosInstance } from 'axios'

export const BASE_API = 'http://13.127.216.121/api/v1/'

export const $API: AxiosInstance = axios.create({
  baseURL: BASE_API
})