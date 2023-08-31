import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query';
import BlocksService from '../../helpers/api/blocks';
import { ISendBlock } from '../../types/common';

export const useSendBlocks = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (block: ISendBlock) => {
      return BlocksService.patchBlocksApi(block)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], { exact: true })
    }
  })

  return { mutate, isLoading }
}