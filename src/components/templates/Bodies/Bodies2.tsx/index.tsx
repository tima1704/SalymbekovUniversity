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
    description: "$Rector2List1$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 2,
    description: "$Rector2List2$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 3,
    description: "$Rector2List3$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 4,
    description: "$Rector2List4$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 5,
    description: "$Rector2List5$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 6,
    description: "$Rector2List6$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[34px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
];

interface IBodies {
  id: number;
  description: string;
  style: string;
  arrow: string;
  arrowStyle: string;
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
    description: "$BodiesList2DirectorsInstitutes$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[60px] py-[40px] w-[100%] h-[120px]",
    arrow: "$BodiesList2Arrow1$",
    arrowStyle: "m-auto mb-[10px] mt-[20px]",
    leftBlock: {
      description: "$BodiesList2Manager1$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px] mb-[25px]",
    },
    rightBlock: {
      description: "$BodiesList2Departments1$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px]",
    },
  },
  {
    id: 2,
    description: "$BodiesList2DeansFaculties$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[60px] py-[40px] w-[100%] h-[120px]",
    arrow: "$BodiesList2Arrow2$",
    arrowStyle: "m-auto mb-[10px] mt-[20px]",
    leftBlock: {
      description: "$BodiesList2Manager2$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px] mb-[25px]",
    },
    rightBlock: {
      description: "$BodiesList2Departments2$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px]",
    },
  },
  {
    id: 3,
    description: "$BodiesList2CenterDirectors$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[60px] py-[40px] w-[100%] h-[120px]",
    arrow: "$BodiesList2Arrow3$",
    arrowStyle: "m-auto mb-[10px] mt-[20px]",
    leftBlock: {
      description: "$BodiesList2Manager3$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px] mb-[25px]",
    },
    rightBlock: {
      description: "$BodiesList2Departments3$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px]",
    },
  },
  {
    id: 4,
    description: "$BodiesList2HeadDepartments$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[60px] py-[40px] w-[100%] h-[120px]",
    arrow: "$BodiesList2Arrow4$",
    arrowStyle: "m-auto mb-[10px] mt-[20px]",
    leftBlock: {
      description: "$BodiesList2Manager4$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px] mb-[25px]",
    },
    rightBlock: {
      description: "$BodiesList2Departments4$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px]",
    },
  },
  {
    id: 5,
    description: "$BodiesList2BranchDirectors$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[60px] py-[40px] w-[100%] h-[120px]",
    arrow: "$BodiesList2Arrow5$",
    arrowStyle: "m-auto mb-[10px] mt-[20px]",
    leftBlock: {
      description: "$BodiesList2Manager5$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px] mb-[25px]",
    },
    rightBlock: {
      description: "$BodiesList2Departments5$",
      style: " flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px]",
    },
  },
  {
    id: 6,
    description: "$BodiesList2CollegePrincipals$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[60px] py-[40px] w-[100%] h-[120px]",
    arrow: "$BodiesList2Arrow6$",
    arrowStyle: "m-auto mb-[10px] mt-[20px]",
    leftBlock: {
      description: "$BodiesList2Manager6$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px] mb-[25px]",
    },
    rightBlock: {
      description: "$BodiesList2Departments6$",
      style: "flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[100%] rounded-[15px]",
    },
  },
]

const Layout = () => {
  return (
    <div className="py-[30px] md:py-[70px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-center text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
          $Bodies2Title$
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px] mt-[30px] mb-[40px] md:mt-[70px] md:mb-[76px]">
          {
            RECTOR.map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[78px] mt-[70px]">
          {
            BodiesList.map(({ id, description, style, arrow, arrowStyle, leftBlock, rightBlock }) =>
              <div key={id}>
                <div className={style}>
                  {description}
                </div>
                <img className={arrowStyle} src={arrow} alt={description} />
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
    key: '$Rector2List1$',
    value: 'Приемная комиссия'
  },
  {
    key: '$Rector2List2$',
    value: 'Ректор'
  },
  {
    key: '$Rector2List3$',
    value: 'Ученый Совет'
  },
  {
    key: '$Rector2List4$',
    value: 'Департамент развития'
  },
  {
    key: '$Rector2List5$',
    value: 'Совет по качеству'
  },
  {
    key: '$Rector2List6$',
    value: 'Проректоры'
  },
  {
    key: '$BodiesList2DirectorsInstitutes$',
    value: 'Директоры Институтов'
  },
  {
    key: '$BodiesList2Manager1$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList2Departments1$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList2DeansFaculties$',
    value: 'Деканы факультетов'
  },
  {
    key: '$BodiesList2Manager2$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList2Departments2$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList2CenterDirectors$',
    value: 'Директоры центров'
  },
  {
    key: '$BodiesList2Manager3$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList2Departments3$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList2HeadDepartments$',
    value: 'Заведующими кафедрами'
  },
  {
    key: '$BodiesList2Manager4$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList2Departments4$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList2BranchDirectors$',
    value: 'Директоры филиалов'
  },
  {
    key: '$BodiesList2Manager5$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList2Departments5$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList2CollegePrincipals$',
    value: 'Директоры колледжей'
  },
  {
    key: '$BodiesList2Manager6$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesList2Departments6$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesList2Arrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesList2Arrow2$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesList2Arrow3$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesList2Arrow4$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesList2Arrow5$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesList2Arrow6$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$Bodies2Title$',
    value: 'Органы отвечающие за образовательную и научную деятельность Университета'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}