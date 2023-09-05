// import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from 'swiper/element/bundle';
register()

const Layout = ({ ...props }) => {
  return (
    <div className="pb-[50px]" {...props}>
      <swiper-container id="SliderThird">
        <swiper-slide>
          <img src="$SliderFirstSlide3$" alt="chairs" />
        </swiper-slide>
        <swiper-slide>
          <img src="$SliderSecondSlide3$" alt="girls" />
        </swiper-slide>
        <swiper-slide>
          <img src="$SliderThirdSlide3$" alt="cabinet" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SliderFirstSlide3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/slide.png",
  },
  {
    key: "$SliderSecondSlide3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/slide.png",
  },
  {
    key: "$SliderThirdSlide3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/slide.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: 'SliderThird',
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
