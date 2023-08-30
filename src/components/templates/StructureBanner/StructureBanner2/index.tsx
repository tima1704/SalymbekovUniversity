import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="bg-[url('$StructureBanner2Image$')] bg-no-repeat bg-cover bg-center overflow-hidden rounded-b-[50px]">
      <div className="max-w-[90%] w-[100%] m-[auto] py-[60px] sm:pt-[80px] sm:pb-[90px]">
        <div className="text-center text-[#ffffff] not-italic">
          <h1 className="text-[26px] sm:text-[55px] font-[600] leading-[31px] sm:leading-[44px] mb-[37px]">
            $StructureBanner2Title$
          </h1>
          <p className="font-['Inter'] text-[13px] sm:text-[28px] font-[400] leading-[20px] sm:leading-[42px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $StructureBanner2Text$
          </p>
        </div>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$StructureBanner2Title$',
    value: 'Структура Salymbekov University'
  },
  {
    key: '$StructureBanner2Text$',
    value: 'Это единый комплекс, в состав которого входят учебные, научно-исследовательские и др. структурные подразделения'
  },
  {
    key: '$StructureBanner2Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/StructureBanner2.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
