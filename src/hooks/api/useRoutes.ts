import { useMutation, useQuery } from "react-query"
import RouteService from "../../helpers/api/routes"

export const useGetRoutes = () => {
  const { data: route, isLoading, isError } = useQuery('route', () => RouteService.getRoutesApi())

  return { route, isLoading, isError }
}

export const useSendRoutes = () => {
  const { mutate, isLoading: sendLoading } = useMutation({
    mutationFn: (newTodo: string) => {
      return RouteService.postRoutesApi(newTodo)
    },
  })

  return { mutate, sendLoading }
}