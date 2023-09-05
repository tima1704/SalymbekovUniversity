import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div
      className="bg-[url('$FotoGalletyBG2$')] bg-center bg-cover relative rounded-b-[50px] mb-[20px] md:mb-[40px] lg:mb-[80px]"
      {...props}
    >
      <div className="flex justify-center max-w-[1030px] m-[auto] pt-[113px] pb-[124px]">
        <div className="text-[#FFF]">
          <h1 className="text-[25px] lg:text-[45px] xl:text-[55px] font-[600] leading-[30px] lg:leading-[44px] mb-[24px]  whitespace-nowrap">
            $FotoArticle2$
          </h1>
          <p className="font-['Inter']text-[27px] font-[400] lg:leading-[35px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $FotoUniversity2$
          </p>
        </div>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$FotoGalletyBG2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/fotoBG.png",
  },
  {
    key: "$FotoArticle2$",
    value: "Фотогалерея Salymbekov University",
  },
  {
    key: "$FotoUniversity2$",
    value: "Фотографии нашего университета",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
