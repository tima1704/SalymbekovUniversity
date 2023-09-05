import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from 'swiper/element/bundle';
register()

const Layout = ({ ...props }) => {
  return (
    <div className="pb-[50px]" {...props}>
      <swiper-container id="SliderFirst">
        <swiper-slide>
          <img src="$SliderFirstSlide$" alt="chairs" />
        </swiper-slide>
        <swiper-slide>
          <img src="$SliderSecondSlide$" alt="girls" />
        </swiper-slide>
        <swiper-slide>
          <img src="$SliderThirdSlide$" alt="cabinet" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SliderFirstSlide$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/chairs.png",
  },
  {
    key: "$SliderSecondSlide$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/girls.png",
  },
  {
    key: "$SliderThirdSlide$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinica-large.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: 'SliderFirst',
    func: {
      type: 'swiper',
      swiperParams: {
        pagination: "true"
      }
    }
  }
];

export default {
  layout: Layout,
  placeholders,
  functions,
};
