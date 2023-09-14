import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[#01018C]" {...props}>
      <div className="pt-[20px] sm:pt-[40px] lg:pt-[74px]">
        <div>
          <h2 className="lg:text-[48px] text-center pb-[20px] text-[17px] font-[600] leading-[20px] lg:leading-[60px] text-[#FFF]">
            $OurPartnersArticle2$
          </h2>
        </div>
        <div className="flex items-center justify-between pb-[20px] sm:pb-[30px] lg:pb-[55px]">
          <div className="w-[30%]">
            <img className="w-full" src="$OurPartnersLine11$" alt="left line" />
          </div>
          <div className="flex justify-center">
            <a href="/partners">
              <button className="w-[164px] lg:w-auto flex items-center justify-center gap-[7px] px-[10px] lg:px-[82px] py-[10px] duration-300 rounded-[50px] border-1 border-solid border-[#E09B3D] bg-[#E09B3D] hover:bg-[#5a68e7]">
                <span className="text-[12px] lg:text-[20px] text-[#FFF] font-[600] leading-[24px]">
                  $OurPartnersButton2$
                </span>
                <img src="$PartnersArrowRight2$" alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="w-[30%]">
            <img className="w-full" src="$OurPartnersLine22$" alt="right line" />
          </div>
        </div>
        <div className="flex justify-between max-w-[400px] m-auto pb-[20px]">
          <div className="lg:hidden">
            <img className="cursor-pointer" src="$PartnersArrowSmall11$" alt="arrow left" />
          </div>
          <div className="lg:hidden">
            <img className="cursor-pointer" src="$PartnersArrowSmall22$" alt="arrow right" />
          </div>
        </div>
        <div className="max-w-[1180px] pb-[20px] sm:pb-[40px] lg:pb-[60px] m-auto flex items-center justify-center gap-[80px]">
          <div className="hidden lg:block">
            <img className="cursor-pointer" src="$PartnersArrow11$" alt="arrow left" />
          </div>

          <div className="flex gap-[15px] lg:gap-[20px] lg:justify-between overflow-x-auto lg:max-w-[920px]">
            <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
              <div className="p-[8px]">
                <img src="$PartnersFoto11$" alt="james cook" />
              </div>
              <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
                $OurPartnersDescFirst2$
              </h3>
              <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
                $OurPartnersDescSecond2$
              </p>
            </div>

            <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
              <div className="p-[8px]">
                <img className="object-fill" src="$PartnersFoto22$" alt="bhms" />
              </div>
              <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc2First2$
              </h3>
              <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc2Second2$
              </p>
            </div>

            <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
              <div className="p-[8px]">
                <img
                  className="object-fill"
                  src="$PartnersFoto33$"
                  alt="medipol second version"
                />
              </div>
              <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc3First2$
              </h3>
              <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
                $OurPartnersDesc3Second2$
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <img className="cursor-pointer" src="$PartnersArrow22$" alt="arrow right" />
          </div>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurPartnersLine11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersline1.png",
    type: "image",
  },
  {
    key: "$OurPartnersArticle2$",
    value: "Партнеры SALYMBEKOV UNIVERSITY",
  },
  {
    key: "$OurPartnersLine22$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersline2.png",
    type: "image",
  },
  {
    key: "$PartnersArrow11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow1.svg",
    type: "image",
  },
  {
    key: "$PartnersArrow22$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow2.svg",
    type: "image",
  },
  {
    key: "$PartnersArrowRight2$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/rightArrowPartners.svg",
    type: "image",
  },
  {
    key: "$PartnersArrowSmall11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow1.svg",
    type: "image",
  },
  {
    key: "$OurPartnersDescFirst2$",
    value: "James Cook University Singapore",
  },
  {
    key: "$OurPartnersDescSecond2$",
    value: "Входит в 2% лучших вузов мира",
  },
  {
    key: "$PartnersArrowSmall22$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow2.svg",
    type: "image",
  },
  {
    key: "$OurPartnersDesc2First2$",
    value: "Business & Hotel Management School",
  },
  {
    key: "$OurPartnersDesc2Second2$",
    value: "Full Speed BA Degree – 18 месяцев обучения + 18 месяцев стажировки",
  },
  {
    key: "$PartnersFoto11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners1.png",
    type: "image",
  },
  {
    key: "$OurPartnersDesc3First2$",
    value: "Medipol Istanbul University",
  },
  {
    key: "$OurPartnersDesc3Second2$",
    value: "Получите два диплома одновременно по программе Double Major",
  },
  {
    key: "$PartnersFoto22$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners2.png",
    type: "image",
  },
  {
    key: "$OurPartnersButton2$",
    value: "Все партнеры",
  },
  {
    key: "$PartnersFoto33$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners3.png",
    type: "image",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
