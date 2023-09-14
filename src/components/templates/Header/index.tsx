import React from "react";
import { ITemplateFunction, ITemplatePlaceholder } from '../../../redux/TemplatesReducer/types'

interface IHeader {
  id: number;
  img?: string;
  description: string;
  style: string;
  functionId: string;
}

interface INetwork {
  id: number
  img: string
  style: string
  link: string
}

const LANGUAGES: IHeader[] = [
  {
    id: 1,
    description: "$HeadLangTxtKG$",
    style: "text-[#ffffff] text-[100%] not-italic font-[500] leading-[16px] cursor-pointer",
    functionId: "funcHeaderLanguageKG"
  },
  {
    id: 2,
    description: "$HeadLangTxtRU$",
    style: "text-[#ffffff] text-[100%] not-italic font-[500] leading-[16px] cursor-pointer",
    functionId: "funcHeaderLanguageRU"
  },
  {
    id: 3,
    description: "$HeadLangTxtEN$",
    style: "text-[#ffffff] text-[100%] not-italic font-[500] leading-[16px] cursor-pointer",
    functionId: "funcHeaderLanguageEN"
  },
]

const NETWORKS: INetwork[] = [
  {
    id: 1,
    img: "$HeaderNetworkFB$",
    style: "w-[30px] h-[30px]",
    link: 'https://facebook.com'
  },
  {
    id: 2,
    img: "$HeaderNetworkIN$",
    style: "w-[30px] h-[30px]",
    link: 'https://instagram.com'
  },
  {
    id: 3,
    img: "$HeaderNetworkVI$",
    style: "w-[30px] h-[30px]",
    link: 'https://youtube.com'
  },
  {
    id: 4,
    img: "$HeaderNetworkWS$",
    style: "w-[30px] h-[30px]",
    link: 'https://ru.wikipedia.org/wiki/WhatsApp'
  },
]


const Layout = ({ ...props }) => {
  return (
    <header className="flex bg-[#01018C]" {...props}>

      <div className="flex justify-center text-right w-[23%] py-[30px] bg-[#ffffff] rounded-e-[500px]">
        <img className="cursor-pointer" src="$HeaderBrandLogo$" alt="Salymbekov University" />
      </div>

      <div className="flex items-center justify-around max-w-[90%] w-[90%] m-[auto]">
        <div className="flex items-center gap-[20px] py-[30px] text-[#ffffff] text-[20px] not-italic font-[500] leading-[16px]">
          <h3 className="text-[20px] font-[500]">$HDContacts$</h3>
          <p className="flex items-center">
            <img src="$HeaderTelephoneLogo$" alt="Telephone" />
            $HDNum$
          </p>

          <div className="flex items-center gap-[15px]">
            {
              NETWORKS.map(({ id, img, style, link }) =>
                <a key={id} href={link}>
                  <img className={style} src={img} alt={link} />
                </a>
              )
            }
          </div>
        </div>

        <ul className="flex items-center gap-[25px] py-[30px]">
          {
            LANGUAGES.map(({ id, description, style }) =>
              <li key={id} className={style}>
                {description}
              </li>
            )
          }
        </ul>

      </div>
    </header>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$HeaderBrandLogo$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header1.png',
  },
  {
    key: '$HeaderTelephoneLogo$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header2.svg',
  },
  {
    key: '$HeadLangTxtKG$',
    value: 'KG',
  },
  {
    key: '$HeadLangTxtRU$',
    value: 'RUS',
  },
  {
    key: '$HeadLangTxtEN$',
    value: 'ENG',
  },
  {
    key: '$HeaderNetworkFB$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header3.svg',
  },
  {
    key: '$HeaderNetworkIN$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header4.svg',
  },
  {
    key: '$HeaderNetworkVI$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header5.svg',
  },
  {
    key: '$HeaderNetworkWS$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header6.svg',
  },
  {
    key: '$HDContacts$',
    value: 'Our Contacts',
  },
  {
    key: '$HDNum$',
    value: '+996700123456',
  },
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}