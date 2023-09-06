import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden">
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[27px] pb-[90px] sm:pt-[138px] sm:pb-[140px]">
        <div className="text-[#ffffff] not-italic w-[70%] sm:w-[56%]">
          <h1 className="text-[26px] sm:text-[36px] font-[600] leading-[31px] sm:leading-[44px] mb-[24px]">
            $StructureBannerTitle$
          </h1>
          <p className="font-['Inter'] text-[13px] sm:text-[18px] font-[400] leading-[20px] sm:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $StructureBannerText$
          </p>
        </div>
      </div>
      <div>
        <img className="absolute bottom-[0] right-[0]" src="$StructureBannerImage$" alt="Mission" />
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$StructureBannerTitle$',
    value: 'Структура Salymbekov University'
  },
  {
    key: '$StructureBannerText$',
    value: 'Это единый комплекс, в состав которого входят учебные, научно-исследовательские и др. структурные подразделения'
  },
  {
    key: '$StructureBannerImage$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/StructureBanner1.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
