import axios from 'axios'
import { IDataImages } from '../../types/common'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import React from 'react'

export const getImages = async () => {
  const { data } = await axios.get<IDataImages[]>('http://13.127.216.121/api/v1/images/')
  return data
}

export const postImages = async (newImage: File | null) => {

  const formData = new FormData()

  formData.append('image', newImage as File)

  const data = await axios.post('http://13.127.216.121/api/v1/images/', formData)
  return data
}

export const useImages = () => {
  
  const { data, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: getImages
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: postImages,
    onSuccess: () => {
      queryClient.invalidateQueries(['images'], { exact: true })
    }
  })

  return {data, isLoading, mutation}
}