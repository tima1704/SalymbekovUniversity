import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px]">
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[20px] pb-[70px] sm:pt-[113px] sm:pb-[124px]">
        <div className="text-center text-[#ffffff] not-italic w-[70%] sm:w-[55%] ml-[10%] sm:ml-[15%]">
          <h1 className="tetx-[26px] sm:text-[36px] font-[600] leading-[31px] sm:leading-[44px] mb-[24px]">
            $MissionBanner3Title$
          </h1>
          <p className="font-['Inter'] text-[13px] sm:text-[18px] font-[400] ledaing-[20px] sm:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $MissionBanner3Text$
          </p>
        </div>
      </div>
      <div>
        <img className="absolute bottom-[0] right-[0]" src="$MissionBanner3Image$" alt="Mission" />
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$MissionBanner3Title$',
    value: 'Наша Миссия'
  },
  {
    key: '$MissionBanner3Text$',
    value: 'Подготовка современных кадров, способных реализовывать творческие инициативы и инновационные идеи на благо общества'
  },
  {
    key: '$MissionBanner3Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/MissionBanner2.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
