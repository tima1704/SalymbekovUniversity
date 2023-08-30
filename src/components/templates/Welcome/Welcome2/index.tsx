import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <section className="relative bg-[#ffffff] overflow-hidden">
      <div className="flex items-start max-w-[90%] w-[100%] m-[auto]">
        <div className="py-[40px] sm:pt-[70px] sm:pb-[50px] md:pb-[100px]">
          <div className="w-[60%] lg:w-[45%]">
            <p className="text-[#010170] text-[18px] sm:text-[22px] md:text-[34px] lg:text-[48px] not-italic font-[600] leading-[21px] md:leading-[60px]">
              $Welcome2In$
            </p>
            <h1 className="text-[#3838C7] text-[26px] sm:text-[30px] md:text-[48px] lg:text-[65px] font-[700] leading-[28px] md:leading-[60px] lg:leading-[80px] uppercase">
              $Welcome2Salymbekov$
            </h1>
            <p className="font-['Inter'] text-[#77797F] text-[15px] md:text-[22px] not-italic font-[600] leading-[20px] md:leading-[32px] mt-[14px] mb-[28px] md:mt-[30px] md:mb-[60px]">
              $Welcome2Place$
            </p>
          </div>

          <div className="w-[100%] text-[#010170] font-[600] not-italic flex align-center gap-[30px] sm:gap-[50px]">
            <div>
              <p className="text-[20px] sm:text-[27px] md:text-[36px] leading-[32px] md:leading-[44px]">$Welcome2YearNum$</p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] lowercase">$Welcome2YearOfFoundation$</p>
            </div>
            <div>
              <p className="text-[20px] sm:text-[27px] md:text-[36px] leading-[32px] md:leading-[44px]">$Welcome2StudentsNum$</p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] lowercase">$Welcome2Students$</p>
            </div>
            <div>
              <p className="text-[20px] sm:text-[27px] md:text-[36px] leading-[32px] md:leading-[44px]">$Welcome2PublicationNum$</p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] lowercase">$Welcome2Publication$</p>
            </div>
          </div>
        </div>

      </div>
      <div className="block w-[45%] lg:w-[50%] absolute top-[10%] md:top-[15%] lg:top-[0] right-[0]">
        <img className="max-w-[100%] w-[100%] object-cover" src="$Welcome2Image$" alt="S" />
      </div>
    </section>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Welcome2In$',
    value: 'Добро пожаловать в',
  },
  {
    key: '$Welcome2Salymbekov$',
    value: 'SALYMBEKOV UNIVERSITY',
  },
  {
    key: '$Welcome2Place$',
    value: 'Это уникальный университет где вы найдете место для себя.',
  },
  {
    key: '$Welcome2YearNum$',
    value: '2013',
  },
  {
    key: '$Welcome2YearOfFoundation$',
    value: 'год основания',
  },
  {
    key: '$Welcome2StudentsNum$',
    value: '4 000+',
  },
  {
    key: '$Welcome2Students$',
    value: 'cтудентов',
  },
  {
    key: '$Welcome2PublicationNum$',
    value: '5 000+',
  },
  {
    key: '$Welcome2Publication$',
    value: 'публикаций',
  },
  {
    key: '$Welcome2Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/welcome2.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}