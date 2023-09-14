import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px] mb-[20px] md:mb-[40px] lg:mb-[80px] h-[280px] md:h-[360px]" {...props}>
      <div className="flex justify-center max-w-[90%] w-[100%] m-[auto] pt-[50px] md:pt-[87px] pb-[80px] md:pb-[124px]">
        <div className="text-[#FFF] flex flex-col">
          <h1 className="text-[25px] lg:text-[36px] lg:pr-[70px] font-[600] leading-[30px] md:leading-[44px] lg:mb-[24px]">
            $FotoArticle3$
          </h1>
          <div className="flex items-center justify-center pr-[20px]">
            <div className="w-[4px] h-[40px] lg:h-[57px] bg-[#FFF] rounded-[4px]">
              |
            </div>
            <p className="font-['Inter']text-[27px] font-[400] lg:leading-[35px] rounded-[2px] pl-[20px]">
              $FotoUniversity3$
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="hidden md:block absolute bottom-[0] right-[0] w-full h-full"
          src="$FotoGalletyBG3$"
          alt="Faculties"
        />
        <img
          className="block md:hidden absolute bottom-[0] right-[0]"
          src="$FotoGalletyBG3Small$"
          alt="Faculties"
        />
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$FotoArticle3$",
    value: "Фотографии Salymbekov University",
  },
  {
    key: "$FotoUniversity3$",
    value: "Фотографии нашего университета",
  },
  {
    key: "$FotoGalletyBG3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/Foto3.png",
  },
  {
    key: "$FotoGalletyBG3Small$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/FotoSmall.png",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
