import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="bg-[url('$ApplicantsBanner2Image$')] overflow-hidden rounded-b-[50px]">
      <div className="max-w-[90%] w-[100%] m-[auto] py-[60px] sm:py-[110px]">
        <div className="text-center text-[#ffffff] not-italic">
          <h1 className="text-[26px] sm:text-[55px] font-[600] leading-[31px] sm:leading-[44px] mb-[27px]">
            $ApplicantsBanner2Title$
          </h1>
          <p className="font-['Inter'] text-[14px] sm:text-[27px] font-[400] leading-[20px] sm:leading-[40px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $ApplicantsBanner2Text$
          </p>
        </div>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$ApplicantsBanner2Title$',
    value: 'Факультеты и специальности'
  },
  {
    key: '$ApplicantsBanner2Text$',
    value: 'Подготовка современных кадров, способных реализовывать творческие инициативы и инновационные идеи на благо общества'
  },
  {
    key: '$ApplicantsBanner2Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ApplicantsBanner2.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
