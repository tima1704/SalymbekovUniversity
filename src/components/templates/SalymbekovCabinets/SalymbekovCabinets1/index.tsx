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
        $SalymbekovCabinetsArticle$
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="CabinetsSliderFirst">
          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinetsFoto1$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinetsFoto2$"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="$SalymbekovCabinetsFoto3$"
                  alt="library"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinetsFoto4$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinetsFoto5$"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="$SalymbekovCabinetsFoto6$"
                  alt="library"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="$SalymbekovCabinetsFoto7$"
                  alt="auditory"
                />
                <img
                  src="$SalymbekovCabinetsFoto8$"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="$SalymbekovCabinetsFoto9$"
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
    key: "$SalymbekovCabinetsArticle$",
    value: "Кабинеты",
  },
  {
    key: "$SalymbekovCabinetsFoto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinetsFoto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinetsFoto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinetsFoto4$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinetsFoto5$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinetsFoto6$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
  {
    key: "$SalymbekovCabinetsFoto7$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets1.png",
  },
  {
    key: "$SalymbekovCabinetsFoto8$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets2.png",
  },
  {
    key: "$SalymbekovCabinetsFoto9$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/cabinets3.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "CabinetsSliderFirst",
    func: {
      type: "swiper",
      swiperParams: {
        pagination: "true",
        spaceBetween: "17",
      },
    },
  }
];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
