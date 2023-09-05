import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="flex flex-col lg:flex-row">

      <img className="w-[100%] lg:w-[50%] h-[200px] sm:h-[auto] object-cover" src="$Studies3Image$" alt="Studies" />

      <div className="max-w-[100%] lg:max-w-[50%] bg-[#01018C] py-[30px] px-[20px] sm:p-[60px]">
        <h3 className="w-[70%] sm:w-[90%] text-[#ffffff] text-[15px] sm:text-[40px] not-italic font-[600] sm:leading-[60px] border-[#ffffff] border-[2px] rounded-t-[30px] sm:rounded-t-[50px] text-center m-[auto] p-[10px] border-b-[0px]">
          $Studies3StudyingAbroad$
        </h3>
        <div className="bg-[#ffffff] not-italic py-[25px] px-[20px] sm:py-[40px] sm:px-[50px] rounded-[50px]">
          <h2 className="text-[#0A0AD9] text-[25px] sm:text-[50px] font-[700] leading-[30px] sm:leading-[44px] text-center">
            $Studies3UniPage$
          </h2>
          <p className="text-[#010170] text-[14px] sm:text-[20px] font-[600] leading-[25px] sm:leading-[30px] my-[10px] sm:mt-[21px] sm:mb-[32px]">
            $Studies3Text$
          </p>
          <button className="text-[#ffffff] text-[12px] sm:text-[20px] font-[600] leading-[24px] flex items-center bg-[#E09B3D] py-[10px] px-[50px] sm:px-[80px] rounded-[50px] m-[auto] hover:bg-[#C18534] transition duration-[0.3s] ease-in-out">
            $Studies3LearnMore$
            <img src="$Studies3Arrow$" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Studies3Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/studies2.png'
  },
  {
    key: '$Studies3StudyingAbroad$',
    value: 'Учеба за границей!'
  },
  {
    key: '$Studies3UniPage$',
    value: 'UniPage'
  },
  {
    key: '$Studies3Text$',
    value: 'Мы сами учились за границей и знаем, как бывает сложно и страшно на этом пути. Чтобы поддержать таких же талантливых и амбициозных студентов, мы создали международное образовательное агентство UniPage.'
  },
  {
    key: '$Studies3LearnMore$',
    value: 'Узнать больше'
  },
  {
    key: '$Studies3Arrow$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/arrowToRight.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}