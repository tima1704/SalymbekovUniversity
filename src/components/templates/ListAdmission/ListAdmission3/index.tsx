import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';


interface IAdmission {
  id: number;
  description: string;
  style: string;
}

const AdmissionList: IAdmission[] = [
  {
    id: 1,
    description: "$Admission3List1$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px] sm:py-[20px]"
  },
  {
    id: 2,
    description: "$Admission3List2$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px] sm:py-[20px]"
  },
  {
    id: 3,
    description: "$Admission3List3$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px] sm:py-[20px]"
  },
  {
    id: 4,
    description: "$Admission3List4$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px] py-[10px] sm:py-[20px]"
  },
];


const Layout = () => {
  return (
    <div id="admission" className="text-center pt-[25px] pb-[50px] sm:pt-[50px] sm:pb-[80px] max-w-[90%] w-[100%] m-[auto]">
      <h2 className="text-[#202124] text-[20px] sm:text-[28px] not-italic font-[600] leading-[20px] sm:leading-[36px] pb-[0] sm:pb-[20px]">
        $Admission3Title$
      </h2>
      <ul className="ml-[15px]">
        {
          AdmissionList.map(obj =>
            <li key={obj.id} className={obj.style}>
              {obj.description}
            </li>
          )
        }
      </ul>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Admission3List1$',
    value: 'Для поступления на программу бакалавра необходимо предъявить аттестат о среднем образовании и его перевод на английский язык. Так как обычно Сингапурский университет принимает только тех, кто окончил 12 лет школьного образования, российским абитуриентам будет необходимо сдать экзамен SAT или ACT, причем не только стандартный тест, но и тест по своей специальности (физика, биология, химия и т.д.).'
  },
  {
    key: '$Admission3List2$',
    value: 'Абитуриент должен владеть английским языком на высоком уровне.Знание языка необходимо подтвердить с помощью сертификатов IELTS или TOEFL с результатом 6.5–7.0 или 92–100 баллов соответственно.'
  },
  {
    key: '$Admission3List3$',
    value: 'Некоторые факультеты Сингапурского национального университета(право, медицина, архитектура и другие) требуют прохождения вступительных экзаменов, которые обычно проводятся в марте или апреле.'
  },
  {
    key: '$Admission3List4$',
    value: 'Заявку на обучение в Сингапурском национальном университете можно подать с 15 октября до 31 марта, плюс у абитуриента есть несколько дней для того, чтобы предоставить недостающие документы. 5 апреля весь пакет документов должен быть готов и прикреплен к заявке.'
  },
  {
    key: '$Admission3Title$',
    value: 'Как поступить?'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}