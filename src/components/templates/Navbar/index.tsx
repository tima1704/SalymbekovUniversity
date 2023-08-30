import React from "react";
import { ITemplateFunction, ITemplatePlaceholder } from "../../../redux/TemplatesReducer/types";

interface NavbarItem {
  id: number;
  description: string;
  path: string;
  style: string;
  functionId?: string;
}


const NavbarList: NavbarItem[] = [
  {
    id: 1,
    description: "$NavListHome$",
    path: "/",
    style: "text-[#3838C7] leading-[16px] border-[#3838C7] border-[2px] border-solid rounded-[50px] p-[10px] lg:text-[#45474D] text-[12px] sm:text-[16px] not-italic font-[600] leading-[20px] lg:border-none transition duration-[0.3s] ease-in-out hover:text-[#3838C7] cursor-pointer whitespace-nowrap",
    functionId: "$funcNavLink1$"
  },
  {
    id: 2,
    description: "$NavListStructure$",
    path: "/structure",
    style: "text-[#3838C7] leading-[16px] border-[#3838C7] border-[2px] border-solid rounded-[50px] p-[10px] lg:text-[#45474D] text-[12px] sm:text-[16px] not-italic font-[600] leading-[20px] lg:border-none transition duration-[0.3s] ease-in-out hover:text-[#3838C7] cursor-pointer whitespace-nowrap",
    functionId: "$funcNavLink2$"
  },
  {
    id: 3,
    description: "$NavListApplicants$",
    path: "/applicants",
    style: "text-[#3838C7] leading-[16px] border-[#3838C7] border-[2px] border-solid rounded-[50px] p-[10px] lg:text-[#45474D] text-[12px] sm:text-[16px] not-italic font-[600] leading-[20px] lg:border-none transition duration-[0.3s] ease-in-out hover:text-[#3838C7] cursor-pointer whitespace-nowrap",
    functionId: "$funcNavLink3$"
  },
  {
    id: 4,
    description: "$NavListGallery$",
    path: "/gallery",
    style: "text-[#3838C7] leading-[16px] border-[#3838C7] border-[2px] border-solid rounded-[50px] p-[10px] lg:text-[#45474D] text-[12px] sm:text-[16px] not-italic font-[600] leading-[20px] lg:border-none transition duration-[0.3s] ease-in-out hover:text-[#3838C7] cursor-pointer whitespace-nowrap",
    functionId: "$funcNavLink4$"
  },
  {
    id: 5,
    description: "$NavListClinics$",
    path: "/clinics",
    style: "text-[#3838C7] leading-[16px] border-[#3838C7] border-[2px] border-solid rounded-[50px] p-[10px] lg:text-[#45474D] text-[12px] sm:text-[16px] not-italic font-[600] leading-[20px] lg:border-none transition duration-[0.3s] ease-in-out hover:text-[#3838C7] cursor-pointer whitespace-nowrap",
    functionId: "$funcNavLink5$"
  },
  {
    id: 6,
    description: "$NavListContacts$",
    path: "/contacts",
    style: "text-[#3838C7] leading-[16px] border-[#3838C7] border-[2px] border-solid rounded-[50px] p-[10px] lg:text-[#45474D] text-[12px] sm:text-[16px] not-italic font-[600] leading-[20px] lg:border-none transition duration-[0.3s] ease-in-out hover:text-[#3838C7] cursor-pointer whitespace-nowrap",
    functionId: "$funcNavLink6$"
  },
]

const Layout = () => {
  return (
    <div className="bg-[#EEEEEECC]">
      <ul className="relative text-center flex items-center justify-between max-w-[90%] w-[100%] m-[auto] overflow-x-scroll py-[20px] sm:py-[30px] lg:overflow-auto gap-[20px]">
        {
          NavbarList.map(({ id, description, style, functionId }) =>
            <li key={id}>
              <a id={functionId} className={style}>
                {description}
              </a>
            </li>
          )
        }
      </ul>
    </div >
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$NavListHome$',
    value: 'Главная',
  },
  {
    key: '$NavListStructure$',
    value: 'Структура университета'
  },
  {
    key: '$NavListApplicants$',
    value: 'Для абитуриента'
  },
  {
    key: '$NavListGallery$',
    value: 'Фотогалерея'
  },
  {
    key: '$NavListClinics$',
    value: 'Клиники'
  },
  {
    key: '$NavListContacts$',
    value: 'Клиники'
  }
]


const functions: ITemplateFunction[] = [
  {
    id: '$funcNavLink1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcNavLink2$',
    func: {
      type: 'link',
      to: '/structure'
    }
  },
  {
    id: '$funcNavLink3$',
    func: {
      type: 'link',
      to: '/applicants'
    }
  },
  {
    id: '$funcNavLink4$',
    func: {
      type: 'link',
      to: '/gallery'
    }
  },
  {
    id: '$funcNavLink5$',
    func: {
      type: 'link',
      to: '/clinics'
    }
  },
  {
    id: '$funcNavLink6$',
    func: {
      type: 'link',
      to: '/contacts'
    }
  },
]

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
