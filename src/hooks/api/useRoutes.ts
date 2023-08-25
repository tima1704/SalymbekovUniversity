import { useMutation, useQuery, useQueryClient } from "react-query"
import RouteService from "../../helpers/api/routes"


export const useGetRoutes = () => {
  const { data: route, isLoading, isError } = useQuery('route', () => RouteService.getRoutesApi())
  
  return { route, isLoading, isError }
}

export const useSendRoutes = () => {
  const { mutate, isLoading: sendLoading } = useMutation({
    mutationFn: (newRoute: string) => {
      return RouteService.postRoutesApi(newRoute)
    },
  })
  
  return { mutate, sendLoading }
}

export const useDeleteRoutes = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (delRoute: string | number) => {
      return RouteService.deleteRoutesApi(delRoute)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], {exact: true})
    }
  })

  return { mutate, isLoading }
}