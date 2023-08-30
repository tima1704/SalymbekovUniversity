import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IGoals {
  id: number;
  description: string;
  style: string;
}

const GoalsList: IGoals[] = [
  {
    id: 1,
    description: "$GoalsList1$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 2,
    description: "$GoalsList2$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 3,
    description: "$GoalsList3$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
];

const Layout = () => {
  return (
    <div className="bg-[#ffffff] my-[20px] sm:pt-[80px] sm:pb-[25px] not-italic text-[#202124]">
      <div className="text-center max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-center text-[20px] sm:text-[28px] font-[600] leading-[30px] sm:leading-[36px] pb-[10px] sm:pb-[40px]">
          $Goals3Title$
        </h2>
        <ul className="ml-[15px] w-[100%]">
          {
            GoalsList.map(({ id, description, style }) =>
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
    key: '$GoalsList1$',
    value: 'Предоставление образование и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда и в соответствии с международными стандартами качества образования.'
  },
  {
    key: '$GoalsList2$',
    value: 'Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений.'
  },
  {
    key: '$GoalsList3$',
    value: 'Превращение Университета в один из первоклассных, инновационных и современных образовательных организаций страны с сильной материальной-технической базой, качественным кадровым составом и высокой репутацией.'
  },
  {
    key: '$Goals3Title$',
    value: 'Стратегические цели, исходя из миссии:'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
