import axios from 'axios'
import { IDataImages } from '../../types/common'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import React from 'react'

export const getImages = async () => {
  // TODO (Anvar) Перенести requst functions в дерикторию helpers => api 
  const { data } = await axios.get<IDataImages[]>('http://13.127.216.121/api/v1/images/')
  return data
}

export const postImages = async (newImage: File | null) => {

  const formData = new FormData()

  formData.append('image', newImage as File)

  const data = await axios.post('http://13.127.216.121/api/v1/images/', formData)
  return data
}

export const deleteImages = async (id: number) => {
  const data = await axios.delete(`http://13.127.216.121/api/v1/images/${id}/`)
  return data
}