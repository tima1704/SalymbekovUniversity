import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from 'swiper/element/bundle';
register()

const Layout = ({ ...props }) => {
  return (
    <div className="w-[90%] lg:max-w-[1180px] m-auto" {...props}>
      <h2 className="text-[#202124] text-[20px] lg:text-[28px] font-[600] leading-[30px] lg:leading-[36px] text-center pb-[20px] lg:pb-[40px]">
        Фотографии SALYMBEKOV UNIVERSITY
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="SalymbekovFotoSlider1">
          <swiper-slide>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[17px]">
                <div>
                  <img
                    src="$SalymbekovFoto1$"
                    alt="library"
                  />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <img
                    src="$SalymbekovFoto2$"
                    alt="auditory"
                  />
                  <img
                    src="$SalymbekovFoto3$"
                    alt="castle"
                  />
                </div>
              </div>
              <div>
                <img
                  src="$SalymbekovFoto4$"
                  alt="bitCastle"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[17px]">
                <div>
                  <img
                    src="$SalymbekovFoto5$"
                    alt="library"
                  />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <img
                    src="$SalymbekovFoto6$"
                    alt="auditory"
                  />
                  <img
                    src="$SalymbekovFoto7$"
                    alt="castle"
                  />
                </div>
              </div>
              <div>
                <img
                  src="$SalymbekovFoto8$"
                  alt="bitCastle"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[17px]">
                <div>
                  <img
                    src="$SalymbekovFoto9$"
                    alt="library"
                  />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <img
                    src="$SalymbekovFoto10$"
                    alt="auditory"
                  />
                  <img
                    src="$SalymbekovFoto11$"
                    alt="castle"
                  />
                </div>
              </div>
              <div>
                <img
                  src="$SalymbekovFoto12$"
                  alt="bitCastle"
                />
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
    key: "$SalymbekovFoto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/library.png",
  },
  {
    key: "$SalymbekovFoto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/auditory.png",
  },
  {
    key: "$SalymbekovFoto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castle.png",
  },
  {
    key: "$SalymbekovFoto4$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castleBit.png",
  },
  {
    key: "$SalymbekovFoto5$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/library.png",
  },
  {
    key: "$SalymbekovFoto6$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/auditory.png",
  },
  {
    key: "$SalymbekovFoto7$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castle.png",
  },
  {
    key: "$SalymbekovFoto8$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castleBit.png",
  },
  {
    key: "$SalymbekovFoto9$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/library.png",
  },
  {
    key: "$SalymbekovFoto10$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/auditory.png",
  },
  {
    key: "$SalymbekovFoto11$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castle.png",
  },
  {
    key: "$SalymbekovFoto12$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/castleBit.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: 'SalymbekovFotoSlider1',
    func: {
      type: 'swiper',
      swiperParams: {
        pagination: "true",
        spaceBetween: "17"
      }
    }
  }
];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
