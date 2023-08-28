import { useMutation, useQuery, useQueryClient } from "react-query"
import RouteService from "../../helpers/api/routes"


export const useGetRoutes = () => {
  const { data: route, isLoading, isError } = useQuery({
    queryKey: 'route',
    queryFn: () => RouteService.getRoutesApi()
  })

  return { route, isLoading, isError }
}

export const useSendRoutes = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading: sendLoading } = useMutation({
    mutationFn: (newRoute: string) => {
      const splitRoute = newRoute.toLowerCase().split(' ')
      const trimmedRoute = splitRoute.length > 1 ? splitRoute.join('_') : splitRoute[0]
      const formatedRoute = '/' + trimmedRoute
      return RouteService.postRoutesApi(formatedRoute)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], { exact: true })
    }
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
      queryClient.invalidateQueries(['route'], { exact: true })
    }
  })

  return { mutate, isLoading }
}

export const useCreateHomePage = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => {
      return RouteService.postRoutesApi('')
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], { exact: true })
    }
  })

  return { mutate }
}