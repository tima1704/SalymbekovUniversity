import axios, { AxiosInstance } from 'axios'

export const BASE_API = 'http://3.6.88.179/api/v1/'

export const $API: AxiosInstance = axios.create({
  baseURL: BASE_API
})

$API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        return Promise.reject(error)
      }
      
      try {
        const response = await $API.post('/users/token/verify/', {
          refreshToken,
        })

        const newAccessToken = response.data.access
        const newRefreshToken = response.data.refresh

        localStorage.setItem('accessToken', newAccessToken)
        localStorage.setItem('refreshToken', newRefreshToken)

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return $API(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error);
  }
);