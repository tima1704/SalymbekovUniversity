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
          <div>
            <img className="w-full" src="$NetworksPhone11$" alt="phone" />
          </div>

          <div className="ml-[16px] py-[100px] max-w-[680px]">
            <h2 className="text-[#0A0A0A] text-[36px] text-end font-[600] leading-[44px] mb-[15px]">
              $OurNetworksArticle2$
            </h2>
            <p className="text-[#0A0A0A] text-end text-[20px] font-[400] leading-[24px] mb-[15px] pr-[10px]">
              $OurNetworksDescOne2$
            </p>
            <p className="text-[#0A0A0A] text-end text-[30px] font-[600] leading-[30px]">
              $OurNetworksDescTwo2$
            </p>
            <div className="flex justify-end gap-[12px] mt-[37px]">
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#D50E0E] bg-[#D50E0E] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescThree2$
                <img src="$PartnersYoutube11$" alt="youtube" />
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#3AA0FF] bg-[#3AA0FF] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescFour2$
                <img src="$PartnersTelegram11$" alt="telegram" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-[20px] block m-auto max-w-[90%] lg:hidden">
          <h2 className="text-[#0A0A0A] text-[36px] font-[600] leading-[44px] mb-[15px]">
            $OurNetworks2Article2$
          </h2>
          <div className="">
            <img className="w-full" src="$NetworksPhoneSmall11$" alt="phone" />
          </div>
          <div className="flex items-center gap-[18px] pt-[20px]">
            <p className="text-center text-[15px] font-[400] leading-[22px]">
              $OurNetworksDescFive2$
            </p>
            <div className="flex flex-col gap-[17px] mt-[37px]">
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#D50E0E] bg-[#D50E0E] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescSix2$
                <img src="$PartnersYoutubeSmall11$" alt="youtube" />
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#3AA0FF] bg-[#3AA0FF] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescSeven2$
                <img src="$PartnersTelegramSmall11$" alt="telegram" />
              </button>
            </div>
          </div>
          <p className="pt-[20px] text-center text-[15px] font-[400] leading-[22px]">
            $OurNetworksDescEight2$
          </p>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurNetworksArticle2$",
    value: "Мы в социальных сетях",
  },
  {
    key: "$OurNetworksDescOne2$",
    value:
      "На нашем YouTube-канале регулярно выходят пошаговые гайды, подборки вузов и обзорные видео об образовании за границей. Также мы постоянно делимся новостями, советами менторов и историями наших студентов в Telegram.",
  },
  {
    key: "$OurNetworksDescTwo2$",
    value: "Подписывайтесь!",
  },
  {
    key: "$OurNetworksDescThree2$",
    value: "YouTube",
  },
  {
    key: "$NetworksPhone11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/phone.png",
    type: "image",
  },
  {
    key: "$OurNetworksDescFour2$",
    value: "Telegram",
  },
  {
    key: "$PartnersYoutube11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworks2Article2$",
    value: "Мы в социальных сетях",
  },
  {
    key: "$PartnersTelegram11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telegramMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescFive2$",
    value:
      "На нашем YouTube-канале регулярно выходят пошаговые гайды, подборки вузов и обзорные видео об образовании за границей.",
  },
  {
    key: "$OurNetworksDescSix2$",
    value: "YouTube",
  },
  {
    key: "$PartnersYoutubeSmall11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescSeven2$",
    value: "Telegram",
  },
  {
    key: "$NetworksPhoneSmall11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/phone.png",
    type: "image",
  },
  {
    key: "$PartnersYoutubeSmall11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$PartnersTelegramSmall11$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telegramMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescEight2$",
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
