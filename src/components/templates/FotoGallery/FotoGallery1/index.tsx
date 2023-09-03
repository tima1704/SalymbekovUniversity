import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px] mb-[20px] md:mb-[40px] lg:mb-[80px]" {...props}>
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[50px] md:pt-[80px] lg:pt-[113px] pb-[124px]">
        <div className="text-[#ffffff] w-[56%]">
          <h1 className="text-[25px] md:text-[36px] font-[600] leading-[30px] md:leading-[44px] lg:mb-[24px] lg:whitespace-nowrap">
          $FotoArticle$
          </h1>
          <p className="font-['Inter'] text-[13px] md:text-[18px] font-[400] leading-[20px] md:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
          $FotoUniversity$
          </p>
        </div>
      </div>
      <div>
        <img
          className="hidden md:block absolute bottom-[0] right-[0]"
          src="$FotoGalletyBG$"
          alt="Faculties"
        />
        <img
          className="block md:hidden absolute bottom-[0] right-[0]"
          src="$FotoGalletyBGSmall$"
          alt="Faculties"
        />
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$FotoArticle$",
    value: "Фотографии Salymbekov University",
  },
  {
    key: "$FotoUniversity$",
    value: "Фотографии нашего университета",
  },
  {
    key: "$FotoGalletyBG$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/wallPictures.png",
  },
  {
    key: "$FotoGalletyBGSmall$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/galleryBG.png",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
