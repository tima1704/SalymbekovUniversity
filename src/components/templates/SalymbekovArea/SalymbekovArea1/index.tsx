import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from "swiper/element/bundle";
register();

const Layout = ({ ...props }) => {
  return (
    <div className="w-[90%] lg:max-w-[1180px] m-auto" { ...props }>
      <h2 className="text-[#202124] text-[20px] lg:text-[28px] font-[600] leading-[30px] lg:leading-[36px] text-center pb-[20px] lg:pb-[40px]">
        $SalymbekovAreaArticle$
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="AreaSliderFirst">
          <swiper-slide>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[522px]"
                src="$SalymbekovAreaFoto1$"
                alt="library"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[522px]"
                src="$SalymbekovAreaFoto2$"
                alt="library"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[522px]"
                src="$SalymbekovAreaFoto3$"
                alt="library"
              />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SalymbekovAreaArticle$",
    value: "Университетская площадка",
  },
  {
    key: "$SalymbekovAreaFoto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange1.png",
  },
  {
    key: "$SalymbekovAreaFoto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange22.png",
  },
  {
    key: "$SalymbekovAreaFoto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange33.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "AreaSliderFirst",
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
