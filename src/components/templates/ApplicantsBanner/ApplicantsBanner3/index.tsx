import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px]">
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[17px] pb-[73px] sm:pt-[84px] sm:pb-[130px]">
        <div className="text-center text-[#ffffff] not-italic w-[65%] sm:w-[55%] ml-[15%]">
          <h1 className="text-[26px] sm:text-[36px] font-[600] leading-[31px] sm:leading-[44px] mb-[24px]">
            $ApplicantsBanner3Title$
          </h1>
          <p className="font-['Inter'] text-[14px] sm:text-[18px] font-[400] leading-[20px] sm:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $ApplicantsBanner3Text$
          </p>
        </div>
      </div>
      <div>
        <img className="absolute bottom-[0] right-[0]" src="$ApplicantsBanner3Image$" alt="Mission" />
      </div>
    </div>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$ApplicantsBanner3Title$',
    value: 'Факультеты и специальности'
  },
  {
    key: '$ApplicantsBanner3Text$',
    value: 'Подготовка современных кадров, способных реализовывать творческие инициативы и инновационные идеи на благо общества'
  },
  {
    key: '$ApplicantsBanner3Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/fakultet3.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
