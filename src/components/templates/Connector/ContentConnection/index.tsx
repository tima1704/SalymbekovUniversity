import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

interface IContent {
  id: number;
  description: string;
  style: string;
  path: string;
}

const ContentList: IContent[] = [
  {
    id: 1,
    description: "$ConnectionWithUs$",
    style:
      "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C] focus:text-[#fff]",
    path: "#connection",
  },
  {
    id: 2,
    description: "$WhereAreWe$",
    style:
      "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C]",
    path: "#map",
  },
  {
    id: 3,
    description: "$PhoneNumbers$",
    style:
      "text-[#818287] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px] transition duration-[0.3s] ease-in-out hover:text-[#01018C]",
    path: "#phones",
  },
];

const Layout = ({ ...props }) => {
  return (
    <div className="block md:sticky top-[10%] w-[25%]" {...props}>
      <h2 className="text-[#01018C] font-['Inter'] text-[16px] not-italic font-[600] leading-[24px]">
        $ContentOfConnection$
      </h2>
      <ul className="ml-[12px]">
        {ContentList.map((obj) => (
          <li key={obj.id} className="py-[10px]">
            <a className={obj.style} href={obj.path}>
              {obj.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$ConnectionWithUs$",
    value: "Связь с нами",
  },
  {
    key: "$WhereAreWe$",
    value: "Где мы находимся",
  },
  {
    key: "$PhoneNumbers$",
    value: "Телефонные номера",
  },
  {
    key: "$ContentOfConnection$",
    value: "Содержание",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: Layout,
  placeholders,
  functions,
};
