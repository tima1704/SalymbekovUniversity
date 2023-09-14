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
        $SalymbekovCabinetsArticle3$
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="CabinetsSliderThird">
          <swiper-slide>
            <div className="flex gap-[17px]">
              <div>
                <img
                  src="$SalymbekovCabinets3Foto1$"
                  alt="library"
                />
              </div>
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinets3Foto2$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinets3Foto3$"
                  alt="castle"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div>
                <img
                  src="$SalymbekovCabinets3Foto4$"
                  alt="library"
                />
              </div>
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinets3Foto5$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinets3Foto6$"
                  alt="castle"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div>
                <img
                  src="$SalymbekovCabinets3Foto7$"
                  alt="library"
                />
              </div>
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinets3Foto8$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinets3Foto9$"
                  alt="castle"
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
    key: "$SalymbekovCabinetsArticle3$",
    value: "Кабинеты",
  },
  {
    key: "$SalymbekovCabinets3Foto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinets3Foto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinets3Foto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinets3Foto4$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinets3Foto5$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinets3Foto6$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinets3Foto7$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinets3Foto8$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinets3Foto9$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "CabinetsSliderThird",
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
