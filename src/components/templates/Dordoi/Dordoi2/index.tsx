import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div
      className="bg-[url('/src/components/common/images/clinicsBG2.png')] bg-cover relative overflow-hidden rounded-b-[50px]"
      {...props}
    >
      <div className="flex justify-center max-w-[90%] w-[100%] m-[auto] pt-[113px] pb-[124px]">
        <div className="text-[#ffffff] not-italic w-[56%]">
          <h1 className="text-[26px] lg:text-[55px] text-center font-[600] leading-[31px] lg:leading-[44px] mb-[24px]">
            $DordoiArticle2$
          </h1>
          <p className="font-['Inter'] text-center text-[13px] lg:text-[27px] font-[400] leading-[28px] lg:leading-[40px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $DordoiMedCenter2$
          </p>
        </div>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$DordoiArticle2$",
    value: "Дордой Офтальмик",
  },
  {
    key: "$DordoiMedCenter2$",
    value:
      "ОсОО Медицинский центр микрохирургии глаза«Дордой-Офтальмик Сервис»",
  },
  {
    key: "$DordoiBGFirst2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/dordoi2.png",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
