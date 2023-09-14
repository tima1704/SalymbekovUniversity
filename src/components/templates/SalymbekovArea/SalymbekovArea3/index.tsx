import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from "swiper/element/bundle";
register();

const Layout = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="text-[#202124] text-[20px] lg:text-[28px] font-[600] leading-[30px] lg:leading-[36px] text-center pb-[20px] lg:pb-[40px]">
      $SalymbekovAreaArticle3$
      </h2>
      <div className="pb-[20px] lg:pb-[50px]">
        <swiper-container id="AreaSliderThird">
          <swiper-slide>
            <div>
              <img
                className="w-full rounded-tl-[500px] rounded-br-[500px] h-[300px] md:h-[400px] lg:h-[522px]"
                src="$SalymbekovArea3Foto1$"
                alt="library"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img
                className="w-full  rounded-tl-[500px] rounded-br-[500px] h-[300px] md:h-[400px] lg:h-[522px]"
                src="$SalymbekovArea3Foto2$"
                alt="library"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img
                className="w-full  rounded-tl-[500px] rounded-br-[500px] h-[300px] md:h-[400px] lg:h-[522px]"
                src="$SalymbekovArea3Foto3$"
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
    key: "$SalymbekovAreaArticle3$",
    value: "Университетская площадка",
  },
  {
    key: "$SalymbekovArea3Foto1$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange1.png",
  },
  {
    key: "$SalymbekovArea3Foto2$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange22.png",
  },
  {
    key: "$SalymbekovArea3Foto3$",
    type: "image",
    value: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/orange33.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: "AreaSliderThird",
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
