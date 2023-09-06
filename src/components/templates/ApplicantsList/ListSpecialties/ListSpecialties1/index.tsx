import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../../redux/TemplatesReducer/types';

interface ISpecialties {
  id: number;
  description: string;
  path: string;
  style: string;
  functionId?: string;
}

const SpecialtiesList: ISpecialties[] = [
  {
    id: 1,
    description: "$SpecialtiesList1$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink1$"
  },
  {
    id: 2,
    description: "$SpecialtiesList2$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink2$"
  },
  {
    id: 3,
    description: "$SpecialtiesList3$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink3$"
  },
  {
    id: 4,
    description: "$SpecialtiesList4$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink4$"
  },
  {
    id: 5,
    description: "$SpecialtiesList5$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink5$"
  },
  {
    id: 6,
    description: "$SpecialtiesList6$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink6$"
  },
  {
    id: 7,
    description: "$SpecialtiesList7$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink7$"
  },
  {
    id: 8,
    description: "$SpecialtiesList8$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink8$"
  },
  {
    id: 9,
    description: "$SpecialtiesList9$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink9$"
  },
  {
    id: 10,
    description: "$SpecialtiesList10$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialtiesLink10$"
  },
];

const Layout = () => {
  return (
    <div className="pt-[20px] pb-[25px] sm:pt-[40px] sm:pb-[50px]">
      <ul className="border-[#D3D4DB] border-[1px] border-solid rounded-[8px] w-[100%] md:w-[90%]">
        <h2 className="text-[#202124] font-['Inter'] text-[18px] not-italic font-[600] leading-[26px] bg-[#E3E3E7] py-[10px] pl-[16px]">
          $SpecialtiesTitle$
        </h2>
        {
          SpecialtiesList.map(obj =>
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
    key: '$SpecialtiesList1$',
    value: 'Инженер',
  },
  {
    key: '$SpecialtiesList2$',
    value: 'Программист'
  },
  {
    key: '$SpecialtiesList3$',
    value: 'Стэнфордский университет'
  },
  {
    key: '$SpecialtiesList4$',
    value: 'Принстонский университет'
  },
  {
    key: '$SpecialtiesList5$',
    value: 'Научно-технологический университет имени короля Абдаллы'
  },
  {
    key: '$SpecialtiesList6$',
    value: 'Массачусетский технологический институт (MIT)'
  },
  {
    key: '$SpecialtiesList7$',
    value: 'Пенсильванский университет'
  },
  {
    key: '$SpecialtiesList8$',
    value: 'Техасский университет'
  },
  {
    key: '$SpecialtiesList9$',
    value: 'Нотрдамский университет'
  },
  {
    key: '$SpecialtiesList10$',
    value: 'Кембриджский университет'
  },
  {
    key: '$SpecialtiesTitle$',
    value: 'Специальности'
  }
]


const functions: ITemplateFunction[] = [
  {
    id: '$funcSpecialtiesLink1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink4$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink5$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink6$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink7$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink8$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink9$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialtiesLink10$',
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