import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="flex items-center">
      <div className="w-[50%] bg-[url('$Submission3Image$')] bg-cover bg-no-repeat p-[25px] sm:p-[40px] md:py-[77px] md:px-[75px] rounded-se-[100px] sm:rounded-se-[150px]">
        <p className="text-center text-[#202124] text-[16px] sm:text-[30px] md:text-[40px] not-italic font-[600] leading-[20px] sm:leading-[50px] md:leading-[60px]">
          $Submission3Text$
        </p>
      </div>
      <div className="w-[50%] text-center">
        <h3 className="text-[18px] sm:text-[28px] font-[600] leading-[20px] sm:leading-[36px] my-[10px] sm:my-[24px]">
          $Submission3Title$
        </h3>
        <button className="text-[#ffffff] text-[12px] md:text-[20px] font-[600] leading-[20px] sm:leading-[24px] flex items-center bg-[#E09B3D] py-[5px] sm:py-[10px] md:py-[15px] px-[20px] sm:px-[40px] md:px-[80px] rounded-[50px] m-[auto] hover:bg-[#C08534] transition duration-[0.3s] ease-in-out">
          $Submission3Connect$
          <img src="$Submission3Arrow$" alt="Arrow" />
        </button>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Submission3Image$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/submission.png',
  },
  {
    key: '$Submission3Title$',
    value: 'Онлайн подача документов'
  },
  {
    key: '$Submission3Text$',
    value: 'Вы можете подать документы онлайн, для этого просто свяжитесь нами!'
  },
  {
    key: '$Submission3Connect$',
    value: 'Связаться с нами'
  },
  {
    key: '$Submission3Arrow$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/arrowToRight.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}