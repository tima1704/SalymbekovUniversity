import React, { useRef } from 'react'
import parse from 'html-react-parser'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select, { GroupBase, OptionsOrGroups } from 'react-select'
import { IBlock, IGetRoutes } from '../../../../types/common'
import { ISubmitProps } from '.'

interface IFormProps {
  block: IBlock,
  onSubmit: SubmitHandler<ISubmitProps>
  isLoading: boolean
  routes: IGetRoutes[]
  data: OptionsOrGroups<{
    value: string;
    label: JSX.Element;
  }, GroupBase<{
    value: string;
    label: JSX.Element;
  }>> | undefined
}


const Form = ({ block, data, onSubmit, isLoading, routes }: IFormProps) => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm()

  const ref = useRef<HTMLDivElement>(null)

  const routesOptions = routes.map(({ id, route }: IGetRoutes) => {
    return {
      id,
      value: route,
      label: route
    }
  })

  if (!block.front_json.placeholders) return;
  if (!block.front_json.layout) return;
  if (!block.front_json.functions) return;
  if (!block.id) return;
  return (
    <div className='mb-6' ref={ref}>
      <form key={block.id} onSubmit={handleSubmit(data => onSubmit({ data, block }))}>
        {
          parse(
            block.front_json.placeholders.reduce((total, { key, value }) => {
              return total.replace(key, value)
            }, block.front_json.layout as string)
          )
        }
        {
          block.front_json.placeholders?.map(({ key, type, value }) => {
            return (
              <label
                className="flex items-center py-3 gap-2 relative border-b"
                key={key}
              >
                {
                  type === 'image' ? (
                    <Controller
                      name={key}
                      key={key}
                      control={control}
                      defaultValue={value}
                      render={({ field }) => {
                        return <Select
                          isDisabled={!data || !!!data?.length}
                          className="border rounded px-3 py-1 w-full bg-slate-100"
                          options={data}
                          defaultValue={{ value, label: <img className='max-h-[100px]' src={value} /> }}
                          ref={field.ref}
                          onChange={(val) => field.onChange(val?.value)}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              background: 'rgb(232, 233, 235)'
                            }),
                            option: (baseStyles) => ({
                              ...baseStyles,
                              background: 'rgb(232, 233, 235)',
                              borderTop: '1px solid #aaa',
                              padding: '1rem',
                              ':nth-child(1)': {
                                borderTop: 'none'
                              }
                            })
                          }}
                        />
                      }}
                    />
                  ) : (
                    <textarea
                      id={key}
                      defaultValue={value}
                      className="border rounded px-3 py-1 w-full max-h-96 min-h-[50px]"
                      {
                      ...register(key)
                      }
                    ></textarea>
                  )
                }

              </label>
            )
          })
        }
        {
          !!block.front_json.functions.length && <h3 className='text-sm'>Функции:</h3>
        }
        {
          ref.current && block.front_json.functions.map(({ id, func }) => {

            const relatedBlock = ref.current?.querySelector(`[id='${id}']`)

            if (func.type === 'link') {
              return <label
                className="flex items-center py-3 gap-2 relative border-b"
                key={id}
              >
                <h3 className="text-left w-2/6 text-xs">Куда должна переносить <b>"{relatedBlock?.innerHTML}"</b>:</h3>
                <Controller
                  name={id}
                  key={id}
                  control={control}
                  defaultValue={func.to as string}
                  render={({ field }) => {
                    return <Select
                      isDisabled={!routes || !!!routes?.length}
                      className="border rounded px-3 py-1 w-4/6 bg-slate-100"
                      options={routesOptions}
                      defaultValue={{ value: func.to, label: func.to as string }}
                      ref={field.ref}
                      onChange={(val) => field.onChange(val?.value)}
                    />
                  }}
                />

              </label>
              // return <div>
              //   <label
              //     className="flex items-center py-3 gap-2 relative border-b"
              //     key={id}
              //   >
              //     <h3 className="text-left w-1/6">{id}:</h3>
              //     {
              //       (
              //         <input
              //           type="text"
              //           id={id}
              //           defaultValue={func.to as string}
              //           className="border rounded px-3 py-1 w-5/6"
              //           {
              //           ...register(id)
              //           }
              //         />
              //       )
              //     }
              //   </label>
              // </div>
            }
            return <div>
              Функция ещё не написана
            </div>
          })
        }
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded border mt-3 disabled:bg-blue-200"
          type="submit"
          disabled={isLoading}
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default Form