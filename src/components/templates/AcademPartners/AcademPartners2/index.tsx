import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div
      className="bg-[url('$AcademPartnersBackground2$')] bg-cover rounded-b-[50px] mb-[80px]"
      {...props}
    >
      <div className="flex justify-center max-w-[90%] w-[100%] m-[auto] pt-[113px] pb-[124px]">
        <div className="text-[#ffffff] w-[56%]">
          <h1 className="text-[25px] lg:text-[36px] text-center font-[600] leading-[30px] lg:leading-[44px] mb-[24px]">
            $AcademPartners2Article$
          </h1>
          <p className="font-['Inter'] text-[13px] lg:text-[18px] pt-[10px] pb-[10px] font-[400] leading-[20px] lg:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[5px] ml-[70px]">
            $ListOfUniversity2$
          </p>
        </div>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$AcademPartnersBackground2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partners2.png",
  },
  {
    key: "$AcademPartners2Article$",
    value: "Академические партнеры Salymbekov University",
  },
  {
    key: "$ListOfUniversity2$",
    value: "Список школ и университетов",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
