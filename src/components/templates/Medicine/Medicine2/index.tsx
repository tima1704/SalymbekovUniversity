import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IMedicine {
  id: number;
  description: string;
  style: string;
}

const MedicineList: IMedicine[] = [
  {
    id: 1,
    description: "$Medicine2List1$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#72C976] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 2,
    description: "$Medicine2List2$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#72C976] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 3,
    description: "$Medicine2List3$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#72C976] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 4,
    description: "$Medicine2List4$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 5,
    description: "$Medicine2List5$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 6,
    description: "$Medicine2List6$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 7,
    description: "$Medicine2List7$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
]

const Layout = () => {
  return (
    <div className="py-[30px] md:pt-[70px] md:pb-[180px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-[#202124] text-center text-[20px] md:text-[29px] not-italic font-[600] leading-[30px] md:leading-[38px] mb-[38px] md:mb-[70px]">
          $Medicine2Title$
        </h2>
        <ul className="flex flex-wrap lg:flex-nowrap  items-center justify-center gap-[28px] md:gap-[32px]">
          {/* Первый ряд */}
          {
            MedicineList.slice(0, 3).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="flex flex-wrap lg:flex-nowrap  items-center justify-center gap-[28px] md:gap-[32px] my-[26px]">
          {/* Второй ряд */}
          {
            MedicineList.slice(3).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Medicine2List1$',
    value: 'Кафедра естественно-гуманитарных дисциплин',
  },
  {
    key: '$Medicine2List2$',
    value: 'Кафедра клинических дисциплин',
  },
  {
    key: '$Medicine2List3$',
    value: 'Кафедра хирургических дисциплин',
  },
  {
    key: '$Medicine2List4$',
    value: 'Кафедра педиатрии',
  },
  {
    key: '$Medicine2List5$',
    value: 'Кафедра акушерства и гинекологии',
  },
  {
    key: '$Medicine2List6$',
    value: 'Кафедра инфекционных болезней',
  },
  {
    key: '$Medicine2List7$',
    value: 'Кафедра терапевтических дисциплин',
  },
  {
    key: '$Medicine2Title$',
    value: 'Международный факультет медицины'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}