import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IResult {
  id: number;
  description: string;
  style: string;
}

const ResultsList: IResult[] = [
  {
    id: 1,
    description: "$Results2List1$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 2,
    description: "$Results2List2$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 3,
    description: "$Results2List3$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 4,
    description: "$Results2List4$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 5,
    description: "$Results2List5$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 6,
    description: "$Results2List6$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 7,
    description: "$Results2List7$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 8,
    description: "$Results2List8$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
];

const Layout = () => {
  return (
    <div className="bg-[#ffffff] my-[20px] sm:pt-[25px] sm:pb-[80px] not-italic text-[#202124]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-left sm:text-center text-[20px] sm:text-[28px] font-[600] leading-[30px] sm:leading-[36px] pb-[10px] sm:pb-[40px]">
          $Results2Title$
        </h2>
        <ul className="list-decimal ml-[15px]">
          {
            ResultsList.map(({ id, description, style }) =>
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
    key: '$Results2List1$',
    value: 'Умение применять знания базовых естественных, гуманитарных, социальных, фундаментальных и клинических дисциплин в практической деятельности работника здравоохранения;'
  },
  {
    key: '$Results2List2$',
    value: 'Умение четко излагать свои мысли, полемизировать в рамках освоенных компетенций на государственном, официальном и английском языках с использованием медицинской терминологии на латинском языке;'
  },
  {
    key: '$Results2List3$',
    value: 'Получение навыка работы в интернациональной команде, принимать решения и нести ответственность как лидера и члена команды с использованием коммуникативных и базовых психологических навыков, умение делегировать полномочия в команде;'
  },
  {
    key: '$Results2List4$',
    value: 'Знание основных форм и методов профилактики заболеваний, санитарно­-просветительской работы с населением, знание противоэпидемических мероприятий на уровне врача общей практики;'
  },
  {
    key: '$Results2List5$',
    value: 'Умение использовать современные информационные технологии для поиска, анализа, обработки и предоставлению общественности информации согласно получаемой компетенции, во врачебной, научной и педагогической деятельности;'
  },
  {
    key: '$Results2List6$',
    value: 'Владение навыками нравственного, культурного и профессионального самосовершенствования путем самостоятельного обзора учебников, научных статей, монографий и прочей литературы в рамках, формируемых компетенции;'
  },
  {
    key: '$Results2List7$',
    value: 'Знать, уметь применять и представлять общественности приобретенные общенаучные, профессиональные знания и инструментальные навыки для проведения научно­-практических исследований в области медицины на международном уровне;'
  },
  {
    key: '$Results2List8$',
    value: 'Демонстрация профессиональных компетенций во врачебной, научной и педагогической деятельности в организациях — потенциальных работодателей.'
  },
  {
    key: '$Results2Title$',
    value: 'Ожидаемые результаты обучения:'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}