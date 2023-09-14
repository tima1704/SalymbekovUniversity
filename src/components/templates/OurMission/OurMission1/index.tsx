import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <section className="bg-[rgba(238,238,238,0.80)]" {...props}>
      <div className="hidden lg:block pb-[100px] lg:max-w-[1400px]">
        <div className="flex items-center justify-center pb-[21px] pt-[61px]">
          <h2 className="text-[25px] lg:text-[40px] font-[700] leading-[30px] text-[#326177]">
            $OurMissionArticleOne1$
          </h2>
        </div>

        <div className="flex items-center flex-row gap-[17px] lg:gap-[48px]">
          <div className="flex justify-end items-center bg-[#2F9EDC] rounded-r-[100px] w-[200px] h-[80px] sm:w-[370px] sm:h-[200px] sm:rounded-r-[200px]">
            <p className="text-[#FFF] pr-[30%] text-[30px] font-[600px] leading-[30px] text-center md:text-[80px] lg:font-[600] lg:text-[100px]">
              $OurMissionNumOne$
            </p>
          </div>
          <p className="text-[#202124] max-w-[740px] text-[15px] leading-[25px] lg:text-[20px] font-[400] lg:leading-[40px]">
            $OurMissionDescOne$
          </p>
        </div>

        <div className="flex py-[40px] justify-end items-center gap-[48px]">
          <p className="text-[#006] lg:max-w-[700px] text-right text-[15px] lg:text-[25px] font-[500] leading-[25px] lg:leading-[40px]">
            $OurMissionDescTwo$
          </p>
          <div className="flex justify-end items-center bg-[#0870AA]  rounded-l-[100px] w-[200px] h-[80px] sm:w-[370px] sm:h-[200px] sm:rounded-l-[200px]">
            <p className="text-[#FFF] pr-[30%] text-[30px] font-[600px] leading-[30px] text-center md:text-[80px] md:pr-[50%] lg:font-[600] lg:text-[100px]">
              $OurMissionNumTwo$
            </p>
          </div>
        </div>

        <div className="flex gap-[48px] items-center">
          <div className="flex justify-end items-center bg-[rgba(1,1,140,0.80)] rounded-r-[100px] w-[200px] h-[80px] sm:w-[370px] sm:h-[200px] sm:rounded-r-[200px]">
            <p className="text-[#FFF] pr-[30%] text-[30px] font-[600px] leading-[30px] text-center md:text-[80px] lg:font-[600] lg:text-[100px]">
              $OurMissionNumThree$
            </p>
          </div>
          <p className="text-[#202124] lg:max-w-[740px] text-[15px] lg:text-[20px] font-[400] leading-[25px] lg:leading-[40px]">
            $OurMissionDescThree$
          </p>
        </div>
      </div>

      <div className="pb-[50px] lg:pb-[100px] flex flex-col gap-[30px] lg:hidden">
        <div className="flex items-center justify-center pb-[10px] md:pb-[20px] pt-[20px] md:pt-[40px]">
          <h2 className="text-[30px] md:text-[40px] font-[700] leading-[30px] text-[#326177]">
            $OurMissionArticleTwo1$
          </h2>
        </div>

        <div className="flex gap-[36px]">
          <div className="flex flex-col gap-[20px] lg:gap-[48px] items-center">
            <div className="flex justify-end items-center bg-[#2F9EDC] rounded-b-[150px] w-[50%] md:h-[100px]">
              <p className="text-[#FFF] md:text-[50px] lg:text-[100px] text-[30px] font-[600] lg:leading-[24px] pr-[45%]">
                $OurMissionNumOneOne$
              </p>
            </div>
            <div className="ml-[20px]">
              <p className="text-[#202124] text-center md:text-start text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
                $OurMissionDescFour$
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] lg:gap-[48px] items-center">
            <div className="bg-[#0870AA] flex justify-end items-center rounded-b-[150px] w-[50%] md:h-[100px]">
              <p className="text-[#FFF] md:text-[50px] lg:text-[100px] text-[30px] font-[600] lg:leading-[24px] pr-[40%]">
                $OurMissionNumTwoTwo$
              </p>
            </div>
            <div className="mr-[20px]">
              <p className="text-[#202124] text-center md:text-start text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
                $OurMissionDescFive$
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[20px] lg:gap-[48px]">
          <div className="bg-[rgba(1,1,140,0.80)] flex justify-end items-center rounded-r-[200px] w-[200px] md:w-[370px] h-[100px] md:h-[200px]">
            <p className="text-[#FFF] text-[30px] md:text-[100px] font-[600] leading-[24px] pr-[25%]">
              $OurMissionNumThreeThree$
            </p>
          </div>
          <div>
            <p className="text-[#202124] text-[12px] sm:text-[15px] font-[400] leading-[20px] sm:leading-[25px]">
              $OurMissionDescSix$
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$OurMissionArticleOne1$",
    value: "Наши цели",
  },
  {
    key: "$OurMissionNumOne$",
    value: "1",
  },
  {
    key: "$OurMissionDescOne$",
    value:
      "Предоставление образования и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда, в соответствии с международными стандартами качества образования",
  },
  {
    key: "$OurMissionDescTwo$",
    value:
      "Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений",
  },
  {
    key: "$OurMissionNumTwo$",
    value: "2",
  },
  {
    key: "$OurMissionNumThree$",
    value: "3",
  },
  {
    key: "$OurMissionDescThree$",
    value:
      "Превращение Университета в один из первоклассных, инновационных и современных образовательных организаций страны с сильной материальной-технической базой, качественным кадровым составом и высокой репутацией",
  },
  {
    key: "$OurMissionArticleTwo1$",
    value: "Наши цели",
  },
  {
    key: "$OurMissionNumOneOne$",
    value: "1",
  },
  {
    key: "$OurMissionNumTwoTwo$",
    value: "2",
  },
  {
    key: "$OurMissionDescFour$",
    value:
      "Предоставление образования и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда, в соответствии с международными стандартами качества образования",
  },
  {
    key: "$OurMissionDescFive$",
    value:
      "Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений",
  },
  {
    key: "$OurMissionNumThreeThree$",
    value: "3",
  },
  {
    key: "$OurMissionDescSix$",
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
