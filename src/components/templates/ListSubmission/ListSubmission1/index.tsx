import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div id="submission" className="py-[48px] sm:py-[60px] bg-[url('$SubmissionImage$')] bg-no-repeat bg-cover">
      <div className="max-w-[90%] w-[100%] m-[auto] text-[#202124] text-center not-italic">
        <p className="text-[30px] sm:text-[28px] font-[600] leading-[50px] sm:leading-[36px]">
          $SubmissionTitle$
        </p>
        <h3 className="text-[19px] sm:text-[34px] md:text-[40px] font-[600] leading-[30px] sm:leading-[60px] my-[20px] sm:my-[33px]">
          $SubmissionText$
        </h3>
        <button className="text-[#ffffff] text-[15px] sm:text-[20px] font-[600] leading-[24px] flex items-center bg-[#E09B3D] py-[10px] sm:py-[15px] px-[40px] sm:px-[80px] rounded-[50px] m-[auto] hover:bg-[#C08534] transition duration-[0.3s] ease-in-out">
          $SubmissionConnect$
          <img src="$SubmissionArrow$" alt="Arrow" />
        </button>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$SubmissionImage$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/submission.png',
  },
  {
    key: '$SubmissionTitle$',
    value: 'Онлайн подача документов'
  },
  {
    key: '$SubmissionText$',
    value: 'Вы можете подать документы онлайн, для этого просто свяжитесь нами!'
  },
  {
    key: '$SubmissionConnect$',
    value: 'Связаться с нами'
  },
  {
    key: '$SubmissionArrow$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/arrowToRight.svg'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}