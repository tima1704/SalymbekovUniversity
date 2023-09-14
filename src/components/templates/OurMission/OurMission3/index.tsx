import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[rgba(238,238,238,0.80)]" {...props}>
      <div className="hidden lg:max-w-[1400px] lg:m-auto lg:pb-[100px] lg:flex lg:flex-col lg:gap-[30px]">
        <div className="flex items-center justify-center pb-[21px] pt-[61px]">
          <h2 className="text-[40px] font-[700] leading-[30px] text-[#326177]">
            $OurMissionArticleOne3$
          </h2>
        </div>

        <div className="flex m-auto gap-[50px] xl:gap-[100px]">
          <div className="flex flex-col gap-[48px] items-center">
            <div className="flex justify-end items-center bg-[#2F9EDC] rounded-b-[200px] w-[250px] h-[150px] xl:w-[350px] xl:h-[200px]">
              <p className="text-[#FFF] text-[100px] font-[600] leading-[24px] pr-[45%]">
                $OurMissionNumOne3$
              </p>
            </div>
            <p className="text-[#202124] text-[20px] font-[400] leading-[40px] max-w-[300px]">
              $OurMissionDescOne3$
            </p>
          </div>

          <div className="flex flex-col gap-[48px] items-center">
            <div className="bg-[#0870AA] flex justify-end items-center rounded-b-[200px] w-[250px] h-[150px] xl:w-[350px] xl:h-[200px]">
              <p className="text-[#FFF] text-[100px] font-[600] leading-[24px] pr-[45%]">
                $OurMissionNumTwo3$
              </p>
            </div>
            <p className="text-[#006] text-center text-[25px] font-[500] leading-[40px] max-w-[300px]">
              $OurMissionDescTwo3$
            </p>
          </div>

          <div className="flex flex-col items-center gap-[48px]">
            <div className="bg-[rgba(1,1,140,0.80)] flex justify-end items-center rounded-b-[200px] w-[250px] h-[150px] xl:w-[350px] xl:h-[200px]">
              <p className="text-[#FFF] text-[100px] font-[600] leading-[24px] pr-[45%]">
                $OurMissionNumThree3$
              </p>
            </div>
            <p className="text-[#202124] text-[25px] font-[400] leading-[40px] max-w-[300px]">
              $OurMissionDescThree3$
            </p>
          </div>
        </div>
      </div>

      <div className="pb-[100px] flex flex-col gap-[30px] lg:hidden">
        <div className="flex items-center justify-center pb-[21px] pt-[61px]">
          <h2 className="text-[40px] font-[700] leading-[30px] text-[#326177]">
            $OurMissionArticleTwo3$
          </h2>
        </div>

        <div className="flex gap-[36px]">
          <div className="flex flex-col gap-[20px] lg:gap-[48px] items-center">
            <div className="flex justify-end items-center bg-[#2F9EDC] rounded-b-[150px] w-[50%] md:h-[100px]">
              <p className="text-[#FFF] md:text-[50px] lg:text-[100px] text-[30px] font-[600] lg:leading-[24px] pr-[45%]">
                $OurMissionNumOneOne3$
              </p>
            </div>
            <div className="ml-[20px]">
              <p className="text-[#202124] text-center md:text-start text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
                $OurMissionDescFour3$
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] lg:gap-[48px] items-center">
            <div className="bg-[#0870AA] flex justify-end items-center rounded-b-[150px] w-[50%] md:h-[100px]">
              <p className="text-[#FFF] md:text-[50px] lg:text-[100px] text-[30px] font-[600] lg:leading-[24px] pr-[40%]">
                $OurMissionNumTwoTwo3$
              </p>
            </div>
            <div className="mr-[20px]">
              <p className="text-[#202124] text-center md:text-start text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
                $OurMissionDescFive3$
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[20px] lg:gap-[48px]">
          <div className="bg-[rgba(1,1,140,0.80)] flex justify-end items-center rounded-r-[200px] w-[200px] md:w-[370px] h-[100px] md:h-[200px]">
            <p className="text-[#FFF] text-[30px] md:text-[100px] font-[600] leading-[24px] pr-[25%]">
              $OurMissionNumThreeThree3$
            </p>
          </div>
          <div>
            <p className="text-[#202124] text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
              $OurMissionDescSix3$
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurMissionArticleOne3$",
    value: "Наши цели",
  },
  {
    key: "$OurMissionNumOne3$",
    value: "1",
  },
  {
    key: "$OurMissionDescOne3$",
    value:
      "Предоставление образования и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда, в соответствии с международными стандартами качества образования",
  },
  {
    key: "$OurMissionDescTwo3$",
    value:
      "Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений",
  },
  {
    key: "$OurMissionNumTwo3$",
    value: "2",
  },
  {
    key: "$OurMissionNumThree3$",
    value: "3",
  },
  {
    key: "$OurMissionDescThree3$",
    value:
      "Превращение Университета в один из первоклассных, инновационных и современных образовательных организаций страны с сильной материальной-технической базой, качественным кадровым составом и высокой репутацией",
  },
  {
    key: "$OurMissionArticleTwo3$",
    value: "Наши цели",
  },
  {
    key: "$OurMissionNumOneOne3$",
    value: "1",
  },
  {
    key: "$OurMissionNumTwoTwo3$",
    value: "2",
  },
  {
    key: "$OurMissionDescFour3$",
    value:
      "Предоставление образования и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда, в соответствии с международными стандартами качества образования",
  },
  {
    key: "$OurMissionDescFive3$",
    value:
      "Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений",
  },
  {
    key: "$OurMissionNumThreeThree3$",
    value: "3",
  },
  {
    key: "$OurMissionDescSix3$",
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
