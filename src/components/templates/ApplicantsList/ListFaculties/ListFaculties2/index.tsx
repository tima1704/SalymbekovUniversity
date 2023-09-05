import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../../redux/TemplatesReducer/types';

interface IFaculties {
  id: number;
  description: string;
  path: string;
  style: string;
  functionId?: string;
}

const FacultiesList: IFaculties[] = [
  {
    id: 1,
    description: "$Faculties2List1$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#ffffff] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link1$"
  },
  {
    id: 2,
    description: "$Faculties2List2$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#f4f4f5] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link2$"
  },
  {
    id: 3,
    description: "$Faculties2List3$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#ffffff] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link3$"
  },
  {
    id: 4,
    description: "$Faculties2List4$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#f4f4f5] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link4$"
  },
  {
    id: 5,
    description: "$Faculties2List5$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#ffffff] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link5$"
  },
  {
    id: 6,
    description: "$Faculties2List6$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#f4f4f5] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link6$"
  },
  {
    id: 7,
    description: "$Faculties2List7$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#ffffff] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link7$"
  },
  {
    id: 8,
    description: "$Faculties2List8$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#f4f4f5] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link8$"
  },
  {
    id: 9,
    description: "$Faculties2List9$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#ffffff] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link9$"
  },
  {
    id: 10,
    description: "$Faculties2List10$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[27px] not-italic font-[400] leading-[37px] underline bg-[#f4f4f5] py-[10px] sm:pt-[21px] sm:pb-[25px] pl-[23px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFaculties2Link10$"
  },
];

const Layout = () => {
  return (
    <div id="faculties" className="py-[20px] sm:pb-[40px]">
      <ul className="border-[#D3D4DB] border-[1px] border-solid rounded-[15px] w-[100%]">
        <h2 className="text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[26px] not-italic font-[600] leading-[37px] bg-[#E3E3E7] py-[10px] sm:pt-[21px] sm:pb-[26px] pl-[22px] rounded-t-[15px]">
          $Faculties2Title$
        </h2>
        {
          FacultiesList.map(obj =>
            <li key={obj.id}>
              <a className={obj.style}>
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
    key: '$Faculties2List1$',
    value: 'Гарвардский университет',
  },
  {
    key: '$Faculties2List2$',
    value: 'Йельский университет'
  },
  {
    key: '$Faculties2List3$',
    value: 'Стэнфордский университет'
  },
  {
    key: '$Faculties2List4$',
    value: 'Принстонский университет'
  },
  {
    key: '$Faculties2List5$',
    value: 'Научно-технологический университет имени короля Абдаллы'
  },
  {
    key: '$Faculties2List6$',
    value: 'Массачусетский технологический институт (MIT)'
  },
  {
    key: '$Faculties2List7$',
    value: 'Пенсильванский университет'
  },
  {
    key: '$Faculties2List8$',
    value: 'Техасский университет'
  },
  {
    key: '$Faculties2List9$',
    value: 'Нотрдамский университет'
  },
  {
    key: '$Faculties2List10$',
    value: 'Кембриджский университет'
  },
  {
    key: '$Faculties2Title$',
    value: 'Факультеты'
  }
]


const functions: ITemplateFunction[] = [
  {
    id: '$funcFaculties2Link1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link4$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link5$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link6$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link7$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link8$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link9$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFaculties2Link10$',
    func: {
      type: 'link',
      to: '/'
    }
  },
]

export default {
  layout: Layout,
  placeholders,
  functions,
}