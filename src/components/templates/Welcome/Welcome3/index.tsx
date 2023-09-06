import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <section className="relative bg-[#ffffff] overflow-hidden">
      <div className="flex items-start max-w-[90%] w-[100%] m-[auto]">
        <div className="py-[40px] sm:pt-[70px] sm:pb-[50px] md:pb-[100px]">
          <div className="w-[60%] lg:w-[45%]">
            <p className="text-[#010170] text-[16px] min-[375px]:text-[18px] sm:text-[22px] md:text-[34px] lg:text-[48px] not-italic font-[600] leading-[21px] md:leading-[60px]">
              $Welcome3In$
            </p>
            <h1 className="text-[#3838C7] text-[22px] min-[375px]:text-[26px] sm:text-[30px] md:text-[48px] lg:text-[65px] font-[700] leading-[28px] md:leading-[60px] lg:leading-[80px] uppercase">
              $Welcome3Salymbekov$
            </h1>
            <p className="font-['Inter'] text-[#77797F] text-[15px] md:text-[22px] not-italic font-[600] leading-[20px] md:leading-[32px] mt-[14px] mb-[28px] mr-[20px] sm:mr-[0] md:mt-[30px] md:mb-[60px]">
              $Welcome3Place$
            </p>
          </div>

          <div className="w-[100%] text-[#010170] font-[600] not-italic flex align-center gap-[20px] sm:gap-[50px]">
            <div>
              <p className="text-[18px] sm:text-[27px] md:text-[36px] leading-[20px] sm:leading-[32px] md:leading-[44px]">$Welcome3YearNum$</p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] lowercase">$Welcome3YearOfFoundation$</p>
            </div>
            <div>
              <p className="text-[18px] sm:text-[27px] md:text-[36px] leading-[20px] sm:leading-[32px] md:leading-[44px]">$Welcome3StudentsNum$</p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] lowercase">$Welcome3Students$</p>
            </div>
            <div>
              <p className="text-[18px] sm:text-[27px] md:text-[36px] leading-[20px] sm:leading-[32px] md:leading-[44px]">$Welcome3PublicationNum$</p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] lowercase">$Welcome3Publication$</p>
            </div>
          </div>
        </div>

      </div>
      <div className="block w-[45%] lg:w-[50%] absolute 
      top-[24%] min-[375px] top-[18%] sm:top-[10%] md:top-[15%] lg:top-[0] right-[-3%] sm:right-[0]">
        <img className="max-w-[100%] w-[100%] object-cover" src="$Welcome3Image$" alt="S" />
      </div>
    </section>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Welcome3In$',
    value: 'Добро пожаловать в',
  },
  {
    key: '$Welcome3Salymbekov$',
    value: 'SALYMBEKOV UNIVERSITY',
  },
  {
    key: '$Welcome3Place$',
    value: 'Это уникальный университет где вы найдете место для себя.',
  },
  {
    key: '$Welcome3YearNum$',
    value: '2013',
  },
  {
    key: '$Welcome3YearOfFoundation$',
    value: 'год основания',
  },
  {
    key: '$Welcome3StudentsNum$',
    value: '4 000+',
  },
  {
    key: '$Welcome3Students$',
    value: 'cтудентов',
  },
  {
    key: '$Welcome3PublicationNum$',
    value: '5 000+',
  },
  {
    key: '$Welcome3Publication$',
    value: 'публикаций',
  },
  {
    key: '$Welcome3Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/welcome3.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
