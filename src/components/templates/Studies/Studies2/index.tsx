import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <section className="bg-[url('$Studies2Image$')] bg-no-repeat bg-cover py-[30px] sm:py-[91px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <div className="w-[100%] lg:w-[50%]">
          <h3 className="w-[70%] sm:w-[90%] text-[#ffffff] text-[15px] sm:text-[40px] not-italic font-[600] sm:leading-[60px] border-[#ffffff] border-[2px] rounded-t-[30px] sm:rounded-t-[50px] text-center m-[auto] p-[10px] border-b-[0px]">
            $Studies2StudyingAbroad$
          </h3>
          <div className="bg-[#ffffff] not-italic py-[25px] px-[20px] sm:py-[40px] sm:px-[50px] rounded-[50px]">
            <h2 className="text-[#0A0AD9] text-[25px] sm:text-[50px] font-[700] leading-[30px] sm:leading-[44px] text-center">
              $Studies2UniPage$
            </h2>
            <p className="text-[#010170] text-[14px] sm:text-[20px] font-[600] leading-[25px] sm:leading-[30px] my-[10px] sm:mt-[21px] sm:mb-[32px]">
              $Studies2Text$
            </p>
            <button className="text-[#ffffff] text-[12px] sm:text-[20px] font-[600] leading-[24px] flex items-center bg-[#E09B3D] py-[10px] px-[50px] sm:px-[80px] rounded-[50px] m-[auto] hover:bg-[#C18534] transition duration-[0.3s] ease-in-out">
              $Studies2LearnMore$
              <img src="$Studies2Arrow$" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Studies2Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/studies2.png'
  },
  {
    key: '$Studies2StudyingAbroad$',
    value: 'Учеба за границей!'
  },
  {
    key: '$Studies2UniPage$',
    value: 'UniPage'
  },
  {
    key: '$Studies2Text$',
    value: 'Мы сами учились за границей и знаем, как бывает сложно и страшно на этом пути. Чтобы поддержать таких же талантливых и амбициозных студентов, мы создали международное образовательное агентство UniPage.'
  },
  {
    key: '$Studies2LearnMore$',
    value: 'Узнать больше'
  },
  {
    key: '$Studies2Arrow$',
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