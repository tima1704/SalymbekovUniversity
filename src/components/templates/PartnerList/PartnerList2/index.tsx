import React from "react";
import { ITemplateFunction, ITemplatePlaceholder } from "../../../../redux/TemplatesReducer/types";

interface IPartner {
  id: number;
  description: string;
  style: string;
  path?: string;
}

const partnerList: IPartner[][] = [
  [
    {
      id: 1,
      description: "$PartnerListSchool2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListKaplan2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListEnglish2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListInternational2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSecond2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListEC2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListExam2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] p bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMalta2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolThird2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListMalvern2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListAcademic2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListUK2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListUniversity2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListGeneva2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListCourses2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListSwitzerland2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolFourth2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListSSLC2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description:
        "$PartnerListEAPEnglish2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListCanada2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolFifth2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListELA2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListPrep2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMaltaSecond2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListInstitute2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description:
        "$PartnerListMDIS2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListDiplomas2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMalaysia2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSixth2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListNZLC2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description:
        "$PartnerListAu2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListZealand2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSeventh2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListAccent2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListFrench2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListFrance2$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
];

const Layout = ({ ...props }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-[40px] max-w-[90%] lg:max-w-[1180px] m-auto pb-[20px] lg:pb-[84px] pt-[20px] lg:pt-[80px]" { ...props }>
      <h2 className="text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
        $PartnersTable2$
      </h2>

      <table>
        <thead>
          <tr>
            <th className="text-[#202124] py-[13px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tl-[13px]">
              $TypeTable2$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $NameOfTable2$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $ProgrammCoursesTable2$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tr-[13px]">
              $CountriesTable2$
            </th>
          </tr>
        </thead>
        <tbody>
          {partnerList.map((item) => (
            <tr>
              {item.map((i) => (
                <td key={i.id} className={i.style}>
                  {i.description}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$PartnersTable2$',
    value: 'Список партнеров'
  },
  {
    key: '$TypeTable2$',
    value: 'Тип'
  },
  {
    key: '$NameOfTable2$',
    value: 'Название'
  },
  {
    key: '$ProgrammCoursesTable2$',
    value: 'Программы/Курсы'
  },
  {
    key: '$CountriesTable2$',
    value: 'Страны'
  },
  {
    key: '$PartnerListSchool2$',
    value: 'School'
  },  
  {
    key: '$PartnerListKaplan2$',
    value: 'Kaplan International'
  },
  {
    key: '$PartnerListEnglish2$',
    value: 'English, Exams Prep., University pathways'
  },
  {
    key: '$PartnerListInternational2$',
    value: 'International'
  },
  {
    key: '$PartnerListSchoolSecond2$',
    value: 'School'
  },
  {
    key: '$PartnerListEC2$',
    value: 'EC English Language Centres'
  },
  {
    key: '$PartnerListExam2$',
    value: 'English, Exam prep., Academic year/semester'
  },
  {
    key: '$PartnerListMalta2$',
    value: 'Malta, USA, Canada, UK, South Africa'
  },
  {
    key: '$PartnerListSchoolThird2$',
    value: 'School'
  },
  {
    key: '$PartnerListMalvern2$',
    value: 'Malvern House'
  },
  {
    key: '$PartnerListAcademic2$',
    value: 'English, Exam prep., Academic year/semester, NCUK pathway'
  },
  {
    key: '$PartnerListUK2$',
    value: 'UK'
  },
  {
    key: '$PartnerListUniversity2$',
    value: 'University'
  },
  {
    key: '$PartnerListGeneva2$',
    value: 'Geneva Business School'
  },
  {
    key: '$PartnerListCourses2$',
    value: 'Courses, Bachelor, Master, PhD'
  },
  {
    key: '$PartnerListSwitzerland2$',
    value: 'Switzerland, Spain, Russia, Kazakhstan, UAE, Saudi Arabia'
  },
  {
    key: '$PartnerListSchoolFourth2$',
    value: 'School'
  },
  {
    key: '$PartnerListSSLC2$',
    value: 'SSLC — Sprott Shaw Language College'
  },

  {
    key: '$PartnerListEAPEnglish2$',
    value: 'English, Exam prep., EAPEnglish for academic preparation pathway'
  },
  {
    key: '$PartnerListCanada2$',
    value: 'Canada'
  },
  {
    key: '$PartnerListSchoolFifth2$',
    value: 'School'
  },
  {
    key: '$PartnerListELA2$',
    value: 'ELA — English Language Academy Malta'
  },
  {
    key: '$PartnerListPrep2$',
    value: 'English, Exam prep.'
  },
  {
    key: '$PartnerListMaltaSecond2$',
    value: 'Malta'
  },
  {
    key: '$PartnerListInstitute2$',
    value: 'Institute'
  },
  {
    key: '$PartnerListMDIS2$',
    value: 'MDIS Malaysia — Management Development Institute of Singapore'
  },
  {
    key: '$PartnerListDiplomas2$',
    value: 'Diplomas, Degree programs'
  },
  {
    key: '$PartnerListMalaysia2$',
    value: 'Malaysia'
  },
  {
    key: '$PartnerListSchoolSixth2$',
    value: 'School'
  },
  {
    key: '$PartnerListNZLC2$',
    value: 'NZLC — New Zealand Language Center'
  },
  {
    key: '$PartnerListAu2$',
    value: 'English, Exam prep., High school prep., Au pair, Internships, Teacher training'
  },
  {
    key: '$PartnerListZealand2$',
    value: 'New Zealand'
  },
  {
    key: '$PartnerListSchoolSeventh2$',
    value: 'School'
  },
  {
    key: '$PartnerListAccent2$',
    value: 'Accent Français'
  },
  {
    key: '$PartnerListFrench2$',
    value: 'French, Exam prep., University prep., Teacher training'
  },
  {
    key: '$PartnerListFrance2$',
    value: 'France'
  },
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}