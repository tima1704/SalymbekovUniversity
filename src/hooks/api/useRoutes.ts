import { renderToString } from 'react-dom/server'
import { useMutation, useQuery, useQueryClient } from "react-query"
import RouteService from "../../helpers/api/routes"
import { useAppDispatch } from '../redux'
import { IGetRoutes } from '../../types/common'
import { ITemplate } from '../../redux/TemplatesReducer/types'
import BlocksService from '../../helpers/api/blocks'
import Header from '../../components/templates/Header'
import Navbar from '../../components/templates/Navbar'

export const useGetRoutes = () => {

  const { editTemplateAction } = useAppDispatch()

  const { data: route, isLoading, isError } = useQuery({
    queryKey: 'route',
    queryFn: () => RouteService.getRoutesApi(),
    onSuccess: (data) => {
      const newData = data.reduce((total: Record<string, ITemplate>, { id, route, block_page }: IGetRoutes) => {
        return {
          ...total,
          [route]: {
            id,
            blocks: block_page.sort((a, b) => a.id - b.id),
          },
        }
      }, {})
      editTemplateAction(newData)
    },
    staleTime: Infinity
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
    onSuccess: async (data: IGetRoutes) => {
      await createDefaultHeaderAndFooter(data)
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

async function createDefaultHeaderAndFooter(data: IGetRoutes) {
  await BlocksService.postBlocksApi({
    page: data.id,
    ordering: 1,
    block_type: 'static',
    is_active: true,
    front_json: {
      ...Header,
      layout: renderToString(Header.layout as React.ReactElement)
    }
  })
  await BlocksService.postBlocksApi({
    page: data.id,
    ordering: 1,
    block_type: 'static',
    is_active: true,
    front_json: {
      ...Navbar,
      layout: renderToString(Navbar.layout as React.ReactElement)
    }
  })
}