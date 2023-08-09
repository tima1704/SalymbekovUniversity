import { useRef } from 'react'

export const useGetBody = () => {
  const BodyRef = useRef<HTMLBodyElement>();

  const bodyHTML = document.getElementsByTagName("body")

  BodyRef.current = bodyHTML[0]

  return BodyRef
}