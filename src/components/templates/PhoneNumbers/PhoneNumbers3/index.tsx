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
          $PhoneOurLocation3$
        </h2>
        <div>
          <div className="bg-[#34A853] flex rounded-t-[10px]">
            <div className="flex gap-[10px] items-center justify-center px-[80px] lg:px-[120px] border-r-[1px] border-[#D3D4DB]">
              <p className="text-[#FFF] font-['Inter'] text-[14px] lg:text-[16px] font-[600] leading-[24px]">
                $PhoneWhatsApp3$
              </p>
              <img src="$PhoneWhatsAppIcon3$" alt="whatsapp icon" />
            </div>
            <div>
              <p className="text-[#FFF] font-['Inter'] text-[14px] lg:text-[16px] font-[600] leading-[24px] py-[10px] lg:py-[20px] px-[100px] lg:px-[150px]">
                $PhoneWhatsAppNumber3$
              </p>
            </div>
          </div>
          <div className="bg-[#3AA0FF] flex rounded-b-[10px]">
            <div className="flex gap-[10px] items-center justify-center px-[80px] lg:px-[124px] border-r-[1px] border-[#D3D4DB]">
              <p className="text-[#FFF] font-['Inter'] text-[16px] font-[600] leading-[24px]">
                $PhoneTelegram3$
              </p>
              <img src="$PhoneTelegramIcon3$" alt="telegram icon" />
            </div>
            <div>
              <p className="text-[#FFF] font-['Inter'] text-[14px] lg:text-[16px] font-[600] leading-[24px] py-[10px] lg:py-[20px] px-[100px] lg:px-[150px]">
                $PhoneTelegramNumber3$
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-[20px] items-center">
        <h2 className="text-[#202124] text-[20px] font-[600] leading-[30px]">
          $PhoneNumberArticle3$
        </h2>
        <div>
          <div className="flex flex-col">
            <div className="pb-[20px] flex gap-[14px] items-center">
              <button className="flex gap-[10px] bg-[#34A853] items-center justify-center px-[20px] py-[10px] rounded-[10px] border-r-[1px] border-[#D3D4DB]">
                <p className="text-[#FFF] font-['Inter'] pl-[30px] text-[16px] font-[600] leading-[24px]">
                  $PhoneWhatsAppSmall3$
                </p>
                <img
                  className="pr-[30px]"
                  src="$PhoneWhatsAppIconSmall3$"
                  alt="whatsapp icon"
                />
              </button>
              <p className="font-['Inter'] font-[600] text-[16px] leading-[23px]">
                $PhoneWhatsAppNumberSmall3$
              </p>
            </div>
            <div className="pb-[20px] flex gap-[14px] items-center">
              <button className="flex gap-[20px] bg-[#3AA0FF] items-center justify-center px-[20px] py-[10px] rounded-[10px] border-r-[1px] border-[#D3D4DB]">
                <p className="text-[#FFF] font-['Inter'] pl-[30px] text-[16px] font-[600] leading-[24px]">
                  $PhoneTelegramSmall3$
                </p>
                <img
                  className="pr-[30px]"
                  src="$PhoneTelegramIconSmall3$"
                  alt="whatsapp icon"
                />
              </button>
              <p className="font-['Inter'] font-[600] text-[16px] leading-[23px]">
                $PhoneTelegramNumberSmall3$
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
    key: "$PhoneOurLocation3$",
    value: "Где мы находимся",
  },
  {
    key: "$PhoneWhatsApp3$",
    value: "WhatsApp",
  },
  {
    key: "$PhoneWhatsAppIcon3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whiteWhatsApp.svg",
  },
  {
    key: "$PhoneWhatsAppNumber3$",
    value: "+996 773 999-999",
  },
  {
    key: "$PhoneTelegram3$",
    value: "Telegram",
  },
  {
    key: "$PhoneTelegramIcon3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whiteTelegram.svg",
  },
  {
    key: "$PhoneTelegramNumber3$",
    value: "+996 773 999-999",
  },
  {
    key: "$PhoneNumberArticle3$",
    value: "Телефонные номера",
  },
  {
    key: "$PhoneWhatsAppSmall3$",
    value: "WhatsApp",
  },
  {
    key: "$PhoneWhatsAppIconSmall3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whiteWhatsApp.svg",
  },
  {
    key: "$PhoneWhatsAppNumberSmall3$",
    value: "+996 773 999-999",
  },
  {
    key: "$PhoneTelegramSmall3$",
    value: "Telegram",
  },
  {
    key: "$PhoneTelegramIconSmall3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whiteTelegram.svg",
  },
  {
    key: "$PhoneTelegramNumberSmall3$",
    value: "+996 773 999-999",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
