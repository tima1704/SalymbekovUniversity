import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div id="phones" {...props}>
      <div className="hidden mt-[80px] md:flex flex-col items-start sm:pl-[10%] lg:pl-[20%] mb-[80px] max-w-[90%] lg:max-w-[1080px]">
        <h2 className="text-[#202124] text-start text-[28px] font-[600] leading-[36px] mb-[40px]">
          $PhoneOurLocation2$
        </h2>
        <div>
          <div className="bg-[#34A853] flex rounded-t-[10px]">
            <div className="flex gap-[10px] items-center justify-center px-[80px] lg:px-[120px] border-r-[1px] border-[#D3D4DB]">
              <p className="text-[#FFF] font-['Inter'] text-[14px] lg:text-[16px] font-[600] leading-[24px]">
                $PhoneWhatsApp2$
              </p>
              <img src="$PhoneWhatsAppIcon2$" alt="whatsapp icon" />
            </div>
            <div>
              <p className="text-[#FFF] font-['Inter'] text-[14px] lg:text-[16px] font-[600] leading-[24px] py-[10px] lg:py-[20px] px-[100px] lg:px-[150px]">
                $PhoneWhatsAppNumber2$
              </p>
            </div>
          </div>
          <div className="bg-[#3AA0FF] flex rounded-b-[10px]">
            <div className="flex gap-[10px] items-center justify-center px-[80px] lg:px-[124px] border-r-[1px] border-[#D3D4DB]">
              <p className="text-[#FFF] font-['Inter'] text-[16px] font-[600] leading-[24px]">
                $PhoneTelegram2$
              </p>
              <img src="$PhoneTelegramIcon2$" alt="telegram icon" />
            </div>
            <div>
              <p className="text-[#FFF] font-['Inter'] text-[14px] lg:text-[16px] font-[600] leading-[24px] py-[10px] lg:py-[20px] px-[100px] lg:px-[150px]">
                $PhoneTelegramNumber2$
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-[20px] items-center">
        <h2 className="text-[#202124] text-[20px] font-[600] leading-[30px]">
          $PhoneNumberArticle2$
        </h2>
        <div>
          <div className="flex flex-col">
            <div className="pb-[20px] flex gap-[14px] items-center">
              <button className="flex gap-[10px] bg-[#34A853] items-center justify-center px-[20px] py-[10px] rounded-[10px] border-r-[1px] border-[#D3D4DB]">
                <p className="text-[#FFF] font-['Inter'] pl-[30px] text-[16px] font-[600] leading-[24px]">
                  $PhoneWhatsAppSmall2$
                </p>
                <img
                  className="pr-[30px]"
                  src="$PhoneWhatsAppIconSmall2$"
                  alt="whatsapp icon"
                />
              </button>
              <p className="font-['Inter'] font-[600] text-[16px] leading-[23px]">
                $PhoneWhatsAppNumberSmall2$
              </p>
            </div>
            <div className="pb-[20px] flex gap-[14px] items-center">
              <button className="flex gap-[20px] bg-[#3AA0FF] items-center justify-center px-[20px] py-[10px] rounded-[10px] border-r-[1px] border-[#D3D4DB]">
                <p className="text-[#FFF] font-['Inter'] pl-[30px] text-[16px] font-[600] leading-[24px]">
                  $PhoneTelegramSmall2$
                </p>
                <img
                  className="pr-[30px]"
                  src="$PhoneTelegramIconSmall2$"
                  alt="whatsapp icon"
                />
              </button>
              <p className="font-['Inter'] font-[600] text-[16px] leading-[23px]">
                $PhoneTelegramNumberSmall2$
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$PhoneOurLocation2$",
    value: "Где мы находимся",
  },
  {
    key: "$PhoneWhatsApp2$",
    value: "WhatsApp",
  },
  {
    key: "$PhoneWhatsAppIcon2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whatsapp.svg",
  },
  {
    key: "$PhoneWhatsAppNumber2$",
    value: "+996 773 999-999",
  },
  {
    key: "$PhoneTelegram2$",
    value: "Telegram",
  },
  {
    key: "$PhoneTelegramIcon2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telagram.svg",
  },
  {
    key: "$PhoneTelegramNumber2$",
    value: "+996 773 999-999",
  },
  {
    key: "$PhoneNumberArticle2$",
    value: "Телефонные номера",
  },
  {
    key: "$PhoneWhatsAppSmall2$",
    value: "WhatsApp",
  },
  {
    key: "$PhoneWhatsAppIconSmall2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whatsapp.svg",
  },
  {
    key: "$PhoneWhatsAppNumberSmall2$",
    value: "+996 773 999-999",
  },
  {
    key: "$PhoneTelegramSmall2$",
    value: "Telegram",
  },
  {
    key: "$PhoneTelegramIconSmall2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telagram.svg",
  },
  {
    key: "$PhoneTelegramNumberSmall2$",
    value: "+996 773 999-999",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
