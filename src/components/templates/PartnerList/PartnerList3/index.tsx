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
      description: "$PartnerListSchool3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListKaplan3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListEnglish3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 6,
      description: "$PartnerListInternational3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSecond3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListEC3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListExam3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] p bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMalta3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolThird3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListMalvern3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListAcademic3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListUK3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListUniversity3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListGeneva3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListCourses3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListSwitzerland3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolFourth3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListSSLC3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description:
        "$PartnerListEAPEnglish3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListCanada3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolFifth3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListELA3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListPrep3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMaltaSecond3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListInstitute3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description:
        "$PartnerListMDIS3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListDiplomas3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMalaysia3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSixth3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListNZLC3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description:
        "$PartnerListAu3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListZealand3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSeventh3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListAccent3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListFrench3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListFrance3$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
];

const Layout = ({ ...props }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-[40px] max-w-[90%] lg:max-w-[1180px] m-auto pb-[20px] lg:pb-[84px] pt-[20px] lg:pt-[80px]" { ...props }>
      <h2 className="text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
        $PartnersTable3$
      </h2>

      <table>
        <thead>
          <tr>
            <th className="text-[#202124] py-[13px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tl-[13px]">
              $TypeTable3$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $NameOfTable3$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $ProgrammCoursesTable3$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tr-[13px]">
              $CountriesTable3$
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
    key: '$PartnersTable3$',
    value: 'Список партнеров'
  },
  {
    key: '$TypeTable3$',
    value: 'Тип'
  },
  {
    key: '$NameOfTable3$',
    value: 'Название'
  },
  {
    key: '$ProgrammCoursesTable3$',
    value: 'Программы/Курсы'
  },
  {
    key: '$CountriesTable3$',
    value: 'Страны'
  },
  {
    key: '$PartnerListSchool3$',
    value: 'School'
  },  
  {
    key: '$PartnerListKaplan3$',
    value: 'Kaplan International'
  },
  {
    key: '$PartnerListEnglish3$',
    value: 'English, Exams Prep., University pathways'
  },
  {
    key: '$PartnerListInternational3$',
    value: 'International'
  },
  {
    key: '$PartnerListSchoolSecond3$',
    value: 'School'
  },
  {
    key: '$PartnerListEC3$',
    value: 'EC English Language Centres'
  },
  {
    key: '$PartnerListExam3$',
    value: 'English, Exam prep., Academic year/semester'
  },
  {
    key: '$PartnerListMalta3$',
    value: 'Malta, USA, Canada, UK, South Africa'
  },
  {
    key: '$PartnerListSchoolThird3$',
    value: 'School'
  },
  {
    key: '$PartnerListMalvern3$',
    value: 'Malvern House'
  },
  {
    key: '$PartnerListAcademic3$',
    value: 'English, Exam prep., Academic year/semester, NCUK pathway'
  },
  {
    key: '$PartnerListUK3$',
    value: 'UK'
  },
  {
    key: '$PartnerListUniversity3$',
    value: 'University'
  },
  {
    key: '$PartnerListGeneva3$',
    value: 'Geneva Business School'
  },
  {
    key: '$PartnerListCourses3$',
    value: 'Courses, Bachelor, Master, PhD'
  },
  {
    key: '$PartnerListSwitzerland3$',
    value: 'Switzerland, Spain, Russia, Kazakhstan, UAE, Saudi Arabia'
  },
  {
    key: '$PartnerListSchoolFourth3$',
    value: 'School'
  },
  {
    key: '$PartnerListSSLC3$',
    value: 'SSLC — Sprott Shaw Language College'
  },

  {
    key: '$PartnerListEAPEnglish3$',
    value: 'English, Exam prep., EAPEnglish for academic preparation pathway'
  },
  {
    key: '$PartnerListCanada3$',
    value: 'Canada'
  },
  {
    key: '$PartnerListSchoolFifth3$',
    value: 'School'
  },
  {
    key: '$PartnerListELA3$',
    value: 'ELA — English Language Academy Malta'
  },
  {
    key: '$PartnerListPrep3$',
    value: 'English, Exam prep.'
  },
  {
    key: '$PartnerListMaltaSecond3$',
    value: 'Malta'
  },
  {
    key: '$PartnerListInstitute3$',
    value: 'Institute'
  },
  {
    key: '$PartnerListMDIS3$',
    value: 'MDIS Malaysia — Management Development Institute of Singapore'
  },
  {
    key: '$PartnerListDiplomas3$',
    value: 'Diplomas, Degree programs'
  },
  {
    key: '$PartnerListMalaysia3$',
    value: 'Malaysia'
  },
  {
    key: '$PartnerListSchoolSixth3$',
    value: 'School'
  },
  {
    key: '$PartnerListNZLC3$',
    value: 'NZLC — New Zealand Language Center'
  },
  {
    key: '$PartnerListAu3$',
    value: 'English, Exam prep., High school prep., Au pair, Internships, Teacher training'
  },
  {
    key: '$PartnerListZealand3$',
    value: 'New Zealand'
  },
  {
    key: '$PartnerListSchoolSeventh3$',
    value: 'School'
  },
  {
    key: '$PartnerListAccent3$',
    value: 'Accent Français'
  },
  {
    key: '$PartnerListFrench3$',
    value: 'French, Exam prep., University prep., Teacher training'
  },
  {
    key: '$PartnerListFrance3$',
    value: 'France'
  },
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}