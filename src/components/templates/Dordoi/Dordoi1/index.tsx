import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px]" {...props}>
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[40px] md:pt-[80px] lg:pt-[113px] pb-[124px]">
        <div className="text-[#ffffff] w-[56%]">
          <h1 className="text-[26px] lg:text-[36px] font-[600] leading-[31px] lg:leading-[44px] mb-[24px]">
          $DordoiArticle$
          </h1>
          <p className="font-['Inter'] text-[13px] lg:text-[18px] font-[400] leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $DordoiMedCenter$
          </p>
        </div>
      </div>
      <div>
        <img
          className="hidden md:block absolute bottom-[0] right-[0]"
          src="$DordoiBGFirst$"
          alt="Faculties"
        />
        <img
          className="block md:hidden absolute bottom-[0] right-[0]"
          src="$DordoiBGFirstSmall$"
          alt="Faculties"
        />
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$DordoiArticle$",
    value: "Дордой Офтальмик",
  },
  {
    key: "$DordoiMedCenter$",
    value: "ОсОО Медицинский центр микрохирургии глаза«Дордой-Офтальмик Сервис»",
  },
  {
    key: "$DordoiBGFirst$",
    type: 'image',
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/dordoi1.png",
  },
  {
    key: "$DordoiBGFirstSmall$",
    type: 'image',
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/dordoiSmall.png",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
