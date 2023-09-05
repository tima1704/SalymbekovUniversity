import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

interface IConnection {
  id: number;
  description: string;
  style: string;
  path?: string;
  image?: string;
}

const connectionList: IConnection[][] = [
  [
    {
      id: 1,
      description: "$ConnectionAdmission$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$ConnectionClients$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 3,
      description: "$ConnectionEducation$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionCooperation$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-l-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$ConnectionForeign$",
      style:
        "text-[#202124] px-[20px] py-[20px] pr-[21px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      image: "/src/components/common/icon/blueWhat.svg",
    },
    {
      id: 3,
      description: "$ConnectionAcademic$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionEmpty$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-l-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$ConnectionOthers$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      image: "/src/components/common/icon/blueWhat.svg",
    },
    {
      id: 3,
      description: "$ConnectionPartners$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionEmpty2$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-l-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$ConnectionReferal$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 3,
      description: "$ConnectionAgents$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionAdvertising$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 2,
      description:
        "$ConnectionLanguageSchools$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 3,
      description: "$ConnectionMedia$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-r-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionExperts$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$ConnectionJournalists$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 3,
      description: "$ConnectionEmpty3$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-r-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionAuthor$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$ConnectionCopyright$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 3,
      description: "$ConnectionMailAdress$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      description: "$ConnectionHR$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 2,
      description: "$ConnectionPotencial$",
      style:
        "text-[#202124] px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 3,
      description: "$ConnectionTalents$",
      style:
        "text-[#202124] underline px-[20px] py-[18px] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[15px] lg:leading-[23px] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
  ],
];

const Layout = ({ ...props }) => {
  return (
    <div id="connection" {...props}>
      <table>
        <thead>
          <tr>
            <th className="text-[#202124] text-start pl-[15px] py-[15px] text-[14px] md:text-[16px] font-['Inter'] font-[600] leading-[15px] md:leading-[23px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tl-[13px]">
              $ForWhatGoal$
            </th>
            <th className="text-[#202124] text-start pl-[15px] py-[15px] text-[14px] md:text-[16px] font-['Inter'] font-[600] leading-[15px] md:leading-[23px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $ForWho$
            </th>
            <th className="text-[#202124] py-[15px] text-[14px] md:text-[16px] font-['Inter'] font-[600] leading-[15px] md:leading-[23px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tr-[13px]">
              $MailConnection$
            </th>
          </tr>
        </thead>
        <tbody>
          {connectionList.map((item) => (
            <tr>
              {item.map((i) => (
                <td key={i.id} className={i.style}>
                  {i.path ? (
                    <a href={i.path}>{i.description}</a>
                  ) : (
                    i.description
                  )}
                  <img className="inline ml-[3px]" src={i.image} alt="" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$ForWhatGoal$",
    value: "Для какой цели",
  },
  {
    key: "$ForWho$",
    value: "Кому",
  },
  {
    key: "$MailConnection$",
    value: "Почта",
  },
  {
    key: "$ConnectionAdmission$",
    value: "Поступление за рубеж и услуги агентства",
  },
  {
    key: "$ConnectionClients$",
    value: "Клиенты агентства: абитуриенты и родители",
  },
  {
    key: "$ConnectionEducation$",
    value: "education@unipage.net",
  },
  {
    key: "$ConnectionCooperation$",
    value: "Сотрудничество",
  },
  {
    key: "$ConnectionForeign$",
    value: "Зарубежные и российские учебные заведения",
  },
  {
    key: "$ConnectionAcademic$",
    value: "academic@unipage.net",
  },
  {
    key: "$ConnectionEmpty$",
    value: "",
  },
  {
    key: "$ConnectionOthers$",
    value: "Другие типы партнеров",
  },
  {
    key: "$ConnectionPartners$",
    value: "partners@unipage.net",
  },
  {
    key: "$ConnectionEmpty2$",
    value: "",
  },
  {
    key: "$ConnectionReferal$",
    value: "Реферальная программа для представителей UniPage",
  },
  {
    key: "$ConnectionAgents$",
    value: "agents@unipage.net",
  },
  {
    key: "$ConnectionAdvertising$",
    value: "Реклама на сайте",
  },
  {
    key: "$ConnectionLanguageSchools$",
    value: "Вузы, языковые школы, онлайн-школы, блогеры, компании и т.д.",
  },
  {
    key: "$ConnectionMedia$",
    value: "media@unipage.net",
  },
  {
    key: "$ConnectionExperts$",
    value: "Экспертные комментарии для СМИ",
  },
  {
    key: "$ConnectionJournalists$",
    value: "Журналисты, редакторы, внештатные авторы",
  },
  {
    key: "$ConnectionEmpty3$",
    value: "",
  },
  {
    key: "$ConnectionAuthor$",
    value: "Авторское право",
  },
  {
    key: "$ConnectionCopyright$",
    value: "Правообладатели",
  },
  {
    key: "$ConnectionMailAdress$",
    value: "copyright@unipage.net",
  },
  {
    key: "$ConnectionHR$",
    value: "Отдел HR",
  },
  {
    key: "$ConnectionPotencial$",
    value: "Потенциальные сотрудники агентства UniPage",
  },
  {
    key: "$ConnectionTalents$",
    value: "talents@unipage.net",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: Layout,
  placeholders,
  functions,
};
