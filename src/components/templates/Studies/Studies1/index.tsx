import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <section className="bg-[#01018C] py-[30px] sm:py-[70px]">
      <div className="flex justify-center flex-col lg:flex-row gap-[35px] max-w-[90%] w-[100%] m-[auto]">
        <div className="w-[100%] lg:w-[50%] h-[400px] lg:h-[auto]">
          <img className="h-[100%] lg:h-[auto] w-[100%] object-cover rounded-[20px]" src="$StudiesImage$" alt="Studies" />
        </div>
        <div className="w-[100%] lg:w-[50%] mt-[0px] lg:mt-[100px]">
          <h3 className="w-[60%] sm:w-[90%] text-[#ffffff] text-[15px] sm:text-[40px] not-italic font-[600] leading-[60px] border-[#ffffff] border-[2px] rounded-t-[10px] sm:rounded-t-[50px] text-center m-[auto] p-[0px] sm:p-[10px] border-b-[0px]">
            $StudiesStudyingAbroad$
          </h3>
          <div className="bg-[#ffffff] not-italic p-[25px] sm:py-[40px] sm:px-[50px] rounded-[50px]">
            <h2 className="text-[#0A0AD9] text-[25px] sm:text-[50px] font-[700] leading-[44px] text-center">
              $StudiesUniPage$
            </h2>
            <p className="text-[#010170] text-[14px] sm:text-[20px] font-[600] leading-[30px] my-[15px] sm:mt-[21px] sm:mb-[32px]">
              $StudiesText$
            </p>
            <button className="text-[#ffffff] text-[12px] sm:text-[20px] font-[600] leading-[24px] flex items-center bg-[#E09B3D] py-[10px] px-[80px] rounded-[50px] m-[auto] hover:bg-[#C18534] transition duration-[0.3s] ease-in-out">
              $StudiesLearnMore$
              <img src="$StudiesArrow$" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$StudiesImage$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/studies1.png'
  },
  {
    key: '$StudiesStudyingAbroad$',
    value: 'Учеба за границей!'
  },
  {
    key: '$StudiesUniPage$',
    value: 'UniPage'
  },
  {
    key: '$StudiesText$',
    value: 'Мы сами учились за границей и знаем, как бывает сложно и страшно на этом пути. Чтобы поддержать таких же талантливых и амбициозных студентов, мы создали международное образовательное агентство UniPage.'
  },
  {
    key: '$StudiesLearnMore$',
    value: 'Узнать больше'
  },
  {
    key: '$StudiesArrow$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/arrowToRight.svg'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}