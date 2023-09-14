import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IAdmission {
  id: number;
  description: string;
  style: string;
}

const AdminList: IAdmission[] = [
  {
    id: 1,
    description: "$Admission2List1$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px]"
  },
  {
    id: 2,
    description: "$Admission2List2$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px]"
  },
  {
    id: 3,
    description: "$Admission2List3$",
    style: "text-[#202124] text-[15px] sm:text-[18px] font-[500] leading-[30px] sm:leading-[40px]"
  },
];


const Layout = () => {
  return (
    <div className="max-w-[90%] pt-[25px] pb-[50px] sm:pt-[50px] sm:pb-[90px] m-auto">
      <h2 className="text-center text-[#202124] text-[18px] sm:text-[28px] not-italic font-[600] leading-[36px] pb-[10px] sm:pb-[50px]">
        $Admission2Title$
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[20px] sm:gap-[90px]">
        <ul className="text-left sm:text-center flex flex-col gap-[10px] sm:gap-[20px] list-decimal w-[90%] m-auto lg:w-[50%]">
          {
            AdminList.map(obj =>
              <li key={obj.id} className={obj.style}>
                {obj.description}
              </li>
            )
          }
        </ul>
        <div id="submission" className="w-[100%] lg:w-[50%] bg-[url('$Submission2Image$')] bg-no-repeat bg-cover text-[#202124] text-center not-italic p-[30px] sm:pt-[105px] sm:pb-[91px] sm:px-[71px]">
          <p className="text-[28px] font-[600] leading-[36px]">
            $Submission2Title$
          </p>
          <h3 className="text-[19px] sm:text-[32px] md:text-[40px] font-[600] leading-[30px] sm:leading-[60px] my-[20px] sm:my-[72px]">
            $Submission2Text$
          </h3>
          <button className="text-[#ffffff] text-[15px] sm:text-[20px] font-[600] leading-[24px] flex items-center bg-[#E09B3D] py-[10px] sm:py-[15px] px-[40px] sm:px-[80px] rounded-[50px] m-[auto] hover:bg-[#C08534] transition duration-[0.3s] ease-in-out">
            $Submission2Connect$
            <img src="$Submission2Arrow$" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Admission2List1$',
    value: 'Для поступления на программу бакалавра необходимо предъявить аттестат о среднем образовании и его перевод на английский язык. Так как обычно Сингапурский университет принимает только тех, кто окончил 12 лет школьного образования, российским абитуриентам будет необходимо сдать экзамен SAT или ACT, причем не только стандартный тест, но и тест по своей специальности (физика, биология, химия и т.д.).'
  },
  {
    key: '$Admission2List2$',
    value: 'Абитуриент должен владеть английским языком на высоком уровне.Знание языка необходимо подтвердить с помощью сертификатов IELTS или TOEFL с результатом 6.5–7.0 или 92–100 баллов соответственно.'
  },
  {
    key: '$Admission2List3$',
    value: 'Некоторые факультеты Сингапурского национального университета(право, медицина, архитектура и другие) требуют прохождения вступительных экзаменов, которые обычно проводятся в марте или апреле.'
  },
  {
    key: '$Admission2Title$',
    value: 'Как поступить?'
  },
  {
    key: '$Submission2Title$',
    value: 'Онлайн подача документов'
  },
  {
    key: '$Submission2Text$',
    value: 'Вы можете подать документы онлайн, для этого просто свяжитесь нами!'
  },
  {
    key: '$Submission2Connect$',
    value: 'Связаться с нами',
  },
  {
    key: '$Submission2Arrow$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/arrowToRight.png'
  },
  {
    key: '$Submission2Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/submission.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}