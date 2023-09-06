import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IRector {
  id: number;
  description: string;
  style: string;
  image?: string;
  imageStyle?: string;
}

const RECTOR: IRector[] = [
  {
    id: 1,
    description: "$Rector3List1$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] sm:w-[32%] h-[76px]",
  },
  {
    id: 2,
    description: "$Rector3List2$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] sm:w-[32%] h-[76px]",
  },
  {
    id: 3,
    description: "$Rector3List3$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] sm:w-[32%] h-[76px]",
  },
  {
    id: 4,
    description: "$Rector3List4$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] sm:w-[32%] h-[76px]",
  },
  {
    id: 5,
    description: "$Rector3List5$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] sm:w-[32%] h-[76px]",
  },
  {
    id: 6,
    description: "$Rector3List6$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] sm:w-[32%] h-[76px]",
  },
];

interface IBodies {
  id: number;
  description: string;
  style: string;
}

interface IBlock {
  description: string;
  style: string;
}

interface IBodiesListItem extends IBodies {
  leftBlock: IBlock;
  rightBlock: IBlock;
}

const BodiesList: IBodiesListItem[] = [
  {
    id: 1,
    description: "$BodiesList3DirectorsInstitutes$",
    style: "bg-[#E0A4C4] flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[55px] py-[49px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesList3Manager1$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
    rightBlock: {
      description: "$BodiesList3Departments1$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
  },
  {
    id: 2,
    description: "$BodiesList3DeansFaculties$",
    style: "bg-[#E0A4C4] flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[55px] py-[49px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesList3Manager2$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
    rightBlock: {
      description: "$BodiesList3Departments2$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
  },
  {
    id: 3,
    description: "$BodiesList3CenterDirectors$",
    style: "bg-[#E0A4C4] flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[55px] py-[49px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesList3Manager3$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
    rightBlock: {
      description: "$BodiesList3Departments3$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
  },
  {
    id: 4,
    description: "$BodiesList3HeadDepartments$",
    style: "bg-[#E0A4C4] flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[55px] py-[49px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesList3Manager4$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
    rightBlock: {
      description: "$BodiesList3Departments4$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
  },
  {
    id: 5,
    description: "$BodiesList3BranchDirectors$",
    style: "bg-[#E0A4C4] flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[55px] py-[49px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesList3Manager5$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
    rightBlock: {
      description: "$BodiesList3Departments5$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
  },
  {
    id: 6,
    description: "$BodiesList3CollegePrincipals$",
    style: "bg-[#E0A4C4] flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[55px] py-[49px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesList3Manager6$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
    rightBlock: {
      description: "$BodiesList3Departments6$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[38px] w-[90%] m-auto",
    },
  },
]

const Layout = () => {
  return (
    <div className="py-[30px] md:py-[70px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-center text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
          $Bodies3Title$
        </h2>
        <div className="mt-[30px] mb-[40px] sm:mt-[70px] sm:mb-[76px]">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-[35px]">
            {
              RECTOR.slice(0, 3).map(({ id, description, style }) =>
                <li key={id} className={style}>
                  {description}
                </li>
              )
            }
          </ul>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-[35px] my-[35px]">
            {
              RECTOR.slice(3, 5).map(({ id, description, style }) =>
                <li key={id} className={style}>
                  {description}
                </li>
              )
            }
          </ul>
          <ul className="flex flex-col sm:items-center justify-center gap-[35px]">
            {
              RECTOR.slice(5).map(({ id, description, style }) =>
                <li key={id} className={style}>
                  {description}
                </li>
              )
            }
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[17px] gap-y-[30px] sm:gap-y-[100px] mt-[70px]">
          {
            BodiesList.map(({ id, description, style, leftBlock, rightBlock }) =>
              <div key={id}>
                <div className={style}>
                  {description}
                </div>
                <div className={leftBlock.style}>
                  {leftBlock.description}
                </div>
                <div className={rightBlock.style}>
                  {rightBlock.description}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Rector3List1$',
    value: 'Приемная комиссия'
  },
  {
    key: '$Rector3List2$',
    value: 'Ректор'
  },
  {
    key: '$Rector3List3$',
    value: 'Ученый Совет'
  },
  {
    key: '$Rector3List4$',
    value: 'Департамент развития'
  },
  {
    key: '$Rector3List5$',
    value: 'Совет по качеству'
  },
  {
    key: '$Rector3List6$',
    value: 'Проректоры'
  },
  {
    key: '$Rector3Arrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesList3DirectorsInstitutes$',
    value: 'Директоры Институтов'
  },
  {
    key: '$BodiesList3Manager1$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList3Departments1$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList3DeansFaculties$',
    value: 'Деканы факультетов'
  },
  {
    key: '$BodiesList3Manager2$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList3Departments2$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList3CenterDirectors$',
    value: 'Директоры центров'
  },
  {
    key: '$BodiesList3Manager3$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList3Departments3$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList3HeadDepartments$',
    value: 'Заведующими кафедрами'
  },
  {
    key: '$BodiesList3Manager4$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList3Departments4$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList3BranchDirectors$',
    value: 'Директоры филиалов'
  },
  {
    key: '$BodiesList3Manager5$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList3Departments5$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList3CollegePrincipals$',
    value: 'Директоры колледжей'
  },
  {
    key: '$BodiesList3Manager6$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList3Departments6$',
    value: 'Малые отделы качества'
  },
  {
    key: '$Bodies3Title$',
    value: 'Органы отвечающие за образовательную и научную деятельность Университета'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}