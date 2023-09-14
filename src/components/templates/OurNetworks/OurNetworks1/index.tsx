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
            <h2 className="text-[#0A0A0A] text-[36px] font-[600] leading-[44px] mb-[15px]">
              $OurNetworksArticle1$
            </h2>
            <p className="text-[#0A0A0A] text-[20px] font-[400] leading-[24px] mb-[15px] pr-[10px]">
              $OurNetworksDescOne$
            </p>
            <p className="text-[#0A0A0A] text-[30px] font-[600] leading-[30px]">
              $OurNetworksDescTwo$
            </p>

            <div className="flex gap-[12px] mt-[37px]">
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#D50E0E] bg-[#D50E0E] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescThree$
                <img src="$PartnersYoutube1$" alt="youtube" />
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#3AA0FF] bg-[#3AA0FF] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescFour$
                <img src="$PartnersTelegram1$" alt="telegram" />
              </button>
            </div>
          </div>

          <div className="">
            <img className="w-full" src="$NetworksPhone1$" alt="phone" />
          </div>
        </div>

        <div className="py-[20px] block m-auto max-w-[90%] lg:hidden">
          <h2 className="text-[#0A0A0A] text-[36px] font-[600] leading-[44px] mb-[15px]">
            $OurNetworks2Article1$
          </h2>
          <div className="">
            <img className="w-full" src="$NetworksPhoneSmall1$" alt="phone" />
          </div>
          <div className="flex items-center gap-[18px] pt-[20px]">
            <p className="text-center text-[15px] font-[400] leading-[22px]">
              $OurNetworksDescFive$
            </p>
            <div className="flex flex-col gap-[17px] mt-[37px]">
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#D50E0E] bg-[#D50E0E] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescSix$
                <img src="$PartnersYoutubeSmall1$" alt="youtube" />
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[10px] px-[41px] rounded-[8px] border-1 border-solid border-[#3AA0FF] bg-[#3AA0FF] text-[#FFF] font-[500] hover:bg-[#5a68e7] duration-500">
                $OurNetworksDescSeven$
                <img src="$PartnersTelegramSmall1$" alt="telegram" />
              </button>
            </div>
          </div>
          <p className="pt-[20px] text-center text-[15px] font-[400] leading-[22px]">
            $OurNetworksDescEight$
          </p>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurNetworksArticle1$",
    value: "Мы в социальных сетях",
  },
  {
    key: "$OurNetworksDescOne$",
    value:
      "На нашем YouTube-канале регулярно выходят пошаговые гайды, подборки вузов и обзорные видео об образовании за границей. Также мы постоянно делимся новостями, советами менторов и историями наших студентов в Telegram.",
  },
  {
    key: "$OurNetworksDescTwo$",
    value: "Подписывайтесь!",
  },
  {
    key: "$OurNetworksDescThree$",
    value: "YouTube",
  },
  {
    key: "$NetworksPhone1$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/phone.png",
    type: "image",
  },
  {
    key: "$OurNetworksDescFour$",
    value: "Telegram",
  },
  {
    key: "$PartnersYoutube1$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescFive$",
    value:
      "На нашем YouTube-канале регулярно выходят пошаговые гайды, подборки вузов и обзорные видео об образовании за границей.",
  },
  {
    key: "$OurNetworks2Article1$",
    value: "Мы в социальных сетях",
  },
  {
    key: "$OurNetworksDescSix$",
    value: "YouTube",
  },
  {
    key: "$PartnersTelegram1$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telegramMain.svg",
    type: "image",
  },
  {
    key: "$OurNetworksDescSeven$",
    value: "Telegram",
  },
  {
    key: "$PartnersYoutubeSmall1$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtubeMain.svg",
    type: "image",
  },
  {
    key: "$PartnersTelegramSmall1$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telegramMain.svg",
    type: "image",
  },
  {
    key: "$NetworksPhoneSmall1$",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/phone.png",
    type: "image",
  },
  {
    key: "$OurNetworksDescEight$",
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
