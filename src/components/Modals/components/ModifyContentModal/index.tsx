import React from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { useQuery } from 'react-query'
import { getImages } from '../../../../hooks/api/images'
import { ITemplateState } from '../../../../redux/TemplatesReducer/types'
import Form from './Form'
import { SubmitHandler } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

export const ModifyContentModal = () => {
  
  const { pathname } = useLocation()
  
  const { data } = useQuery({
    queryKey: 'images',
    queryFn: getImages,
    select: (data) => data.map(({ id, image }) => ({
      id,
      value: image,
      label: <img src={image} className="max-w-[100px]" />
    }))
  })

  const addedTemplates: ITemplateState = useAppSelector(s => s.Template)
  const currentPage = addedTemplates[pathname]

  const onSubmit: SubmitHandler<Record<string, string | number>> = (data) => {
    const newData = Object.entries(data).map(([key, value]) => ({
      key,
      value,
    }))
    console.log(newData)
  }

  if (currentPage.blocks.length === 0) return <h2>Данная страница пуста</h2>
  return (
    <div className='text-center'>
      {
        currentPage.blocks.map((block) => {
          return (
            <Form
              block={block}
              key={block.id}
              data={data}
              onSubmit={onSubmit}
            />
          )
        })
      }
    </div>
  )
}