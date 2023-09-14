import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[#FFF] px-[25px]" {...props}>
      <div className="m-auto max-w-[1150px] flex flex-col gap-[25px] lg:gap-[120px] lg:flex-row">
        <div className="lg:pb-[50px]">
          <div className="flex items-center gap-[15px] pt-[25px] lg:pt-[41px] lg:pb-[15px]">
            <h2 className="text-[#5A899F] text-[30px] font-[700] leading-[30px]">
              $ResultStudyArticle3$
            </h2>
          </div>
          <div>
            <p className="text-[#202124] text-[15px] lg:text-[20px] font-[400] md:leading-[25px] lg:leading-[40px] pb-[15px] lg:pb-[46px]">
              $ResultStudyDescriptionOne3$
            </p>
            <button className="px-[20px] py-[8px] rounded-[50px] border-[2px] bodred-solid border-[#2F9EDC] text-[15px] font-[500] leading-[24px] text-[#0776B4] hover:bg-[#0776B4] hover:text-[white] duration-300">
              $ResultStudyMoreOne3$
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[15px] lg:pt-[41px] pb-[15px]">
            <h2 className="text-[#5A899F] text-[30px] font-[700] leading-[30px] whitespace-nowrap">
              $ResultStudyResult3$
            </h2>
          </div>
          <div className="pb-[50px]">
            <p className="text-[#202124] text-[15px] lg:text-[20px] font-[400] md:leading-[25px] lg:leading-[40px] pb-[15px] lg:pb-[46px]">
              $ResultStudyDescriptionTwo3$
            </p>
            <button className="px-[20px] py-[8px] rounded-[50px] border-[2px] bodred-solid border-[#2F9EDC] text-[15px] font-[500] leading-[24px] text-[#0776B4] hover:bg-[#0776B4] hover:text-[white] duration-300">
              $ResultStudyMoreTwo3$
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$ResultStudyArticle3$",
    value: "Наша миссия",
  },
  {
    key: "$ResultStudyMoreOne3$",
    value: "Подробнее",
  },
  {
    key: "$ResultStudyDescriptionOne3$",
    value:
      "заключается в подготовке студентов для реализации творческих инициатив и инновационных идей на благо общества",
  },
  {
    key: "$ResultStudyMoreTwo3$",
    value: "Подробнее",
  },
  {
    key: "$ResultStudyResult3$",
    value: "В результате обучения",
  },
  {
    key: "$ResultStudyDescriptionTwo3$",
    value:
      "студенты смогут применять свои знания в практической деятельности работника здравоохранения",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
