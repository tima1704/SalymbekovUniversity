import React from 'react'
import parse from 'html-react-parser'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select, { GroupBase, OptionsOrGroups } from 'react-select'
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types'

interface IFormProps {
  placeholders: ITemplatePlaceholder[]
  layout: string
  functions: ITemplateFunction[]
  index: number
  onSubmit: SubmitHandler<Record<string, string | number>>
  data: OptionsOrGroups<{
    value: string;
    label: JSX.Element;
  }, GroupBase<{
    value: string;
    label: JSX.Element;
  }>> | undefined
}

const Form = ({ placeholders, layout, functions, index, data, onSubmit }: IFormProps) => {

  const {
    register,
    handleSubmit,
    control,
  } = useForm()

  if (!placeholders) return;
  if (!layout) return;
  return (
    <div>
      <form key={index} onSubmit={handleSubmit(data => onSubmit({ ...data, index }))}>
        {
          parse(
            placeholders.reduce((total, { key, value }) => {
              return total.replace(key, value)
            }, layout)
          )
        }
        {
          placeholders?.map(({ key, type, value }) => {
            return (
              <label
                className="flex items-center py-3 gap-2 relative border-b"
                key={key}
              >
                <h3 className="text-left w-1/6">{key}:</h3>
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
                          className="border rounded px-3 py-1 w-5/6 bg-slate-100"
                          options={data}
                          defaultValue={{ value, label: <img src={value} /> }}
                          ref={field.ref}
                          onChange={(val) => field.onChange(val?.value)}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              background: 'rgb(241, 245, 249)'
                            })
                          }}
                        />
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      id={key}
                      defaultValue={value}
                      className="border rounded px-3 py-1 w-5/6"
                      {
                      ...register(key)
                      }
                    />
                  )
                }

              </label>
            )
          })
        }
        {
          functions.map(({ id, func }) => {
            if (func.type === 'link') {
              return <div>
                <label
                  className="flex items-center py-3 gap-2 relative border-b"
                  key={id}
                >
                  <h3 className="text-left w-1/6">{id}:</h3>
                  {
                    (
                      <input
                        type="text"
                        id={id}
                        defaultValue={func.to as string}
                        className="border rounded px-3 py-1 w-5/6"
                        {
                        ...register(id)
                        }
                      />
                    )
                  }
                </label>
              </div>
            }
            return <div>
              Функция ещё не написана
            </div>
          })
        }
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded border mt-3"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default Form