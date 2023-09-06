import { ITemplate } from '../../redux/TemplatesReducer/types'

export interface IDataImages {
  id: number
  key?: number
  image: string
}

export interface IExportRotes {
  route?: string 
}

export interface IStructureRoutes { 
  route: string
  id: string | number
}

export interface IRoutes {
  item: IStructureRoutes
}

export interface IGetRoutes {
  id: number
  route: string
  block_page: IBlock[]
}

export interface IBlock {
  id?: number
  front_json: ITemplate
  ordering: number
  is_active: boolean
  page: number
  block_type: 'static' | 'get_list'
}

export interface ISendBlock {
  id?: number
  blocks: IBlock[]
}