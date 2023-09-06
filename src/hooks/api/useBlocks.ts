import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query';
import BlocksService from '../../helpers/api/blocks';
import { IBlock } from '../../types/common';

export const useSendBlocks = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (block: IBlock) => {
      return BlocksService.postBlocksApi(block)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], { exact: true })
    }
  })

  return { mutate, isLoading }
}

export const usePatchBlocks = () => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: (block: IBlock) => {
      return BlocksService.patchBlocksApi(block)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], { exact: true })
    }
  })

  return { mutate, isLoading }
}

export const useDeleteBlocks = () => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: (block: IBlock) => {
      return BlocksService.deleteBlocksApi(block)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['route'], { exact: true })
    }
  })

  return { mutate, isLoading }
}