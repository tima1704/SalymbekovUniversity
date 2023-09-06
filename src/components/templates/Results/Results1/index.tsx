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
    description: "$ResultsList1$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 2,
    description: "$ResultsList2$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 3,
    description: "$ResultsList3$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 4,
    description: "$ResultsList4$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 5,
    description: "$ResultsList5$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 6,
    description: "$ResultsList6$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 7,
    description: "$ResultsList7$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
  {
    id: 8,
    description: "$ResultsList8$",
    style: "text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px]"
  },
];

const Layout = () => {
  return (
    <div className="bg-[#ffffff] my-[20px] sm:pt-[25px] sm:pb-[80px] not-italic text-[#202124]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-left sm:text-center text-[20px] sm:text-[28px] font-[600] leading-[30px] sm:leading-[36px] pb-[10px] sm:pb-[40px]">
          $ResultsTitle$
        </h2>
        <ul className="list-disc ml-[15px]">
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
    key: '$ResultsList1$',
    value: 'Умение применять знания базовых естественных, гуманитарных, социальных, фундаментальных и клинических дисциплин в практической деятельности работника здравоохранения;'
  },
  {
    key: '$ResultsList2$',
    value: 'Умение четко излагать свои мысли, полемизировать в рамках освоенных компетенций на государственном, официальном и английском языках с использованием медицинской терминологии на латинском языке;'
  },
  {
    key: '$ResultsList3$',
    value: 'Получение навыка работы в интернациональной команде, принимать решения и нести ответственность как лидера и члена команды с использованием коммуникативных и базовых психологических навыков, умение делегировать полномочия в команде;'
  },
  {
    key: '$ResultsList4$',
    value: 'Знание основных форм и методов профилактики заболеваний, санитарно­-просветительской работы с населением, знание противоэпидемических мероприятий на уровне врача общей практики;'
  },
  {
    key: '$ResultsList5$',
    value: 'Умение использовать современные информационные технологии для поиска, анализа, обработки и предоставлению общественности информации согласно получаемой компетенции, во врачебной, научной и педагогической деятельности;'
  },
  {
    key: '$ResultsList6$',
    value: 'Владение навыками нравственного, культурного и профессионального самосовершенствования путем самостоятельного обзора учебников, научных статей, монографий и прочей литературы в рамках, формируемых компетенции;'
  },
  {
    key: '$ResultsList7$',
    value: 'Знать, уметь применять и представлять общественности приобретенные общенаучные, профессиональные знания и инструментальные навыки для проведения научно­-практических исследований в области медицины на международном уровне;'
  },
  {
    key: '$ResultsList8$',
    value: 'Демонстрация профессиональных компетенций во врачебной, научной и педагогической деятельности в организациях — потенциальных работодателей.'
  },
  {
    key: '$ResultsTitle$',
    value: 'Ожидаемые результаты обучения:'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}