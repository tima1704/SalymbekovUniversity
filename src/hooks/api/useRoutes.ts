import { useQuery } from "react-query"
import RouteService from "../../helpers/api/routes"

export const useRoutes = () => {
  const { data: route, isLoading, isError } = useQuery('route', () => RouteService.getRoutesApi)
  
  return { route, isLoading, isError }
}