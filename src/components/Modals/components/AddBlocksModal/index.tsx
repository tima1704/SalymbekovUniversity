import React from 'react'
import templates from '../../../templates'
import { renderToString } from 'react-dom/server'
import parse from 'html-react-parser'

export const AddBlocksModal = () => {

  function selectTemplate(e: React.MouseEvent){
    let el = e.target as HTMLElement
    for(;;) {
      if (el.dataset.container) {
        console.log(el)
        break
      } else {
        el = el.parentElement as HTMLElement
      }
    }
  }

  return (
    <div className='text-center'>
      {
        templates.map((Template, index) => {
          return !Template.placeholders ? (
            <div>
              <Template.layout
                onClick={() => console.log('Hello, Template')}
                key={index}
              />
            </div>
          ) : (
            <div
              key={index}
              onClick={selectTemplate}
            >
              {
                parse(
                  Template.placeholders.reduce((total, { key, value }) => {
                    return total.replace(key, value)
                  }, renderToString(<Template.layout />))
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}