import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface ISpecialties {
  id: number;
  description: string;
  path: string;
  style: string;
  functionId: string;
}

const SpecialtiesList: ISpecialties[] = [
  {
    id: 1,
    description: "$Specialties2List1$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link1$"
  },
  {
    id: 2,
    description: "$Specialties2List2$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link2$"
  },
  {
    id: 3,
    description: "$Specialties2List3$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link3$"
  },
  {
    id: 4,
    description: "$Specialties2List4$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link4$"
  },
  {
    id: 5,
    description: "$Specialties2List5$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link5$"
  },
  {
    id: 6,
    description: "$Specialties2List6$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link6$"
  },
  {
    id: 7,
    description: "$Specialties2List7$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link7$"
  },
  {
    id: 8,
    description: "$Specialties2List8$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link8$"
  },
  {
    id: 9,
    description: "$Specialties2List9$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#ffffff] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link9$"
  },
  {
    id: 10,
    description: "$Specialties2List10$",
    path: "/",
    style: "text-[#202124] font-['Inter'] text-[18px] not-italic font-[400] leading-[26px] underline bg-[#f4f4f5] py-[10px] pl-[16px] block transition duration-[0.3s] ease-in-out hover:no-underline hover:text-[#818287]",
    functionId: "$funcSpecialties2Link10$"
  },
];


const Layout = () => {
  return (
    <div className="pt-[20px] pb-[25px] sm:pt-[40px] sm:pb-[50px]">
      <ul className="border-[#D3D4DB] border-[1px] border-solid rounded-[15px] w-[100%]">
        <h2 className="text-[#202124] font-['Inter'] text-[20px] sm:text-[22px] md:text-[26px] not-italic font-[600] leading-[37px] bg-[#E3E3E7] py-[10px] sm:pt-[21px] sm:pb-[26px] pl-[22px] rounded-t-[15px]">
          $Specialties2Title$
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
    key: '$Specialties2List1$',
    value: 'Инженер',
  },
  {
    key: '$Specialties2List2$',
    value: 'Программист'
  },
  {
    key: '$Specialties2List3$',
    value: 'Стэнфордский университет'
  },
  {
    key: '$Specialties2List4$',
    value: 'Принстонский университет'
  },
  {
    key: '$Specialties2List5$',
    value: 'Научно-технологический университет имени короля Абдаллы'
  },
  {
    key: '$Specialties2List6$',
    value: 'Массачусетский технологический институт (MIT)'
  },
  {
    key: '$Specialties2List7$',
    value: 'Пенсильванский университет'
  },
  {
    key: '$Specialties2List8$',
    value: 'Техасский университет'
  },
  {
    key: '$Specialties2List9$',
    value: 'Нотрдамский университет'
  },
  {
    key: '$Specialties2List10$',
    value: 'Кембриджский университет'
  },
  {
    key: '$Specialties2Title$',
    value: 'Специальности'
  }
]


const functions: ITemplateFunction[] = [
  {
    id: '$funcSpecialties2Link1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$  1 $',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link5$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link6$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link7$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link8$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link9$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcSpecialties2Link10$',
    func: {
      type: 'link',
      to: '/'
    }
  },
]

export default {
  layout: <Layout />,
  placeholders,
  functions,
}