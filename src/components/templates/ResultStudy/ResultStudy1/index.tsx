import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[#FFF] px-[25px]" {...props}>
      <div className="m-auto max-w-[1150px] flex flex-col gap-[25px] lg:gap-[120px] lg:flex-row">
        <div className="mb-[]">
          <div className="flex items-center gap-[15px] pt-[25px] lg:pt-[41px] pb-[15px]">
            <h2 className="text-[#5A899F] text-[30px] font-[700] leading-[30px]">
              $ResultStudyArticle1$
            </h2>
            <button className="hidden lg:block px-[20px] py-[8px] rounded-[50px] border-[2px] bodred-solid border-[#2F9EDC] text-[15px] font-[500] leading-[24px] text-[#0776B4] hover:bg-[#0776B4] hover:text-[white] duration-300">
              $ResultStudyMoreOne$
            </button>
          </div>
          <p className="text-[#202124] text-[15px] lg:text-[20px] font-[400] md:leading-[25px] lg:leading-[40px] pb-[15px] lg:pb-[46px]">
            $ResultStudyDescriptionOne$
          </p>
          <button className="px-[20px] py-[8px] rounded-[50px] border-[2px] bodred-solid border-[#2F9EDC] text-[15px] font-[500] leading-[24px] text-[#0776B4] hover:bg-[#0776B4] hover:text-[white] duration-300 lg:hidden">
            $ResultStudyMoreTwo$
          </button>
        </div>

        <div className="pb-[30px] lg:pb-[0]">
          <div className="flex items-center gap-[15px] lg:pt-[41px] pb-[15px]">
            <h2 className="text-[#5A899F] text-[30px] font-[700] leading-[30px] whitespace-nowrap">
              $ResultStudyResult$
            </h2>
            <button className="hidden lg:block px-[20px] py-[8px] rounded-[50px] border-[2px] bodred-solid border-[#2F9EDC] text-[15px] font-[500] leading-[24px] text-[#0776B4] hover:bg-[#0776B4] hover:text-[white] duration-300">
              $ResultStudyMoreThree$
            </button>
          </div>
          <p className="text-[#202124] text-[15px] lg:text-[20px] font-[400] md:leading-[25px] lg:leading-[40px] pb-[15px] lg:pb-[46px]">
            $ResultStudyDescriptionTwo$
          </p>
          <button className="px-[20px] py-[8px] rounded-[50px] border-[2px] bodred-solid border-[#2F9EDC] text-[15px] font-[500] leading-[24px] text-[#0776B4] hover:bg-[#0776B4] hover:text-[white] duration-300 lg:hidden">
            $ResultStudyMoreFour$
          </button>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$ResultStudyArticle1$",
    value: "Наша миссия",
  },
  {
    key: "$ResultStudyMoreOne$",
    value: "Подробнее",
  },
  {
    key: "$ResultStudyDescriptionOne$",
    value:
      "заключается в подготовке студентов для реализации творческих инициатив и инновационных идей на благо общества",
  },
  {
    key: "$ResultStudyMoreTwo$",
    value: "Подробнее",
  },
  {
    key: "$ResultStudyResult$",
    value: "В результате обучения",
  },
  {
    key: "$ResultStudyMoreThree$",
    value: "Подробнее",
  },
  {
    key: "$ResultStudyDescriptionTwo$",
    value:
      "студенты смогут применять свои знания в практической деятельности работника здравоохранения",
  },
  {
    key: "$ResultStudyMoreFour$",
    value: "Подробнее",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
