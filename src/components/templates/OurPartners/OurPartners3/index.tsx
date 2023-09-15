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
            $OurPartnersArticle3$
          </h2>
        </div>
        <div className="flex items-center justify-between pb-[20px] sm:pb-[30px] lg:pb-[55px]">
          <div className="w-[30%]">
            <img className="w-full" src="$OurPartnersLine111$" alt="left line" />
          </div>
          <div className="flex justify-center">
            <a href="/partners">
              <button className="w-[164px] lg:w-auto flex items-center justify-center gap-[7px] px-[10px] lg:px-[82px] py-[10px] duration-300 rounded-[50px] border-1 border-solid border-[#E09B3D] bg-[#E09B3D] hover:bg-[#5a68e7]">
                <span className="text-[12px] lg:text-[20px] text-[#FFF] font-[600] leading-[24px]">
                  $OurPartnersButton3$
                </span>
                <img src="$PartnersArrowRight3$" alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="w-[30%]">
            <img className="w-full" src="$OurPartnersLine222$" alt="right line" />
          </div>
        </div>

        <div className="flex justify-center pb-[20px] gap-[15px] lg:gap-[20px] lg:justify-between px-10">
          <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
            <div className="p-[8px]">
              <img className="h-[100px] lg:h-[100%]" src="$PartnersFoto111$" alt="james cook" />
            </div>
            <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
              $OurPartnersDescFirst3$
            </h3>
            <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
              $OurPartnersDescSecond3$
            </p>
          </div>

          <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
            <div className="p-[8px]">
              <img className="h-[70px] lg:h-[100%]" src="$PartnersFoto222$" alt="bhms" />
            </div>
            <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
              $OurPartnersDesc2First3$
            </h3>
            <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
              $OurPartnersDesc2Second3$
            </p>
          </div>

          <div className="flex p-[5px] bg-[#FFF] w-[170px] h-[180px] lg:h-auto lg:w-[32%] cursor-pointer flex-col justify-center items-center rounded-[12px] lg:pt-[16px] lg:pb-[40px] lg:pl-[28px] lg:pr-[27px] text-center">
            <div className="p-[8px]">
              <img
                className="h-[70px] lg:h-[100%]"
                src="$PartnersFoto333$"
                alt="medipol second version"
              />
            </div>
            <h3 className="text-[#202124] text-[12px] lg:text-[16px] font-[600] leading-[17px] lg:leading-[24px]">
              $OurPartnersDesc3First3$
            </h3>
            <p className="text-[#202124] text-[12px] lg:text-[16px] font-['Inter'] font-[400] leading-[17px] lg:leading-[24px]">
              $OurPartnersDesc3Second3$
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-center gap-[100px] pb-[30px]">
          <div>
            <img className="cursor-pointer" src="$PartnersArrow111$" alt="arrow left" />
          </div>
          <div>
            <img className="cursor-pointer" src="$PartnersArrow222$" alt="arrow right" />
          </div>
        </div>

        <div className="flex justify-between max-w-[400px] m-auto pb-[20px]">
          <div className="lg:hidden">
            <img className="cursor-pointer" src="$PartnersArrowSmall111$" alt="arrow left" />
          </div>
          <div className="lg:hidden">
            <img className="cursor-pointer" src="$PartnersArrowSmall222$" alt="arrow right" />
          </div>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurPartnersLine111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersline1.png",
    type: "image",
  },
  {
    key: "$OurPartnersArticle3$",
    value: "Партнеры SALYMBEKOV UNIVERSITY",
  },
  {
    key: "$OurPartnersLine222$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersline2.png",
    type: "image",
  },
  {
    key: "$PartnersArrow111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow1.svg",
    type: "image",
  },
  {
    key: "$PartnersArrow222$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow2.svg",
    type: "image",
  },
  {
    key: "$PartnersArrowRight3$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/rightArrowPartners.svg",
    type: "image",
  },
  {
    key: "$PartnersArrowSmall111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow1.svg",
    type: "image",
  },
  {
    key: "$OurPartnersDescFirst3$",
    value: "James Cook University Singapore",
  },
  {
    key: "$OurPartnersDescSecond3$",
    value: "Входит в 2% лучших вузов мира",
  },
  {
    key: "$PartnersArrowSmall222$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/partnersArrow2.svg",
    type: "image",
  },
  {
    key: "$OurPartnersDesc2First3$",
    value: "Business & Hotel Management School",
  },
  {
    key: "$OurPartnersDesc2Second3$",
    value: "Full Speed BA Degree – 18 месяцев обучения + 18 месяцев стажировки",
  },
  {
    key: "$PartnersFoto111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners1.png",
    type: "image",
  },
  {
    key: "$OurPartnersDesc3First3$",
    value: "Medipol Istanbul University",
  },
  {
    key: "$OurPartnersDesc3Second3$",
    value: "Получите два диплома одновременно по программе Double Major",
  },
  {
    key: "$PartnersFoto222$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ourPartners2.png",
    type: "image",
  },
  {
    key: "$OurPartnersButton3$",
    value: "Все партнеры",
  },
  {
    key: "$PartnersFoto333$",
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
