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
    description: "$MedicineList1$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#72C976] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 2,
    description: "$MedicineList2$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#72C976] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 3,
    description: "$MedicineList3$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#72C976] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 4,
    description: "$MedicineList4$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 5,
    description: "$MedicineList5$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 6,
    description: "$MedicineList6$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
  {
    id: 7,
    description: "$MedicineList7$",
    style: "flex items-center justify-center text-[#000000] text-center text-[17px] font-[500] leading-[21px] py-[69px] px-[52px] border-[2px] border-[#3A96AA] border-solid rounded-[15px] w-[100%] md:w-[33%] h-[180px]"
  },
]

const Layout = () => {
  return (
    <div className="py-[30px] md:pt-[42px] md:pb-[80px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-[#202124] text-center text-[20px] md:text-[29px] not-italic font-[600] leading-[30px] md:leading-[38px] mb-[30px] md:mb-[40px]">
          $MedicineTitle$
        </h2>
        <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-[28px] md:gap-[32px]">
          {/* Первый ряд */}
          {
            MedicineList.slice(0, 3).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-[28px] md:gap-[32px] my-[32px]">
          {/* Второй ряд */}
          {
            MedicineList.slice(3, 5).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-[28px] md:gap-[32px]">
          {/* Третий ряд */}
          {
            MedicineList.slice(5).map(({ id, description, style }) =>
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
    key: '$MedicineList1$',
    value: 'Кафедра естественно-гуманитарных дисциплин',
  },
  {
    key: '$MedicineList2$',
    value: 'Кафедра клинических дисциплин',
  },
  {
    key: '$MedicineList3$',
    value: 'Кафедра хирургических дисциплин',
  },
  {
    key: '$MedicineList4$',
    value: 'Кафедра педиатрии',
  },
  {
    key: '$MedicineList5$',
    value: 'Кафедра акушерства и гинекологии',
  },
  {
    key: '$MedicineList6$',
    value: 'Кафедра инфекционных болезней',
  },
  {
    key: '$MedicineList7$',
    value: 'Кафедра терапевтических дисциплин',
  },
  {
    key: '$MedicineTitle$',
    value: 'Международный факультет медицины'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}