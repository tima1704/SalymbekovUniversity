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
        $SalymbekovCabinetsArticle2$
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="CabinetsSliderSecond">
          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img src="$SalymbekovCabinets2Foto1$" alt="auditory" />
                <img src="$SalymbekovCabinets2Foto2$" alt="castle" />
              </div>
              <div>
                <img src="$SalymbekovCabinets2Foto3$" alt="library" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinets2Foto4$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinets2Foto5$"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="$SalymbekovCabinets2Foto6$"
                  alt="library"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinets2Foto7$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinets2Foto8$"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="$SalymbekovCabinets2Foto9$"
                  alt="library"
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
    key: "$SalymbekovCabinetsArticle2$",
    value: "Кабинеты",
  },
  {
    key: "$SalymbekovCabinets2Foto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinets2Foto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinets2Foto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinets2Foto4$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinets2Foto5$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinets2Foto6$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinets2Foto7$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinets2Foto8$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinets2Foto9$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "CabinetsSliderSecond",
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
