import React from 'react';
import Content from '../../Content';
import ListFaculties1 from '../ListFaculties/ListFaculties1';
import ListSpecialties1 from '../ListSpecialties/ListSpecialties1';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

const Layout = () => {
  return (
    <div>
      <h2 className="text-center text-[#202124] text-[20px] sm:text-[28px] not-italic font-[600] leading-[30px] sm:leading-[36px] mt-[20px] mb-[30px] sm:mt-[80px] sm:mb-[45px]">
        $ApplicantsListTitle$
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-[30px] sm:gap-[35px] md:gap-[40px] max-w-[90%] w-[100%] m-[auto]">
        <Content.layout />
        <div className="w-[100%]">
          <ListFaculties1.layout />
          <ListSpecialties1.layout />
        </div>
      </div>
    </div>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  ...Content.placeholders,
  ...ListFaculties1.placeholders,
  ...ListSpecialties1.placeholders,
  {
    key: '$ApplicantsListTitle$',
    value: 'Перечень факультетов и специальностей'
  }
]


const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
