import React from 'react';
import Content from '../../Content';
import ListFaculties2 from '../ListFaculties/ListFaculties2';
import ListSpecialties2 from '../ListSpecialties/ListSpecialties2';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div className="max-w-[90%] w-[100%] m-[auto]">
      <h2 className="text-left text-[#202124] text-[20px] sm:text-[28px] not-italic font-[600] leading-[30px] sm:leading-[36px] mt-[20px] mb-[30px] sm:mt-[80px] sm:mb-[45px]">
        $ApplicantsList2Title$
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-[30px] sm:gap-[35px] md:gap-[40px]">
        <Content.layout />
        <ListFaculties2.layout />
      </div>
      <div className="w-[100%] lg:w-[80%] m-auto">
        <ListSpecialties2.layout />
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  ...Content.placeholders,
  ...ListFaculties2.placeholders,
  ...ListSpecialties2.placeholders,
  {
    key: '$ApplicantsList2Title$',
    value: 'Перечень факультетов и специальностей'
  }
]


const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}