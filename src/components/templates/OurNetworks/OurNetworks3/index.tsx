import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section
      className="bg-[url('/src/components/common/images/paper_bg.jpg')]"
      {...props}
    >
      <div className="max-w-[90%] xl:max-w-[1140px] m-auto">
        <div className="hidden lg:flex items-center pl-[16px]">
          <div className="ml-[16px] py-[100px] max-w-[680px]">
            <h2 className="text-[#0A0A0A] text-center text-[36px] font-[600] leading-[44px] mb-[15px]">
              $OurNetworksArticle3$
            </h2>
            <p className="text-[#0A0A0A] text-center text-[20px] font-[400] leading-[24px] mb-[15px] pr-[10px]">
              $OurNetworksDescOne3$
            </p>
            <p className="text-[#0A0A0A] text-center text-[30px] font-[600] leading-[30px]">
              $OurNetworksDescTwo3$
            </p>
            <div className="flex justify-center gap-[12px] mt-[37px]">
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#D50E0E] bg-[#D50E0E] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescThree3$
                <img src="$PartnersYoutube111$" alt="youtube" />
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#3AA0FF] bg-[#3AA0FF] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescFour3$
                <img src="$PartnersTelegram111$" alt="telegram" />
              </button>
            </div>
          </div>
          <div>
            <img className="w-full" src="$NetworksPhone111$" alt="phone" />
          </div>
        </div>
        <div className="py-[20px] block m-auto max-w-[90%] lg:hidden">
          <h2 className="text-[#0A0A0A] text-[36px] font-[600] leading-[44px] mb-[15px]">
            $OurNetworks2Article3$
          </h2>
          <div className="">
            <img className="w-full" src="$NetworksPhoneSmall111$" alt="phone" />
          </div>
          <div className="flex items-center gap-[18px] pt-[20px]">
            <p className="text-center text-[15px] font-[400] leading-[22px]">
              $OurNetworksDescFive3$
            </p>
            <div className="flex flex-col gap-[17px] mt-[37px]">
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#D50E0E] bg-[#D50E0E] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescSix3$
                <img src="$PartnersYoutubeSmall111$" alt="youtube" />
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#3AA0FF] bg-[#3AA0FF] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescSeven3$
                <img src="$PartnersTelegramSmall111$" alt="telegram" />
              </button>
            </div>
          </div>
          <p className="pt-[20px] text-center text-[15px] font-[400] leading-[22px]">
            $OurNetworksDescEight3$
          </p>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurNetworksArticle3$",
    value: "Мы в социальных сетях",
  },
  {
    key: "$OurNetworksDescOne3$",
    value:
      "На нашем YouTube-канале регулярно выходят пошаговые гайды, подборки вузов и обзорные видео об образовании за границей. Также мы постоянно делимся новостями, советами менторов и историями наших студентов в Telegram.",
  },
  {
    key: "$OurNetworksDescTwo3$",
    value: "Подписывайтесь!",
  },
  {
    key: "$OurNetworksDescThree3$",
    value: "YouTube",
  },
  {
    key: "$NetworksPhone111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/phone.png",
    type: "image",
  },
  {
    key: "$OurNetworksDescFour3$",
    value: "Telegram",
  },
  {
    key: "$PartnersYoutube111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$PartnersTelegram111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telegramMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworks2Article3$",
    value: "Мы в социальных сетях",
  },
  {
    key: "$PartnersYoutubeSmall111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescFive3$",
    value:
      "На нашем YouTube-канале регулярно выходят пошаговые гайды, подборки вузов и обзорные видео об образовании за границей.",
  },
  {
    key: "$OurNetworksDescSix3$",
    value: "YouTube",
  },
  {
    key: "$PartnersTelegramSmall111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telegramMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescSeven3$",
    value: "Telegram",
  },
  {
    key: "$NetworksPhoneSmall111$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/phone.png",
    type: "image",
  },
  {
    key: "$OurNetworksDescEight3$",
    value:
      "Также мы постоянно делимся новостями, советами менторов и историями наших студентов в Telegram.",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
