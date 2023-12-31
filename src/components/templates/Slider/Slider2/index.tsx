import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import { register } from 'swiper/element/bundle';
register()

const Layout = ({ ...props }) => {
  return (
    <div className="max-w-[50%] h-[100%] pl-[20px]" {...props}>
      <swiper-container id="SliderSecond">
        <swiper-slide>
          <img src="$SliderFirstSlide2$" alt="chairs" />
        </swiper-slide>
        <swiper-slide>
          <img src="$SliderSecondSlide2$" alt="girls" />
        </swiper-slide>
        <swiper-slide>
          <img src="$SliderThirdSlide2$" alt="cabinet" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$SliderFirstSlide2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinicSlider1.png",
  },
  {
    key: "$SliderSecondSlide2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinicSlider2.png",
  },
  {
    key: "$SliderThirdSlide2$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinicSlider3.png",
  },
];

const functions: ITemplateFunction[] = [
  {
    id: 'SliderSecond',
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
