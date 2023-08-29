import React from 'react'
import templates from '../../../templates'
import { renderToString } from 'react-dom/server'
import parse from 'html-react-parser'
import { ITemplate } from '../../../../redux/TemplatesReducer/types'
import { useAppDispatch } from '../../../../hooks/redux'
// import { useLocation } from 'react-router-dom'

export const AddBlocksModal = () => {

  const [selectedTemplate, setSelectedTemplate] = React.useState<ITemplate | null>(null)

  const { setTemplateAction, setModalViewAction } = useAppDispatch()
  const onCloseModal = () => setModalViewAction();

  // const { pathname } = useLocation()

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

    setTemplateAction(selectedTemplate);

    onCloseModal();
  }

  return (
    <div className='text-center flex flex-col gap-4'>
      {
        templates.map((template, index) => {
          return (
            <div
              key={index}
              onClick={(event) => {
                selectTemplate(event, template)
              }}
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
        className="p-2 border rounded bg-blue-600 text-white w-fit self-end disabled:bg-blue-200"
        disabled={!!!selectedTemplate}
        onClick={addTemplate}
      >Add</button>
    </div>
  )
}