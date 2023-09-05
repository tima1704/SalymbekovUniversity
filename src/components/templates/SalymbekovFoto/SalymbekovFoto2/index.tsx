import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from "swiper/element/bundle";
register();

const Layout = ({ ...props }) => {
  return (
    <div className="w-[90%] lg:max-w-[1180px] m-auto" {...props}>
      <h2 className="text-[#202124] text-[20px] lg:text-[28px] font-[600] leading-[30px] lg:leading-[36px] text-center pb-[20px] lg:pb-[40px]">
        Фотографии SALYMBEKOV UNIVERSITY
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="SalymbekovFotoSlider2">
          <swiper-slide>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[17px]">
                <div>
                  <img src="$SalymbekovFoto11$" alt="library" />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <img src="$SalymbekovFoto22$" alt="auditory" />
                  <img src="$SalymbekovFoto33$" alt="castle" />
                </div>
              </div>
              <div>
                <img src="$SalymbekovFoto44$" alt="bitCastle" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[17px]">
                <div>
                  <img src="$SalymbekovFoto55$" alt="library" />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <img src="$SalymbekovFoto66$" alt="auditory" />
                  <img src="$SalymbekovFoto77$" alt="castle" />
                </div>
              </div>
              <div>
                <img src="$SalymbekovFoto88$" alt="bitCastle" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[17px]">
                <div>
                  <img src="$SalymbekovFoto99$" alt="library" />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <img src="$SalymbekovFoto101$" alt="auditory" />
                  <img src="$SalymbekovFoto112$" alt="castle" />
                </div>
              </div>
              <div>
                <img src="$SalymbekovFoto122$" alt="bitCastle" />
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SalymbekovFoto11$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/library.png",
  },
  {
    key: "$SalymbekovFoto22$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/auditory.png",
  },
  {
    key: "$SalymbekovFoto33$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castle.png",
  },
  {
    key: "$SalymbekovFoto44$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castleBit.png",
  },
  {
    key: "$SalymbekovFoto55$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/library.png",
  },
  {
    key: "$SalymbekovFoto66$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/auditory.png",
  },
  {
    key: "$SalymbekovFoto77$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castle.png",
  },
  {
    key: "$SalymbekovFoto88$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castleBit.png",
  },
  {
    key: "$SalymbekovFoto99$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/library.png",
  },
  {
    key: "$SalymbekovFoto101$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/auditory.png",
  },
  {
    key: "$SalymbekovFoto112$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castle.png",
  },
  {
    key: "$SalymbekovFoto122$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castleBit.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "SalymbekovFotoSlider2",
    func: {
      type: "swiper",
      swiperParams: {
        pagination: "true",
        spaceBetween: "17",
      },
    },
  },
];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
