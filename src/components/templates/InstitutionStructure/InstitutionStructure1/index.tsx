import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IStructure {
  id: number;
  description: string;
  style: string;
}

const COUNCILS: IStructure[] = [
  {
    id: 1,
    description: "$CouncilsList1$",
    style: "text-[#ffffff] bg-[#13529F] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#13529F] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 2,
    description: "$CouncilsList2$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 3,
    description: "$CouncilsList3$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 4,
    description: "$CouncilsList4$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 5,
    description: "$CouncilsList5$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 6,
    description: "$CouncilsList6$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 7,
    description: "$CouncilsList7$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 8,
    description: "$CouncilsList8$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 9,
    description: "$CouncilsList9$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 10,
    description: "$CouncilsList10$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 11,
    description: "$CouncilsList11$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 12,
    description: "$CouncilsList12$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
];

const EDUCATIONAL: IStructure[] = [
  {
    id: 1,
    description: "$EducationalList1$",
    style: "text-[#ffffff] bg-[#0870AA] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#0870AA] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 2,
    description: "$EducationalList2$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 3,
    description: "$EducationalList3$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 4,
    description: "$EducationalList4$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 5,
    description: "$EducationalList5$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 6,
    description: "$EducationalList6$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 7,
    description: "$EducationalList7$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 8,
    description: "$EducationalList8$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 9,
    description: "$EducationalList9$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 10,
    description: "$EducationalList10$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 11,
    description: "$EducationalList11$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 12,
    description: "$EducationalList12$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
];

const BASES: IStructure[] = [
  {
    id: 1,
    description: "$BasesList1$",
    style: "text-[#ffffff] bg-[#359BD5] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#359BD5] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 2,
    description: "$BasesList2$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 3,
    description: "$BasesList3$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 4,
    description: "$BasesList4$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 5,
    description: "$BasesList5$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 6,
    description: "$BasesList6$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 7,
    description: "$BasesList7$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]"
  },
  {
    id: 8,
    description: "$BasesList8$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%]"
  },
];


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
        description: '$PresidentList1$',
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] md:w-[32%] h-[83px]",
        arrow: "$PresidentArrow1$",
        arrowStyle: "absolute bottom-[-35%]"
      }
    ]
  },
  {
    id: 2,
    justify: 'center',
    cards: [
      {
        id: 2,
        description: '$PresidentList2$',
        style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] md:w-[32%] h-[83px]"
      },
    ]
  },
  {
    id: 3,
    justify: 'between',
    cards: [
      {
        id: 3,
        description: '$PresidentList3$',
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]",
        arrow: "$PresidentArrow2$",
        arrowStyle: "hidden md:block absolute right-[-35px]"
      },
      {
        id: 4,
        description: '$PresidentList4$',
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]",
        arrow: "$PresidentArrow3$",
        arrowStyle: "absolute bottom-[-35%]"
      },
      {
        id: 5,
        description: '$PresidentList5$',
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]",
        arrow: "$PresidentArrow4$",
        arrowStyle: "hidden md:block absolute left-[-34px]"
      }
    ]
  },
  {
    id: 4,
    justify: 'between',
    cards: [
      {
        id: 6,
        description: '$PresidentList6$',
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]",
        arrow: "$PresidentArrow5$",
        arrowStyle: "hidden md:block absolute right-[-35px]"
      },
      {
        id: 7,
        description: "$PresidentList7$",
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]",
      },
      {
        id: 8,
        description: "$PresidentList8$",
        style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] h-[83px]",
        arrow: "$PresidentArrow6$",
        arrowStyle: "hidden md:block absolute left-[-34px]"
      }
    ]
  },
  {
    id: 5,
    justify: 'center',
    cards: [
      {
        id: 9,
        description: '$PresidentList9$',
        style: "text-[#000000] text-[18px] not-italic font-[500] leading-[23px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[17px] text-center w-[100%] md:w-[31.5%] h-[83px] m-[auto]"
      },
    ]
  }
];



