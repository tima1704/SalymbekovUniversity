import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface ICard {
  id: number;
  description: string;
  style: string;
  arrow?: string;
  arrowStyle?: string;
}

interface IPresident {
  id: number;
  justify: 'center' | 'around' | 'between';
  cards: ICard[];
}


const PRESIDENT: IPresident[] = [
  {
    id: 1,
    justify: 'center',
    cards: [
      {
        id: 1,
        description: '$President2List1$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President2Arrow1$",
        arrowStyle: "hidden sm:block absolute right-[-25px]"
      },
      {
        id: 2,
        description: '$President2List2$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 2,
    justify: 'center',
    cards: [
      {
        id: 3,
        description: '$President2List3$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 3,
    justify: 'between',
    cards: [
      {
        id: 4,
        description: '$President2List4$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President2Arrow2$",
        arrowStyle: "hidden sm:block absolute top-[-110%] right-[0]"
      },
      {
        id: 5,
        description: '$President2List5$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President2Arrow3$",
        arrowStyle: "hidden sm:block absolute top-[-110%] left-[50%]"
      },
      {
        id: 6,
        description: '$President2List6$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President2Arrow4$",
        arrowStyle: "hidden sm:block absolute top-[-110%] left-[0]"
      },
    ]
  },
  {
    id: 4,
    justify: 'center',
    cards: [
      {
        id: 7,
        description: '$President2List7$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President2Arrow5$",
        arrowStyle: "hidden sm:block absolute top-[-100%] right-[10%]"
      },
      {
        id: 8,
        description: '$President2List8$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President2Arrow6$",
        arrowStyle: "hidden sm:block absolute top-[-100%] left-[10%]"
      },
    ]
  },
  {
    id: 5,
    justify: 'around',
    cards: [
      {
        id: 9,
        description: '$President2List9$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] sm:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  }
];


interface IStructure {
  id: number;
  description: string;
  style: string;
}

const COUNCILS: IStructure[] = [
  {
    id: 1,
    description: "$Councils2List1$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 2,
    description: "$Councils2List2$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 3,
    description: "$Councils2List3$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 4,
    description: "$Councils2List4$",
    style: "flex items-center justify-center text-center text-[#ffffff] text-[18px] not-italic font-[500] leading-[23px] rounded-[16px] bg-[#13529F] py-[30px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] mt-[30px]"
  },
  {
    id: 5,
    description: "$Councils2List5$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 6,
    description: "$Councils2List6$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 7,
    description: "$Councils2List7$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 8,
    description: "$Councils2List8$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 9,
    description: "$Councils2List9$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 10,
    description: "$Councils2List10$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 11,
    description: "$Councils2List11$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 12,
    description: "$Councils2List12$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
]

const EDUCATIONAL: IStructure[] = [
  {
    id: 1,
    description: "$Educational2List1$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 2,
    description: "$Educational2List2$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 3,
    description: "$Educational2List3$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 4,
    description: "$Educational2List4$",
    style: "flex items-center justify-center text-center text-[#ffffff] text-[18px] not-italic font-[500] leading-[23px] rounded-[16px] bg-[#13529F] py-[30px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] mt-[30px]"
  },
  {
    id: 5,
    description: "$Educational2List5$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 6,
    description: "$Educational2List6$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 7,
    description: "$Educational2List7$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 8,
    description: "$Educational2List8$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 9,
    description: "$Educational2List9$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 10,
    description: "$Educational2List10$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 11,
    description: "$Educational2List11$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 12,
    description: "$Educational2List12$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[82px] px-[16px] py-[30px] mt-[30px] lg:my-[75px]"
  },
]

const BASES: IStructure[] = [
  {
    id: 1,
    description: "$Bases2List1$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] min-h-[82px] p-[20px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 2,
    description: "$Bases2List2$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] min-h-[82px] p-[20px] mt-[30px] lg:my-[75px]"
  },
  {
    id: 3,
    description: "$Bases2List3$",
    style: "flex items-center justify-center text-center text-[#ffffff] text-[18px] not-italic font-[500] leading-[23px] rounded-[16px] bg-[#13529F] py-[30px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] mt-[30px] min-h-[82px] p-[20px] px-[70px]"
  },
  {
    id: 4,
    description: "$Bases2List4$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] min-h-[82px] p-[20px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 5,
    description: "$Bases2List5$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] min-h-[82px] p-[20px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 6,
    description: "$Bases2List6$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] min-h-[82px] p-[20px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 7,
    description: "$Bases2List7$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] min-h-[82px] p-[20px] mt-[30px] lg:my-[80px]"
  },
  {
    id: 8,
    description: "$Bases2List8$",
    style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-[#B5B7C0] border-solid rounded-[16px] max-w-[100%] sm:max-w-[80%] lg:max-w-[370px] w-[100%] h-[180px] p-[20px] mt-[30px] lg:my-[80px]"
  },
]

const Layout = () => {
  return (
    <div className="py-[30px] md:pt-[80px] md:pb-[70px] max-w-[90%] w-[100%] m-auto">
      <h2 className="flex items-center justify-center text-center text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px] pb-[30px] md:pb-[70px]">
        $InstitutionStructure2Title$
      </h2>

      <ul className="pb-[30px] md:pt-[70px] md:pb-[75px]">
        {
          PRESIDENT.map(({ justify, cards, id }) => (
            <li className={`flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[25px] py-[10px] sm:py-[54px] justify-${justify}`} key={id}>
              {cards.map(({ id, description, style, arrow, arrowStyle }) => (
                <div key={id} className={style} >
                  {description}
                  {
                    arrow && <img className={arrowStyle} src={arrow} alt={description} />
                  }
                </div>
              ))}
            </li>
          ))
        }
      </ul>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-[0] lg:gap-[40px] py-[30px] lg:pt-[75px] lg:pb-[70px]">
        <ul className="w-[100%] flex flex-col items-center">
          {
            COUNCILS.slice(0, 3).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="w-[100%] flex flex-col items-center">
          {
            COUNCILS.slice(3, 9).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="w-[100%] flex flex-col items-center">
          {
            COUNCILS.slice(9).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-[0] lg:gap-[40px] py-[30px] lg:py-[70px]">
        <ul className="w-[100%] flex flex-col items-center">
          {
            EDUCATIONAL.slice(0, 3).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="w-[100%] flex flex-col items-center">
          {
            EDUCATIONAL.slice(3, 9).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="w-[100%] flex flex-col items-center">
          {
            EDUCATIONAL.slice(9).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-[0] lg:gap-[40px] pt-[30px] lg:pt-[70px]">
        <ul className="w-[100%] flex flex-col items-center">
          {
            BASES.slice(0, 2).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="w-[100%] flex flex-col items-center">
          {
            BASES.slice(2, 6).map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>
        <ul className="w-[100%] flex flex-col items-center">
          {
            BASES.slice(6).map(({ id, description, style }) =>
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
    key: '$Councils2List1$',
    value: 'Биоэтическая комиссия'
  },
  {
    key: '$Councils2List2$',
    value: 'Совет родителей и работодателей'
  },
  {
    key: '$Councils2List3$',
    value: 'Апелляционная комиссия'
  },
  {
    key: '$Councils2List4$',
    value: 'Советы и комиссии'
  },
  {
    key: '$Councils2List5$',
    value: 'Экзаменационная комиссия'
  },
  {
    key: '$Councils2List6$',
    value: 'Научно-технический Совет'
  },
  {
    key: '$Councils2List7$',
    value: 'Редакционный Совет'
  },
  {
    key: '$Councils2List8$',
    value: 'Тарификационная комиссия'
  },
  {
    key: '$Councils2List9$',
    value: 'Аттестационная комиссия'
  },
  {
    key: '$Councils2List10$',
    value: 'Комиссия по социальной поддержке студентов'
  },
  {
    key: '$Councils2List11$',
    value: 'Учебно-методический Совет'
  },
  {
    key: '$Councils2List12$',
    value: 'Приемная комиссия'
  },
  {
    key: '$Educational2List1$',
    value: 'Учебно-научные подразделения'
  },
  {
    key: '$Educational2List2$',
    value: 'Институты'
  },
  {
    key: '$Educational2List3$',
    value: 'Высшие школы'
  },
  {
    key: '$Educational2List4$',
    value: 'Кафедры'
  },
  {
    key: '$Educational2List5$',
    value: 'Факультеты'
  },
  {
    key: '$Educational2List6$',
    value: 'Образовательные центры'
  },
  {
    key: '$Educational2List7$',
    value: 'Профессиональные Колледжи'
  },
  {
    key: '$Educational2List8$',
    value: 'Филиалы'
  },
  {
    key: '$Educational2List9$',
    value: 'Отделы'
  },
  {
    key: '$Educational2List10$',
    value: 'Департаменты'
  },
  {
    key: '$Educational2List11$',
    value: 'Службы'
  },
  {
    key: '$Educational2List12$',
    value: 'Студенческое самоуправление'
  },
  {
    key: '$Bases2List1$',
    value: 'Экспертные, консультационные и аналитические центры'
  },
  {
    key: '$Bases2List2$',
    value: 'Лаборатории и учебно- исследовательские центры'
  },
  {
    key: '$Bases2List3$',
    value: 'Производственные базы'
  },
  {
    key: '$Bases2List4$',
    value: 'Клинические базы - клиники, поликлиники и медцентры'
  },
  {
    key: '$Bases2List5$',
    value: 'Творческие и учебно-производственные мастерские'
  },
  {
    key: '$Bases2List6$',
    value: 'Технологические и инновационные центры'
  },
  {
    key: '$Bases2List7$',
    value: 'Культурные, спортивные и оздоровительные центры'
  },
  {
    key: '$Bases2List8$',
    value: 'Строительные, монтажные, маркетинговые полиграфические, рекламные и другие коммерческие структуры'
  },
  {
    key: '$President2List1$',
    value: 'Общее собрание учредителей'
  },
  {
    key: '$President2List2$',
    value: 'Совет по развитию'
  },
  {
    key: '$President2List3$',
    value: 'Президент'
  },
  {
    key: '$President2List4$',
    value: 'Наблюдательный совет'
  },
  {
    key: '$President2List5$',
    value: 'Ректор'
  },
  {
    key: '$President2List6$',
    value: 'Ревизионная комиссия'
  },
  {
    key: '$President2List7$',
    value: 'Ученый совет'
  },
  {
    key: '$President2List8$',
    value: 'Совет по качеству'
  },
  {
    key: '$President2List9$',
    value: 'Проекторы'
  },
  {
    key: '$President2Arrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure2Arrow4.png'
  },
  {
    key: '$President2Arrow2$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure2Arrow.png'
  },
  {
    key: '$President2Arrow3$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure2Arrow3.png'
  },
  {
    key: '$President2Arrow4$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure2Arrow2.png'
  },
  {
    key: '$President2Arrow5$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure2Arrow.png'
  },
  {
    key: '$President2Arrow6$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure2Arrow2.png'
  },
  {
    key: '$InstitutionStructure2Title$',
    value: 'Структура учреждения «Салымбеков Университет»'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
