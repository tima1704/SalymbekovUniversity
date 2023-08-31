import { $API } from "."
import { IBlock, ISendBlock } from '../../types/common'

export default class BlocksService {
  static async postBlocksApi(block: IBlock) {
    return $API.post('/blocks/', block)
      .then(response => response.data)
  }
  static async patchBlocksApi(block: ISendBlock) {
    return $API.patch(`/blocks/${block.id}/`, {
      front_json: block.blocks
    })
      .then(response => response.data)
  }
}