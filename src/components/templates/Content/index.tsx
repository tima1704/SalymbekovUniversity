import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../redux/TemplatesReducer/types';

interface IContent {
  id: number;
  description: string;
  style: string;
  path: string;
}

const ContentList: IContent[] = [
  {
    id: 1,
    description: "$ContentListFaculties$",
    style: "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C] focus:text-[#fff]",
    path: "#faculties"
  },
  {
    id: 2,
    description: "$ContentListAdmission$",
    style: "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C]",
    path: "#admission"
  },
  {
    id: 3,
    description: "$ContentListSubmission$",
    style: "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C]",
    path: "#submission"
  },
  {
    id: 4,
    description: "$ContentListFooter$",
    style: "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C]",
    path: "#footer"
  },
]

const Layout = () => {
  return (
    <div className="static md:sticky top-[10%] w-[100%] md:w-[25%]">
      <h2 className="text-[#01018C] font-['Inter'] text-[18px] not-italic font-[600] leading-[24px]">
        $ContentTitle$
      </h2>
      <ul className="ml-[12px]">
        {
          ContentList.map(obj =>
            <li key={obj.id} className="py-[5px] md:py-[10px]">
              <a className={obj.style} href={obj.path}>
                {obj.description}
              </a>
            </li>
          )
        }
      </ul>
    </div>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$ContentListFaculties$',
    value: 'Перечень факультетов и специальностей'
  },
  {
    key: '$ContentListAdmission$',
    value: 'Как поступить'
  },
  {
    key: '$ContentListSubmission$',
    value: 'Онлайн подача документов'
  },
  {
    key: '$ContentListFooter$',
    value: 'Связаться снами'
  },
  {
    key: '$ContentTitle$',
    value: 'Содержание'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: Layout,
  placeholders,
  functions,
}
