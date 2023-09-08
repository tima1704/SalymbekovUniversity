import React from 'react'
import { useSendRoutes } from '../../../hooks/api/useRoutes'

const CreateFirstPage = () => {

  const { mutate } = useSendRoutes()

  return (
    <div
      className="flex h-screen items-center justify-center flex-col"
    >
      <h2 className="mb-3">Создайте первую страницу</h2>
      <button
        onClick={() => mutate('')}
        className="
          px-3
          py-2
          bg-green-500
          text-white
          rounded
          hover:bg-green-600
          active:bg-green-700
        "
      >
        Create Home Page
      </button>
    </div>
  )
}

export default CreateFirstPage