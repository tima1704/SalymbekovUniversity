import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux'
import { useQuery } from 'react-query'
import { getImages } from '../../../../hooks/api/images'
import { ITemplate } from '../../../../redux/TemplatesReducer/types'
import Form from './Form'
import { SubmitHandler } from 'react-hook-form'

export const ModifyContentModal = () => {

  const addedTemplates: ITemplate[] = useAppSelector(s => s.Template)
  const { editTemplateAction } = useAppDispatch()

  const { data } = useQuery({
    queryKey: 'images',
    queryFn: getImages,
    select: (data) => data.map(({ id, image }) => ({
      id,
      value: image,
      label: <img src={image} className="max-w-[100px]" />
    }))
  })

  const onSubmit: SubmitHandler<Record<string, string | number>> = (data) => {
    const newTemplates: ITemplate[] = addedTemplates.map((template, index) => {
      if (index !== data.index) return template
      return {
        ...template,
        placeholders: template?.placeholders?.map(ph => {
          return {
            ...ph,
            key: ph.key,
            value: data[ph.key] as string
          }
        })
      }
    })
    editTemplateAction(newTemplates)
  }

  return (
    <div className='text-center'>
      {
        addedTemplates.map(({ placeholders, layout }, index) => {
          if (!placeholders) return;
          if (!layout) return;
          return (
            <Form
              placeholders={placeholders}
              layout={layout}
              index={index}
              data={data}
              onSubmit={onSubmit}
            />
          )
        })
      }
    </div>
  )
}