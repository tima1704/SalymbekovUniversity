import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div
      className="bg-[url('$SalymbekovContactsBackground2$')] bg-cover rounded-b-[50px] mb-[80px]"
      {...props}
    >
      <div className="flex justify-center items-center max-w-[90%] w-[100%] m-[auto] pt-[113px] pb-[124px]">
        <div className="text-[#ffffff] w-[56%]">
          <h1 className="text-[25px] lg:text-[36px] text-center font-[600] leading-[30px] lg:leading-[44px] mb-[24px]">
            $SalymbekovContacts2$
          </h1>
          <p className="font-['Inter'] text-[13px] lg:text-[18px] pt-[10px] pb-[10px] font-[400] leading-[20px] lg:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[5px] lg:pl-[20px] ml-[30px] lg:ml-[70px]">
            $SalymbekovContactsContent2$
          </p>
        </div>
      </div>
    </div>
  );
};

export const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SalymbekovContactsContent2$",
    value: "Контактные данные университета Salymbekov, офис компании располагается в Бишкеке",
  },
  {
    key: "$SalymbekovContactsBackground2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/contacts2.png",
  },
  {
    key: "$SalymbekovContacts2$",
    value: "Контакты Salymbekov University",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
