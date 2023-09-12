import React from 'react'
import templates from '../../../templates'
import { renderToString } from 'react-dom/server'
import parse from 'html-react-parser'
import { ITemplate } from '../../../../redux/TemplatesReducer/types'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { useLocation } from 'react-router-dom'
import { useSendBlocks } from '../../../../hooks/api/useBlocks'

export const AddBlocksModal = () => {

  const [selectedTemplate, setSelectedTemplate] = React.useState<ITemplate | null>(null)

  const pages = useAppSelector(s => s.Template)

  const { pathname } = useLocation()

  const { mutate, isLoading } = useSendBlocks()

  const { setModalViewAction } = useAppDispatch()
  const onCloseModal = () => setModalViewAction()

  function selectTemplate(event: React.MouseEvent, template: ITemplate) {
    let element = event.target as HTMLElement
    for (;;) {
      if (element.dataset.container && element.parentElement) {

        setSelectedTemplate(template)

        element.classList.add('outline', 'outline-4', 'outline-red-500')
        const children = element.parentElement.children
        for (const child of children) {
          if (child !== element) {
            child.classList.remove('outline', 'outline-4', 'outline-red-500')
          }
        }
        break
      } else {
        element = element.parentElement as HTMLElement
      }
    }
  }

  function addTemplate() {
    if (!selectedTemplate) return;

    const pageId = pages[pathname].id

    mutate({
      front_json: {
        ...selectedTemplate,
        layout: renderToString(selectedTemplate.layout as React.ReactElement)
      },
      page: pageId as number,
      ordering: 1,
      block_type: 'static',
      is_active: true
    });

    onCloseModal();
  }

  return (
    <div className="relative text-center flex flex-col gap-4 w-[90vw]">
      {
        templates.map((template, index) => {
          return (
            <div
              key={index}
              onClick={(event) => {
                selectTemplate(event, template)
              }}
              className="scale-75"
              data-container
            >
              {
                parse(
                  template.placeholders.reduce((total, { key, value }) => {
                    return total.replace(key, value)
                  }, renderToString(template.layout))
                )
              }
            </div>
          )
        })
      }

      <button
        type="button"
        className="p-2 border rounded bg-blue-600 text-white w-fit disabled:bg-blue-200 sticky left-full bottom-0"
        disabled={!!!selectedTemplate || isLoading}
        onClick={addTemplate}
      >Add</button>
    </div>
  )
}