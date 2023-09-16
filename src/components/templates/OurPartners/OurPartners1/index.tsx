import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[#01018C]" {...props}>
      <div className="pt-[20px] smpt-[40px] lg:pt-[74px]">
        <div className="flex items-center justify-between pb-[20px] sm:pb-[35px] lg:pb-[55px]">
          <div className="w-[13%]">
            <img className="w-full" src="$OurPartnersLine1$" alt="left line" />
          </div>
          <div className="max-w-[945px]">
            <h2 className="lg:text-[48px] text-[17px] font-[600] leading-[20px] lg:leading-[60px] text-[#FFF]">
              $OurPartnersArticle1$
            </h2>
          </div>
          <div className="w-[13%]">
            <img className="w-full" src="$OurPartnersLine2$" alt="right line" />
          </div>
        </div>
        <div className="flex justify-between max-w-[400px] m-auto pb-[20px]">
          <div className="lg:hidden">
            <img
              className="cursor-pointer"
              src="$PartnersArrowSmall1$"
              alt="arrow left"
            />
          </div>
          <div className="lg:hidden">
            <img
              className="cursor-pointer"
              src="$PartnersArrowSmall2$"
              alt="arrow right"
            />
          </div>
        </div>
        <div className="max-w-[1180px] m-auto flex items-center justify-center gap-[80px]">
          <div className="hidden lg:block">
            <img
              className="cursor-pointer"
              src="$PartnersArrow1$"
              alt="arrow left"
            />
          </div>

          <div className="flex gap-[15px] lg:gap-[20px] lg:justify-between lg:max-w-[920px]">
            <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
              <div className="p-[8px]">
                <img
                  className="h-[100px] lg:h-[100%]"
                  src="$PartnersFoto1$"
                  alt="james cook"
                />
              </div>
              <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
                $OurPartnersDescFirst$
              </h3>
              <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
                $OurPartnersDescSecond$
              </p>
            </div>

            <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
              <div className="p-[8px]">
                <img
                  className="h-[70px] lg:h-[100%]"
                  src="$PartnersFoto2$"
                  alt="bhms"
                />
              </div>
              <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc2First$
              </h3>
              <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc2Second$
              </p>
            </div>

            <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
              <div className="p-[8px]">
                <img
                  className="h-[70px] lg:h-[100%]"
                  src="$PartnersFoto3$"
                  alt="medipol second version"
                />
              </div>
              <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc3First$
              </h3>
              <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc3Second$
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              className="cursor-pointer"
              src="$PartnersArrow2$"
              alt="arrow right"
            />
          </div>
        </div>

        <div className="pt-[20px] sm:pt-[40px] lg:pt-[69px] pb-[20px] sm:pb-[40px] lg:pb-[62px] flex justify-center">
          <a href="/partners">
            <button className="w-[164px] lg:w-auto flex items-center justify-center gap-[7px] px-[10px] lg:px-[82px] py-[10px] duration-300 rounded-[50px] border-1 border-solid border-[#E09B3D] bg-[#E09B3D] hover:bg-[#5a68e7]">
              <span className="text-[12px] lg:text-[20px] text-[#FFF] font-[600] leading-[24px]">
                $OurPartnersButton$
              </span>
              <img src="$PartnersArrowRight1$" alt="Arrow" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurPartnersLine1$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersline1.png",
    type: "image",
  },
  {
    key: "$OurPartnersArticle1$",
    value: "Партнеры SALYMBEKOV UNIVERSITY",
  },
  {
    key: "$OurPartnersLine2$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersline2.png",
    type: "image",
  },
  {
    key: "$PartnersArrow1$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow1.svg",
    type: "image",
  },
  {
    key: "$PartnersArrow2$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow2.svg",
    type: "image",
  },
  {
    key: "$PartnersArrowRight1$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/rightArrowPartners.svg",
    type: "image",
  },
  {
    key: "$PartnersArrowSmall1$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow1.svg",
    type: "image",
  },
  {
    key: "$OurPartnersDescFirst$",
    value: "James Cook University Singapore",
  },
  {
    key: "$OurPartnersDescSecond$",
    value: "Входит в 2% лучших вузов мира",
  },
  {
    key: "$PartnersArrowSmall2$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow2.svg",
    type: "image",
  },
  {
    key: "$OurPartnersDesc2First$",
    value: "Business & Hotel Management School",
  },
  {
    key: "$OurPartnersDesc2Second$",
    value: "Full Speed BA Degree – 18 месяцев обучения + 18 месяцев стажировки",
  },
  {
    key: "$PartnersFoto1$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners1.png",
    type: "image",
  },
  {
    key: "$OurPartnersDesc3First$",
    value: "Medipol Istanbul University",
  },
  {
    key: "$OurPartnersDesc3Second$",
    value: "Получите два диплома одновременно по программе Double Major",
  },
  {
    key: "$PartnersFoto2$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners2.png",
    type: "image",
  },
  {
    key: "$OurPartnersButton$",
    value: "Все партнеры",
  },
  {
    key: "$PartnersFoto3$",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners3.png",
    type: "image",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
