import AuthService from "../../helpers/api/authorization";

const CheckTokenExpirationAndRefresh = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (refreshToken) {
    try {
      const response = await AuthService.refreshAccessToken(refreshToken)

      if (response.access) {
        localStorage.setItem('accessToken', response.access);
        localStorage.setItem('refreshToken', response.refresh);
      }
    } catch (error) {
      console.error("Token refresh faild", error);
    }
  }
}


export default CheckTokenExpirationAndRefresh