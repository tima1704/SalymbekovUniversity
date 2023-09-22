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
      description: "$PartnerListSchool$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListKaplan$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListEnglish$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListInternational$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSecond$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListEC$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListExam$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] p bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMalta$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px]  bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolThird$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListMalvern$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListAcademic$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListUK$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListUniversity$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListGeneva$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description: "$PartnerListCourses$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListSwitzerland$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolFourth$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListSSLC$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
      path: "/",
    },
    {
      id: 3,
      description:
        "$PartnerListEAPEnglish$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListCanada$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolFifth$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListELA$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListPrep$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMaltaSecond$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListInstitute$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description:
        "$PartnerListMDIS$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListDiplomas$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListMalaysia$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSixth$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListNZLC$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description:
        "$PartnerListAu$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListZealand$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#E3E3E7] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
  [
    {
      id: 1,
      description: "$PartnerListSchoolSeventh$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 2,
      description: "$PartnerListAccent$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
        path: "/"
    },
    {
      id: 3,
      description: "$PartnerListFrench$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
    {
      id: 4,
      description: "$PartnerListFrance$",
      style:
        "text-[#202124] text-[10px] px-[10px] lg:px-[20px] py-[18px] lg:text-[23px] font-['Inter'] font-[500] leading-[15px] lg:leading-[33px] bg-[#FFF] border-[1px] border-solid border-[#D3D4DB]",
    },
  ],
];

const Layout = ({ ...props }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-[40px] max-w-[90%] lg:max-w-[1180px] m-auto pb-[20px] lg:pb-[84px] pt-[20px] lg:pt-[80px]" { ...props }>
      <h2 className="text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
        $PartnersTable$
      </h2>

      <table>
        <thead>
          <tr>
            <th className="text-[#202124] py-[13px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tl-[13px]">
              $TypeTable$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $NameOfTable$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-r-[1px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7]">
              $ProgrammCoursesTable$
            </th>
            <th className="text-[#202124] py-[20px] text-[15px] lg:text-[23px] font-['Inter'] font-[600] leading-[15px] lg:leading-[33px] border-b-[1px] border-solid border-[#D3D4DB] bg-[#E3E3E7] rounded-tr-[13px]">
              $CountriesTable$
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
    key: '$PartnersTable$',
    value: 'Список партнеров'
  },
  {
    key: '$TypeTable$',
    value: 'Тип'
  },
  {
    key: '$NameOfTable$',
    value: 'Название'
  },
  {
    key: '$ProgrammCoursesTable$',
    value: 'Программы/Курсы'
  },
  {
    key: '$CountriesTable$',
    value: 'Страны'
  },
  {
    key: '$PartnerListSchool$',
    value: 'School'
  },  
  {
    key: '$PartnerListKaplan$',
    value: 'Kaplan International'
  },
  {
    key: '$PartnerListEnglish$',
    value: 'English, Exams Prep., University pathways'
  },
  {
    key: '$PartnerListInternational$',
    value: 'International'
  },
  {
    key: '$PartnerListSchoolSecond$',
    value: 'School'
  },
  {
    key: '$PartnerListEC$',
    value: 'EC English Language Centres'
  },
  {
    key: '$PartnerListExam$',
    value: 'English, Exam prep., Academic year/semester'
  },
  {
    key: '$PartnerListMalta$',
    value: 'Malta, USA, Canada, UK, South Africa'
  },
  {
    key: '$PartnerListSchoolThird$',
    value: 'School'
  },
  {
    key: '$PartnerListMalvern$',
    value: 'Malvern House'
  },
  {
    key: '$PartnerListAcademic$',
    value: 'English, Exam prep., Academic year/semester, NCUK pathway'
  },
  {
    key: '$PartnerListUK$',
    value: 'UK'
  },
  {
    key: '$PartnerListUniversity$',
    value: 'University'
  },
  {
    key: '$PartnerListGeneva$',
    value: 'Geneva Business School'
  },
  {
    key: '$PartnerListCourses$',
    value: 'Courses, Bachelor, Master, PhD'
  },
  {
    key: '$PartnerListSwitzerland$',
    value: 'Switzerland, Spain, Russia, Kazakhstan, UAE, Saudi Arabia'
  },
  {
    key: '$PartnerListSchoolFourth$',
    value: 'School'
  },
  {
    key: '$PartnerListSSLC$',
    value: 'SSLC — Sprott Shaw Language College'
  },

  {
    key: '$PartnerListEAPEnglish$',
    value: 'English, Exam prep., EAPEnglish for academic preparation pathway'
  },
  {
    key: '$PartnerListCanada$',
    value: 'Canada'
  },
  {
    key: '$PartnerListSchoolFifth$',
    value: 'School'
  },
  {
    key: '$PartnerListELA$',
    value: 'ELA — English Language Academy Malta'
  },
  {
    key: '$PartnerListPrep$',
    value: 'English, Exam prep.'
  },
  {
    key: '$PartnerListMaltaSecond$',
    value: 'Malta'
  },
  {
    key: '$PartnerListInstitute$',
    value: 'Institute'
  },
  {
    key: '$PartnerListMDIS$',
    value: 'MDIS Malaysia — Management Development Institute of Singapore'
  },
  {
    key: '$PartnerListDiplomas$',
    value: 'Diplomas, Degree programs'
  },
  {
    key: '$PartnerListMalaysia$',
    value: 'Malaysia'
  },
  {
    key: '$PartnerListSchoolSixth$',
    value: 'School'
  },
  {
    key: '$PartnerListNZLC$',
    value: 'NZLC — New Zealand Language Center'
  },
  {
    key: '$PartnerListAu$',
    value: 'English, Exam prep., High school prep., Au pair, Internships, Teacher training'
  },
  {
    key: '$PartnerListZealand$',
    value: 'New Zealand'
  },
  {
    key: '$PartnerListSchoolSeventh$',
    value: 'School'
  },
  {
    key: '$PartnerListAccent$',
    value: 'Accent Français'
  },
  {
    key: '$PartnerListFrench$',
    value: 'French, Exam prep., University prep., Teacher training'
  },
  {
    key: '$PartnerListFrance$',
    value: 'France'
  },
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}