const Layout = () => {
  return (
    <div className="py-[30px] md:pt-[80px] md:pb-[42px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-center text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
          $InstitutionStructureTitle$
        </h2>
        <ul className="mt-[40px] mb-[55px] md:mb-[34px]">
          {
            PRESIDENT.map(({ justify, cards, id }) => (
              <li className={`flex items-center gap-[34px] py-[17px] flex-col md:flex-row justify-center md:justify-${justify}`} key={id}>
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

        <div className="flex flex-wrap justify-center lg:flex-nowrap items-start gap-[35px]">
          <ul className="w-[100%] sm:w-[45%] lg:w-[33%] flex flex-col gap-[35px]">
            {
              COUNCILS.map(({ id, description, style }) =>
                <li key={id} className={style}>
                  {description}
                </li>)
            }
          </ul>
          <ul className="w-[100%] sm:w-[45%] lg:w-[33%] flex flex-col gap-[35px] my-[60px] md:my-[0]">
            {
              EDUCATIONAL.map(({ id, description, style }) =>
                <li key={id} className={style}>
                  {description}
                </li>)
            }
          </ul>
          <ul className="w-[100%] sm:w-[45%] lg:w-[33%] flex flex-col gap-[35px]">
            {
              BASES.map(({ id, description, style }) =>
                <li key={id} className={style}>
                  {description}
                </li>)
            }
          </ul>
        </div>

      </div>
    </div >
  )
};



const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$CouncilsList1$',
    value: 'Советы и комиссии'
  },
  {
    key: '$CouncilsList2$',
    value: 'Научно-технический Совет'
  },
  {
    key: '$CouncilsList3$',
    value: 'Редакционный Совет'
  },
  {
    key: '$CouncilsList4$',
    value: 'Учебно-методический Совет'
  },
  {
    key: '$CouncilsList5$',
    value: 'Совет родителей и работодателей'
  },
  {
    key: '$CouncilsList6$',
    value: 'Комиссия по социальной поддержке студентов'
  },
  {
    key: '$CouncilsList7$',
    value: 'Биоэтическая комиссия'
  },
  {
    key: '$CouncilsList8$',
    value: 'Приемная комиссия'
  },
  {
    key: '$CouncilsList9$',
    value: 'Апелляционная комиссия'
  },
  {
    key: '$CouncilsList10$',
    value: 'Аттестационная комиссия'
  },
  {
    key: '$CouncilsList11$',
    value: 'Экзаменационная комиссия'
  },
  {
    key: '$CouncilsList12$',
    value: 'Тарификационная комиссия'
  },
  {
    key: '$EducationalList1$',
    value: 'Учебно-научные подразделения'
  },
  {
    key: '$EducationalList2$',
    value: 'Институты'
  },
  {
    key: '$EducationalList3$',
    value: 'Высшие школы'
  },
  {
    key: '$EducationalList4$',
    value: 'Факультеты'
  },
  {
    key: '$EducationalList5$',
    value: 'Кафедры'
  },
  {
    key: '$EducationalList6$',
    value: 'Профессиональные Колледжи'
  },
  {
    key: '$EducationalList7$',
    value: 'Образовательные центры'
  },
  {
    key: '$EducationalList8$',
    value: 'Филиалы'
  },
  {
    key: '$EducationalList9$',
    value: 'Департаменты'
  },
  {
    key: '$EducationalList10$',
    value: 'Отделы'
  },
  {
    key: '$EducationalList11$',
    value: 'Службы'
  },
  {
    key: '$EducationalList12$',
    value: 'Студенческое самоуправление'
  },
  {
    key: '$BasesList1$',
    value: 'Производственные базы'
  },
  {
    key: '$BasesList2$',
    value: 'Клинические базы - клиники, поликлиники и медцентры'
  },
  {
    key: '$BasesList3$',
    value: 'Творческие и учебно-производственные мастерские'
  },
  {
    key: '$BasesList4$',
    value: 'Технологические и инновационные центры'
  },
  {
    key: '$BasesList5$',
    value: 'Экспертные, консультационные и аналитические центры'
  },
  {
    key: '$BasesList6$',
    value: 'Лаборатории и учебно- исследовательские центры'
  },
  {
    key: '$BasesList7$',
    value: 'Культурные, спортивные и оздоровительные центры'
  },
  {
    key: '$BasesList8$',
    value: 'Строительные, монтажные, маркетинговые, полиграфические рекламные и другие коммерческие структуры'
  },
  {
    key: '$PresidentList1$',
    value: 'Общее собрание учредителей'
  },
  {
    key: '$PresidentList2$',
    value: 'Совет по развитию'
  },
  {
    key: '$PresidentList3$',
    value: 'Наблюдательный совет'
  },
  {
    key: '$PresidentList4$',
    value: 'Президент'
  },
  {
    key: '$PresidentList5$',
    value: 'Ревизионная комиссия'
  },
  {
    key: '$PresidentList6$',
    value: 'Ученый совет'
  },
  {
    key: '$PresidentList7$',
    value: 'Ректор'
  },
  {
    key: '$PresidentList8$',
    value: 'Совет по качеству'
  },
  {
    key: '$PresidentList9$',
    value: 'Проекторы'
  },
  {
    key: '$PresidentArrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/structureArrow.png'
  },
  {
    key: '$PresidentArrow2$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/structureArrow2.png'
  },
  {
    key: '$PresidentArrow3$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/structureArrow.png'
  },
  {
    key: '$PresidentArrow4$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/structureArrow2.png'
  },
  {
    key: '$PresidentArrow5$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/structureArrow2.png'
  },
  {
    key: '$PresidentArrow6$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/structureArrow2.png'
  },
  {
    key: '$InstitutionStructureTitle$',
    value: 'Структура учреждения «Салымбеков Университет»'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
