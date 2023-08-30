import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px]">
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[76px] pb-[133px]">
        <div className="text-center text-[#ffffff] not-italic w-[60%] ml-[15%]">
          <h1 className="text-[36px] font-[600] leading-[44px] mb-[24px]">
            $StructureBanner3Title$
          </h1>
          <p className="font-['Inter'] text-[18px] font-[400] leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $StructureBanner3Text$
          </p>
        </div>
      </div>
      <div>
        <img className="absolute bottom-[0] right-[0]" src="$StructureBanner3Image$" alt="Mission" />
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$StructureBanner3Title$',
    value: 'Структура Salymbekov University'
  },
  {
    key: '$StructureBanner3Text$',
    value: 'Это единый комплекс, в состав которого входят учебные, научно-исследовательские и др. структурные подразделения'
  },
  {
    key: '$StructureBanner3Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/StructureBanner3.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
