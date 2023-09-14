import React from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { useQuery } from 'react-query'
import { getImages } from '../../../../hooks/api/images'
import { ITemplate, ITemplateState } from '../../../../redux/TemplatesReducer/types'
import Form from './Form'
import { SubmitHandler } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { usePatchBlocks } from '../../../../hooks/api/useBlocks'
import { IBlock } from '../../../../types/common'
import { useGetRoutes } from '../../../../hooks/api/useRoutes'

export interface ISubmitProps {
  data: Record<string, string>
  block: IBlock
}

export const ModifyContentModal = () => {

  const { pathname } = useLocation()

  const { data } = useQuery({
    queryKey: 'images',
    queryFn: getImages,
    select: (data) => data.map(({ id, image }) => ({
      id,
      value: image,
      label: <img src={image} className="max-h-[100px]" />
    }))
  })

  const { route } = useGetRoutes()

  const { mutate, isLoading } = usePatchBlocks()

  const addedTemplates: ITemplateState = useAppSelector(s => s.Template)
  const currentPage = addedTemplates[pathname]

  const onSubmit: SubmitHandler<ISubmitProps> = ({ data, block }) => {

    if (!block.front_json.placeholders) return;
    if (!block.front_json.functions) return;

    const newBlock: IBlock = {
      ...block,
      front_json: {
        ...block.front_json as ITemplate,
        placeholders: block.front_json.placeholders.map(ph => {
          return {
            ...ph,
            value: data[ph.key]
          }
        }),
        functions: block.front_json.functions.map(fc => {
          return fc.func.type === 'link'
            ? {
              ...fc,
              func: {
                ...fc.func,
                to: data[fc.id]
              }
            }
            : fc
        })
      }
    }
    mutate(newBlock)
  }

  if (currentPage.blocks.length === 0) return <h2>Данная страница пуста</h2>
  return (
    <div className='text-center w-[80vw] '>
      {
        currentPage.blocks.map((block) => {
          return (
            <Form
              block={block}
              key={block.id}
              data={data}
              routes={route}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          )
        })
      }
    </div>
  )
}