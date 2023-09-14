import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[rgba(238,238,238,0.80)]" {...props}>
      <div className="hidden lg:pb-[100px] lg:flex lg:flex-col lg:gap-[30px]">
        <div className="flex items-center justify-center pb-[21px] pt-[61px]">
          <h2 className="text-[40px] font-[700] leading-[30px] text-[#326177]">
            $OurMissionArticleOne2$
          </h2>
        </div>

        <div className="flex gap-[48px] items-center">
          <div className="flex justify-end items-center bg-[#2F9EDC] rounded-r-[200px] w-[370px] h-[200px]">
            <p className="text-[#FFF] text-[100px] font-[600] leading-[24px] pr-[25%]">
              $OurMissionNumOne2$
            </p>
          </div>
          <div className="w-[85%]">
            <p className="text-[#202124] text-[20px] font-[400] leading-[40px]">
              $OurMissionDescOne2$
            </p>
          </div>
        </div>

        <div className="flex gap-[48px] items-center">
          <div className="bg-[#0870AA] flex justify-end items-center rounded-r-[200px] w-[370px] h-[200px]">
            <p className="text-[#FFF] text-[100px] font-[600] leading-[24px] pr-[25%]">
              $OurMissionNumTwo2$
            </p>
          </div>
          <div className="w-[85%]">
            <p className="text-[#006] text-[25px] font-[500] leading-[40px]">
              $OurMissionDescTwo2$
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[48px]">
          <div className="bg-[rgba(1,1,140,0.80)] flex justify-end items-center rounded-r-[200px] w-[370px] h-[200px]">
            <p className="text-[#FFF] text-[100px] font-[600] leading-[24px] pr-[25%]">
              $OurMissionNumThree2$
            </p>
          </div>
          <div className="w-[85%]">
            <p className="text-[#202124] text-[25px] font-[400] leading-[40px]">
              $OurMissionDescThree2$
            </p>
          </div>
        </div>
      </div>

      <div className="pb-[100px] flex flex-col gap-[30px] lg:hidden">
        <div className="flex items-center justify-center pb-[21px] pt-[61px]">
          <h2 className="text-[40px] font-[700] leading-[30px] text-[#326177]">
            $OurMissionArticleTwo2$
          </h2>
        </div>

        <div className="flex gap-[36px]">
          <div className="flex flex-col gap-[20px] lg:gap-[48px] items-center">
            <div className="flex justify-end items-center bg-[#2F9EDC] rounded-b-[150px] w-[50%] md:h-[100px]">
              <p className="text-[#FFF] md:text-[50px] lg:text-[100px] text-[30px] font-[600] lg:leading-[24px] pr-[45%]">
                $OurMissionNumOneOne2$
              </p>
            </div>
            <div className="ml-[20px]">
              <p className="text-[#202124] text-center md:text-start text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
                $OurMissionDescFour2$
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] lg:gap-[48px] items-center">
            <div className="bg-[#0870AA] flex justify-end items-center rounded-b-[150px] w-[50%] md:h-[100px]">
              <p className="text-[#FFF] md:text-[50px] lg:text-[100px] text-[30px] font-[600] lg:leading-[24px] pr-[45%]">
                $OurMissionNumTwoTwo2$
              </p>
            </div>
            <div className="mr-[20px]">
              <p className="text-[#202124] text-center md:text-start text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
                $OurMissionDescFive2$
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[20px] lg:gap-[48px]">
          <div className="bg-[rgba(1,1,140,0.80)] flex justify-end items-center rounded-r-[200px] w-[200px] md:w-[370px] h-[100px] md:h-[200px]">
            <p className="text-[#FFF] text-[30px] md:text-[100px] font-[600] leading-[24px] pr-[25%]">
              $OurMissionNumThreeThree2$
            </p>
          </div>
          <div>
            <p className="text-[#202124] text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
              $OurMissionDescSix2$
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurMissionArticleOne2$",
    value: "Наши цели",
  },
  {
    key: "$OurMissionNumOne2$",
    value: "1",
  },
  {
    key: "$OurMissionDescOne2$",
    value:
      "Предоставление образования и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда, в соответствии с международными стандартами качества образования",
  },
  {
    key: "$OurMissionDescTwo2$",
    value:
      "Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений",
  },
  {
    key: "$OurMissionNumTwo2$",
    value: "2",
  },
  {
    key: "$OurMissionNumThree2$",
    value: "3",
  },
  {
    key: "$OurMissionDescThree2$",
    value:
      "Превращение Университета в один из первоклассных, инновационных и современных образовательных организаций страны с сильной материальной-технической базой, качественным кадровым составом и высокой репутацией",
  },
  {
    key: "$OurMissionArticleTwo2$",
    value: "Наши цели",
  },
  {
    key: "$OurMissionNumOneOne2$",
    value: "1",
  },
  {
    key: "$OurMissionNumTwoTwo2$",
    value: "2",
  },
  {
    key: "$OurMissionDescFour2$",
    value:
      "Предоставление образования и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда, в соответствии с международными стандартами качества образования",
  },
  {
    key: "$OurMissionDescFive2$",
    value:
      "Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений",
  },
  {
    key: "$OurMissionNumThreeThree2$",
    value: "3",
  },
  {
    key: "$OurMissionDescSix2$",
    value:
      "Превращение Университета в один из первоклассных, инновационных и современных образовательных организаций страны с сильной материальной-технической базой, качественным кадровым составом и высокой репутацией",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
