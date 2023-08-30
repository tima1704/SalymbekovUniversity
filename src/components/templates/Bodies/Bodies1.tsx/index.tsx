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
    description: "$RectorList1$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 2,
    description: "$RectorList2$",
    style: "relative text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] row-span-2 h-[180px]",
    image: "$RectorArrow1$",
    imageStyle: "absolute bottom-[-30px]"
  },
  {
    id: 3,
    description: "$RectorList3$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 4,
    description: "$RectorList4$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 5,
    description: "$RectorList5$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px]",
  },
  {
    id: 6,
    description: "$RectorList6$",
    style: "text-[#000000] text-[18px] not-italic font-[500] leading-[22px] flex items-center justify-center p-[20px] border-[2px] border-[#B5B7C0] border-solid rounded-[15px] text-center w-[100%] h-[76px] col-start-2",
  }
];

interface IBodies {
  id: number;
  description: string;
  style: string;
}

interface IBlock {
  description: string;
  style: string;
  arrow: string;
  styleArrow: string;
}

interface IBodiesListItem extends IBodies {
  leftBlock: IBlock;
  rightBlock: IBlock;
}

const BodiesList: IBodiesListItem[] = [
  {
    id: 1,
    description: "$BodiesListDirectorsInstitutes$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[30px] py-[40px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesListManager1$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] left-[-130px]",
      arrow: "$BodiesListArrow1$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
    rightBlock: {
      description: "$BodiesListDepartments1$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] right-[-130px]",
      arrow: "$BodiesListArrow2$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
  },
  {
    id: 2,
    description: "$BodiesListDeansFaculties$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[30px] py-[40px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesListManager2$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] left-[-130px]",
      arrow: "$BodiesListArrow3$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
    rightBlock: {
      description: "$BodiesListDepartments2$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] right-[-130px]",
      arrow: "$BodiesListArrow4$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
  },
  {
    id: 3,
    description: "$BodiesListCenterDirectors$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[30px] py-[40px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesListManager3$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] left-[-130px]",
      arrow: "$BodiesListArrow5$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
    rightBlock: {
      description: "$BodiesListDepartments3$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] right-[-130px]",
      arrow: "$BodiesListArrow6$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
  },
  {
    id: 4,
    description: "$BodiesListHeadDepartments$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[30px] py-[40px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesListManager4$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] left-[-130px]",
      arrow: "$BodiesListArrow7$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
    rightBlock: {
      description: "$BodiesListDepartments4$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] right-[-130px]",
      arrow: "$BodiesListArrow8$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
  },
  {
    id: 5,
    description: "$BodiesListBranchDirectors$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[30px] py-[40px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesListManager5$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] left-[-130px]",
      arrow: "$BodiesListArrow9$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
    rightBlock: {
      description: "$BodiesListDepartments5$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] right-[-130px]",
      arrow: "$BodiesListArrow10$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
  },
  {
    id: 6,
    description: "$BodiesListCollegePrincipals$",
    style: "flex items-center justify-center text-center text-[#000000] text-[17px] font-[500] not-italic leading-[21px] border-[2px] border-solid border-[#E0A4C5] rounded-[15px] px-[30px] py-[40px] w-[100%] h-[120px]",
    leftBlock: {
      description: "$BodiesListManager6$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] left-[-130px]",
      arrow: "$BodiesListArrow11$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
    rightBlock: {
      description: "$BodiesListDepartments6$",
      style: "whitespace-nowrap flex items-center justify-center text-center text-[#000000] text-[17px] not-italic font-[500] leading-[21px] rotate-[-90deg] border-[2px] border-solid border-[#B5B7C0] py-[26px] w-[340px] rounded-[15px] absolute top-[90px] right-[-130px]",
      arrow: "$BodiesListArrow12$",
      styleArrow: "absolute right-[-8%] rotate-[90deg]"
    },
  },
]

const Layout = () => {
  return (
    <div className="py-[30px] md:py-[42px]">
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <h2 className="text-center text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[36px]">
          $BodiesTitle$
        </h2>
        <ul className="flex flex-col sm:grid sm:grid-cols-3 gap-[32px] mt-[30px] mb-[40px] md:mt-[40px] md:mb-[32px]">
          {
            RECTOR.map(({ id, description, style, image, imageStyle }) =>
              <li key={id} className={style}>
                {description}
                {
                  image && <img className={imageStyle} src={image} alt="Arrow" />
                }
              </li>
            )
          }
        </ul>
        <div className="flex flex-wrap gap-y-[30px] lg:gap-y-[0] justify-between overflow-hidden">
          {
            BodiesList.map(({ id, description, style, leftBlock, rightBlock }) =>
              <div key={id} className="w-[100%] sm:w-[30%] lg:w-[15%]">
                <div className={style}>
                  {description}
                </div>
                <div className="relative flex mt-[70px] py-[150px]">
                  <div className={leftBlock.style}>
                    {leftBlock.description}
                    <img className={leftBlock.styleArrow} src={leftBlock.arrow} alt="Arrow" />
                  </div>
                  <div className={rightBlock.style}>
                    {rightBlock.description}
                    <img className={rightBlock.styleArrow} src={rightBlock.arrow} alt="Arrow" />
                  </div>
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
    key: '$RectorList1$',
    value: 'Приемная комиссия'
  },
  {
    key: '$RectorList2$',
    value: 'Ректор'
  },
  {
    key: '$RectorList3$',
    value: 'Ученый Совет'
  },
  {
    key: '$RectorList4$',
    value: 'Департамент развития'
  },
  {
    key: '$RectorList5$',
    value: 'Совет по качеству'
  },
  {
    key: '$RectorList6$',
    value: 'Проректоры'
  },
  {
    key: '$RectorArrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListDirectorsInstitutes$',
    value: 'Директоры Институтов'
  },
  {
    key: '$BodiesListManager1$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesListDepartments1$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesListDeansFaculties$',
    value: 'Деканы факультетов'
  },
  {
    key: '$BodiesListManager2$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesListDepartments2$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesListCenterDirectors$',
    value: 'Директоры центров'
  },
  {
    key: '$BodiesListManager3$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesListDepartments3$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesListHeadDepartments$',
    value: 'Заведующими кафедрами'
  },
  {
    key: '$BodiesListManager4$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesListDepartments4$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesListBranchDirectors$',
    value: 'Директоры филиалов'
  },
  {
    key: '$BodiesListManager5$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesListDepartments5$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesListCollegePrincipals$',
    value: 'Директоры колледжей'
  },
  {
    key: '$BodiesListManager6$',
    value: 'Менеджер качества'
  },
  {
    key: '$BodiesListDepartments6$',
    value: 'Малые отделы качества'
  },
  {
    key: '$BodiesListArrow1$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow2$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow3$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow4$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow5$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow6$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow7$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow8$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow9$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow10$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow11$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
  {
    key: '$BodiesListArrow12$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.amazonaws.com/images/BodiesArrow.png'
  },
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}