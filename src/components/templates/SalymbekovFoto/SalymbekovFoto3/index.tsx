simport React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div className="w-[90%] lg:max-w-[1180px] m-auto" {...props}>
      <h2 className="text-[#202124] text-[20px] lg:text-[28px] font-[600] leading-[30px] lg:leading-[36px] text-center pb-[20px] lg:pb-[40px]">
        Фотографии SALYMBEKOV UNIVERSITY
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="SalymbekovFotoSlider3">
          <swiper-slide>
            <div className="flex gap-[29px]">
              <div className="flex flex-col gap-[29px]">
                <img
                  className="rounded-[100%] w-[560px] h-[560px]"
                  src="$SalymbekovFoto13$"
                  alt="library"
                />
                <img
                  className="w-[589px] h-[270px] rounded-[50px]"
                  src="$SalymbekovFoto23$"
                  alt="auditory"
                />
              </div>
              <div className="flex flex-col gap-[29px]">
                <img
                  className="w-[582px] h-[270px] rounded-[50px]"
                  src="$SalymbekovFoto333$"
                  alt="library"
                />
                <img
                  className="rounded-[100%] w-[560px] h-[560px]"
                  src="$SalymbekovFoto43$"
                  alt="castle"
                />
              </div>
            </div>
          </swiper-sli>

          <SwiperSlide>
            <div className="flex gap-[29px]">
              <div className="flex flex-col gap-[29px]">
                <img
                  className="rounded-[100%] w-[560px] h-[560px]"
                  src="$SalymbekovFoto53$"
                  alt="library"
                />
                <img
                  className="w-[589px] h-[270px] rounded-[50px]"
                  src="$SalymbekovFoto63$"
                  alt="auditory"
                />
              </div>
              <div className="flex flex-col gap-[29px]">
                <img
                  className="w-[582px] h-[270px] rounded-[50px]"
                  src="$SalymbekovFoto73$"
                  alt="library"
                />
                <img
                  className="rounded-[100%] w-[560px] h-[560px]"
                  src="$SalymbekovFoto83$"
                  alt="castle"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex gap-[29px]">
              <div className="flex flex-col gap-[29px]">
                <img
                  className="rounded-[100%] w-[560px] h-[560px]"
                  src="$SalymbekovFoto93$"
                  alt="library"
                />
                <img
                  className="w-[589px] h-[270px] rounded-[50px]"
                  src="$SalymbekovFoto103$"
                  alt="auditory"
                />
              </div>
              <div className="flex flex-col gap-[29px]">
                <img
                  className="w-[582px] h-[270px] rounded-[50px]"
                  src="$SalymbekovFoto113$"
                  alt="library"
                />
                <img
                  className="rounded-[100%] w-[560px] h-[560px]"
                  src="$SalymbekovFoto123$"
                  alt="castle"
                />
              </div>
            </div>
          </SwiperSlide>
        </swiper-container>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SalymbekovFoto13$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto21.png",
  },
  {
    key: "$SalymbekovFoto23$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto22.png",
  },
  {
    key: "$SalymbekovFoto333$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto23.png",
  },
  {
    key: "$SalymbekovFoto43$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto24.png",
  },
  {
    key: "$SalymbekovFoto53$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto21.png",
  },
  {
    key: "$SalymbekovFoto63$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto22.png",
  },
  {
    key: "$SalymbekovFoto73$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto23.png",
  },
  {
    key: "$SalymbekovFoto83$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto24.png",
  },
  {
    key: "$SalymbekovFoto93$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto21.png",
  },
  {
    key: "$SalymbekovFoto103$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto23.png",
  },
  {
    key: "$SalymbekovFoto113$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto23.png",
  },
  {
    key: "$SalymbekovFoto123$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto24.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "SalymbekovFotoSlider3",
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
