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
        $SalymbekovAreaArticle2$
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="AreaSliderSecond">
          <swiper-slide>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] ld:h-[500px] xl:h-[772px]"
                src="$SalymbekovArea2Foto1$"
                alt="library"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] ld:h-[500px] xl:h-[772px]"
                src="$SalymbekovArea2Foto2$"
                alt="library"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] ld:h-[500px] xl:h-[772px]"
                src="$SalymbekovArea2Foto3$"
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
    key: "$SalymbekovAreaArticle2$",
    value: "Университетская площадка",
  },
  {
    key: "$SalymbekovArea2Foto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange1.png",
  },
  {
    key: "$SalymbekovArea2Foto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange22.png",
  },
  {
    key: "$SalymbekovArea2Foto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange33.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "AreaSliderSecond",
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
