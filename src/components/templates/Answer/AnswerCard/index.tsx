import React from 'react'
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IAnswerProps {
  id: number;
  description: string;
  text: string;
  handleClick: (id: number) => void;
  open: null | number;
}

const Layout = ({ id, description, text, handleClick, open }: IAnswerProps) => {
  return (
    <div onClick={() => handleClick(id)}>
      <h3 className={`text-[#0D3A71] text-[18px] sm:text-[20px] not-italic font-[600] leading-[30px] py-[10px] sm:py-[15px] ${open !== id && "border-b-[2px]"} ${open === id && "text-[#000000]"}  cursor-pointer transition duration-[0.3s] ease-in-out hover:text-[#000000] hover:border-[#000000]`}>{description}</h3>
      {
        open === id
          ? <p className="py-[15px] cursor-pointer">{text}</p>
          : null
      }
    </div>
  )
}

const placeholders: ITemplatePlaceholder[] = []

const functions: ITemplateFunction[] = []

export default {
  layout: Layout,
  placeholders,
  functions,
}