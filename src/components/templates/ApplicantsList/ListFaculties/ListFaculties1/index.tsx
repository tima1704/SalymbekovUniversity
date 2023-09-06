import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../../redux/TemplatesReducer/types';

interface IFaculties {
  id: number;
  description: string;
  path: string;
  style: string;
  functionId: string;
}

const FacultiesList: IFaculties[] = [
  {
    id: 1,
    description: "$FacultiesList1$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#ffffff] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink1$"
  },
  {
    id: 2,
    description: "$FacultiesList2$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#f4f4f5] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink2$"
  },
  {
    id: 3,
    description: "$FacultiesList3$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#ffffff] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink3$"
  },
  {
    id: 4,
    description: "$FacultiesList4$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#f4f4f5] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink4$"
  },
  {
    id: 5,
    description: "$FacultiesList5$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#ffffff] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink5$"
  },
  {
    id: 6,
    description: "$FacultiesList6$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#f4f4f5] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink6$"
  },
  {
    id: 7,
    description: "$FacultiesList7$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#ffffff] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink7$"
  },
  {
    id: 8,
    description: "$FacultiesList8$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#f4f4f5] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink8$"
  },
  {
    id: 9,
    description: "$FacultiesList9$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#ffffff] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink9$"
  },
  {
    id: 10,
    description: "$FacultiesList10$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[20px] underline bg-[#f4f4f5] py-[10px] sm:py-[15px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcFacultiesLink10$"
  },
];

const Layout = () => {
  return (
    <div id="faculties" className="pb-[20px] sm:pb-[40px]">
      <ul className="border-[#D3D4DB] border-[1px] border-solid rounded-[8px] w-[100%] md:w-[90%]">
        <h2 className="text-[#202124] font-['Inter'] text-[] sm:text-[18px] not-italic font-[600] leading-[26px] bg-[#E3E3E7] py-[10px] pl-[16px]">
          $FacultiesTitle$
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
    key: '$FacultiesList1$',
    value: 'Гарвардский университет',
  },
  {
    key: '$FacultiesList2$',
    value: 'Йельский университет'
  },
  {
    key: '$FacultiesList3$',
    value: 'Стэнфордский университет'
  },
  {
    key: '$FacultiesList4$',
    value: 'Принстонский университет'
  },
  {
    key: '$FacultiesList5$',
    value: 'Научно-технологический университет имени короля Абдаллы'
  },
  {
    key: '$FacultiesList6$',
    value: 'Массачусетский технологический институт (MIT)'
  },
  {
    key: '$FacultiesList7$',
    value: 'Пенсильванский университет'
  },
  {
    key: '$FacultiesList8$',
    value: 'Техасский университет'
  },
  {
    key: '$FacultiesList9$',
    value: 'Нотрдамский университет'
  },
  {
    key: '$FacultiesList10$',
    value: 'Кембриджский университет'
  },
  {
    key: '$FacultiesTitle$',
    value: 'Факультеты'
  }
]


const functions: ITemplateFunction[] = [
  {
    id: '$funcFacultiesLink1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink4$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink5$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink6$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink7$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink8$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink9$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFacultiesLink10$',
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
