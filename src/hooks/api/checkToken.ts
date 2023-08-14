import AuthService from "../../helpers/api/authorization";

const CheckTokenExpirationAndRefresh = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (refreshToken) {
    try {
      const response = await AuthService.refreshAccessToken(refreshToken)

      if (response.access) {
        localStorage.setItem('accessToken', response.access);
        console.log(response);
      }
    } catch (error) {
      console.error("Token refresh faild", error);
    }
  }
}


export default CheckTokenExpirationAndRefresh