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
        description: '$President3List1$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President3Arrow1$",
        arrowStyle: "hidden md:block absolute right-[-50px]"
      },
      {
        id: 2,
        description: '$President3List2$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 2,
    justify: 'center',
    cards: [
      {
        id: 3,
        description: '$President3List3$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 3,
    justify: 'between',
    cards: [
      {
        id: 4,
        description: '$President3List4$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President3Arrow2$",
        arrowStyle: "hidden md:block absolute top-[-130%] right-[0]"
      },
      {
        id: 5,
        description: '$President3List5$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President3Arrow3$",
        arrowStyle: "hidden md:block absolute left-[-80px]"
      },
      {
        id: 6,
        description: '`$President3List6$`',
        style: "relative top-[-25%] flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]",
      }
    ]
  },
  {
    id: 4,
    justify: 'center',
    cards: [
      {
        id: 8,
        description: '$President3List8$',
        style: "relative flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]",
        arrow: "$President3Arrow4$",
        arrowStyle: "hidden md:block absolute top-[-80%] left-[-140px]"
      },
    ]
  },
  {
    id: 5,
    justify: 'around',
    cards: [
      {
        id: 9,
        description: '$President3List9$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  }
];


interface IStructure {
  id: number;
  justify: 'center' | 'around' | 'between';
  cards: ICard[];
}



const COUNCILS: IStructure[] = [
  {
    id: 1,
    justify: 'center',
    cards: [
      {
        id: 1,
        description: '$Councils3List1$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      }
    ]
  },
  {
    id: 2,
    justify: 'around',
    cards: [
      {
        id: 2,
        description: '$Councils3List2$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 3,
        description: '$Councils3List3$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 3,
    justify: 'between',
    cards: [
      {
        id: 4,
        description: '$Councils3List4$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 5,
        description: '$Councils3List5$',
        style: "bg-[#13529F] flex items-center justify-center text-center text-[#ffffff] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#13529F] m-auto w-[100%] md:w-[70%] lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 6,
        description: '$Councils3List6$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 4,
    justify: 'between',
    cards: [
      {
        id: 7,
        description: '$Councils3List7$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 8,
        description: '$Councils3List8$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 9,
        description: '$Councils3List9$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 5,
    justify: 'around',
    cards: [
      {
        id: 10,
        description: '$Councils3List10$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 11,
        description: '$Councils3List11$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 6,
    justify: 'center',
    cards: [
      {
        id: 12,
        description: '$Councils3List12$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      }
    ]
  }
];

const EDUCATIONAL: IStructure[] = [
  {
    id: 1,
    justify: 'center',
    cards: [
      {
        id: 1,
        description: '$Educational3List1$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      }
    ]
  },
  {
    id: 2,
    justify: 'around',
    cards: [
      {
        id: 2,
        description: '$Educational3List2$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 3,
        description: '$Educational3List3$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 3,
    justify: 'between',
    cards: [
      {
        id: 4,
        description: '$Educational3List4$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 5,
        description: '$Educational3List5$',
        style: "bg-[#13529F] flex items-center justify-center text-center text-[#ffffff] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#13529F] m-auto w-[100%] md:w-[70%] lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 6,
        description: '$Educational3List6$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 4,
    justify: 'between',
    cards: [
      {
        id: 7,
        description: '$Educational3List7$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 8,
        description: '$Educational3List8$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 9,
        description: '$Educational3List9$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 5,
    justify: 'around',
    cards: [
      {
        id: 10,
        description: '$Educational3List10$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 11,
        description: '$Educational3List11$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 6,
    justify: 'center',
    cards: [
      {
        id: 12,
        description: '$Educational3List12$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      }
    ]
  }
];

const RECTOR: IStructure[] = [
  {
    id: 1,
    justify: 'center',
    cards: [
      {
        id: 1,
        description: '$Rector3List1$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      }
    ]
  },
  {
    id: 2,
    justify: 'around',
    cards: [
      {
        id: 2,
        description: '$Rector3List2$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 3,
        description: '$Rector3List3$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 3,
    justify: 'between',
    cards: [
      {
        id: 4,
        description: '$Rector3List4$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] m-auto w-[100%] md:w-[70%] lg:w-[33%] h-[130px] rounded-[16px]"
      },
      {
        id: 5,
        description: '$Rector3List5$',
        style: "bg-[#13529F] flex items-center justify-center text-center text-[#ffffff] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#13529F] m-auto w-[100%] md:w-[70%] lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 6,
        description: '$Rector3List6$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  },
  {
    id: 4,
    justify: 'between',
    cards: [
      {
        id: 7,
        description: '$Rector3List7$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
      {
        id: 8,
        description: '$Rector3List8$',
        style: "flex items-center justify-center text-center text-[#000000] text-[18px] not-italic font-[500] leading-[23px] border-[2px] border-solid border-[#B5B7C0] w-[100%] md:w-[70%] m-auto lg:w-[33%] h-[82px] rounded-[16px]"
      },
    ]
  }
];


const Layout = () => {
  return (
    <div className="pt-[20px] pb-[30px] md:pt-[80px] md:pb-[70px] max-w-[90%] w-[100%] m-auto">
      <h2 className="flex items-center justify-center text-center text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[20px] md:leading-[36px] pb-[0] md:pb-[70px]">
        $InstitutionStructure3Title$
      </h2>
      <div>

        <ul className="md:pt-[70px] md:pb-[75px]">
          {
            PRESIDENT.map(({ justify, cards, id }) => (
              <li className={`relative flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px] my-[30px] md:py-[45px] justify-${justify}`} key={id}>
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

        <ul className="py-[30px] md:py-[75px]">
          {
            COUNCILS.map(({ justify, cards, id }) => (
              <li className={`flex items-center gap-[50px] py-[20px] flex-col lg:flex-row justify-${justify}`} key={id}>
                {cards.map(({ id, description, style }) => (
                  <div key={id} className={style} >
                    {description}
                  </div>
                ))}
              </li>
            ))
          }
        </ul>

        <ul className="py-[30px] md:py-[75px]">
          {
            EDUCATIONAL.map(({ justify, cards, id }) => (
              <li className={`flex items-center gap-[50px] py-[20px] flex-col lg:flex-row justify-${justify}`} key={id}>
                {cards.map(({ id, description, style }) => (
                  <div key={id} className={style} >
                    {description}
                  </div>
                ))}
              </li>
            ))
          }
        </ul>

        <ul className="pt-[30px] md:py-[75px]">
          {
            RECTOR.map(({ justify, cards, id }) => (
              <li className={`flex items-center gap-[50px] py-[20px] flex-col lg:flex-row justify-${justify}`} key={id}>
                {cards.map(({ id, description, style }) => (
                  <div key={id} className={style} >
                    {description}
                  </div>
                ))}
              </li>
            ))
          }
        </ul>

      </div>
    </div>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Councils3List1$',
    value: 'Экзаменационная комиссия'
  },
  {
    key: '$Councils3List2$',
    value: 'Научно-технический Совет'
  },
  {
    key: '$Councils3List3$',
    value: 'Редакционный Совет'
  },
  {
    key: '$Councils3List4$',
    value: 'Комиссия по социальной поддержке студентов'
  },
  {
    key: '$Councils3List5$',
    value: 'Советы и комиссии'
  },
  {
    key: '$Councils3List6$',
    value: 'Биоэтическая комиссия'
  },
  {
    key: '$Councils3List7$',
    value: 'Учебно-методический Совет'
  },
  {
    key: '$Councils3List8$',
    value: 'Совет родителей и работодателей'
  },
  {
    key: '$Councils3List9$',
    value: 'Приемная комиссия'
  },
  {
    key: '$Councils3List10$',
    value: 'Тарификационная комиссия'
  },
  {
    key: '$Councils3List11$',
    value: 'Апелляционная комиссия'
  },
  {
    key: '$Councils3List12$',
    value: 'Аттестационная комиссия'
  },
  {
    key: '$Educational3List1$',
    value: 'Филиалы'
  },
  {
    key: '$Educational3List2$',
    value: 'Профессиональные Колледжи'
  },
  {
    key: '$Educational3List3$',
    value: 'Кафедры'
  },
  {
    key: '$Educational3List4$',
    value: 'Институты'
  },
  {
    key: '$Educational3List5$',
    value: 'Учебно-научные подразделения'
  },
  {
    key: '$Educational3List6$',
    value: 'Факультеты'
  },
  {
    key: '$Educational3List7$',
    value: 'Службы'
  },
  {
    key: '$Educational3List8$',
    value: 'Образовательные центры'
  },
  {
    key: '$Educational3List9$',
    value: 'Департаменты'
  },
  {
    key: '$Educational3List10$',
    value: 'Студенческое самоуправление'
  },
  {
    key: '$Educational3List11$',
    value: 'Высшие школы'
  },
  {
    key: '$Educational3List12$',
    value: 'Отделы'
  },
  {
    key: '$BasesList1$',
    value: 'Клинические базы - клиники, поликлиники и медцентры'
  },
  {
    key: '$BasesList2$',
    value: 'Технологические и инновационные центры'
  },
  {
    key: '$BasesList3$',
    value: 'Культурные, спортивные и оздоровительные центры'
  },
  {
    key: '$BasesList4$',
    value: 'Строительные, монтажные, маркетинговые, полиграфические, рекламные и другие коммерческие структуры'
  },
  {
    key: '$BasesList5$',
    value: 'Производственные базы'
  },
  {
    key: '$BasesList6$',
    value: 'Творческие и учебно-производственные мастерские'
  },
  {
    key: '$BasesList7$',
    value: 'Экспертные, консультационные и аналитические центры'
  },
  {
    key: '$BasesList8$',
    value: 'Лаборатории и учебно- исследовательские центры'
  },
  {
    key: '$Rector3List1$',
    value: 'Клинические базы - клиники, поликлиники и медцентры'
  },
  {
    key: '$Rector3List2$',
    value: 'Технологические и инновационные центры'
  },
  {
    key: '$Rector3List3$',
    value: 'Культурные, спортивные и оздоровительные центры'
  },
  {
    key: '$Rector3List4$',
    value: 'Строительные, монтажные, маркетинговые,полиграфические, рекламные и другие коммерческие структуры'
  },
  {
    key: '$Rector3List5$',
    value: 'Производственные базы'
  },
  {
    key: '$Rector3List6$',
    value: 'Творческие и учебно-производственные мастерские'
  },
  {
    key: '$Rector3List7$',
    value: 'Творческие и учебно-производственные мастерские'
  },
  {
    key: '$Rector3List8$',
    value: 'Лаборатории и учебно- исследовательские центры'
  },
  {
    key: '$President3List1$',
    value: 'Общее собрание учредителей'
  },
  {
    key: '$President3List2$',
    value: 'Совет по развитию'
  },
  {
    key: '$President3List3$',
    value: 'Наблюдательный совет'
  },
  {
    key: '$President3List4$',
    value: 'Президент'
  },
  {
    key: '$President3List5$',
    value: 'Ректор'
  },
  {
    key: '`$President3List6$`',
    value: 'Ученый совет'
  },
  {
    key: '$President3List7$',
    value: 'Ревизионная комиссия'
  },
  {
    key: '$President3List8$',
    value: 'Ревизионная комиссия'
  },
  {
    key: '$President3List9$',
    value: 'Проекторы'
  },
  {
    key: '$President3Arrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure3Arrow.png'
  },
  {
    key: '$President3Arrow2$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure3Arrow2.png'
  },
  {
    key: '$President3Arrow3$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure3Arrow3.png'
  },
  {
    key: '$President3Arrow4$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Structure3Arrow4.png'
  },
  {
    key: '$InstitutionStructure3Title$',
    value: 'Структура учреждения «Салымбеков Университет»'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
