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