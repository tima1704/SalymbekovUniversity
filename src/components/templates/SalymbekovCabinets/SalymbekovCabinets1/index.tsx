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
                  src="/src/components/common/images/class2.png"
                  alt="auditory"
                />
                <img
                  src="/src/components/common/images/class3.png"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="/src/components/common/images/class1.png"
                  alt="library"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="/src/components/common/images/book2.png"
                  alt="auditory"
                />
                <img
                  src="/src/components/common/images/book3.png"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="/src/components/common/images/book1.png"
                  alt="library"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex gap-[17px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src="/src/components/common/images/pen2.png"
                  alt="auditory"
                />
                <img
                  src="/src/components/common/images/pen3.png"
                  alt="castle"
                />
              </div>
              <div>
                <img
                  src="/src/components/common/images/pen1.png"
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
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto2$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto3$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto4$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto5$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto6$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto7$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto8$",
    type: "image",
    value: "",
  },
  {
    key: "$SalymbekovCabinetsFoto9$",
    type: "image",
    value: "",
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
