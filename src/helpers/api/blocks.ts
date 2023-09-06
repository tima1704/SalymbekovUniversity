import { $API } from "."
import { IBlock } from '../../types/common'

export default class BlocksService {
  static async postBlocksApi(block: IBlock) {
    return $API.post('/blocks/', block)
      .then(response => response.data)
  }
  static async patchBlocksApi(block: IBlock) {
    return $API.patch(`/blocks/${block.id}/`, block)
      .then(response => response.data)
  }
  static async deleteBlocksApi(block: IBlock) {
    return $API.delete(`/blocks/${block.id}/`)
      .then(response => response.data)
  }
}