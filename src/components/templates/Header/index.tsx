import React from "react";
import { ITemplatePlaceholders } from '../../../types/templates';

interface IHeader {
  id: number;
  img?: string;
  description: string;
  style: string;
  functionId: string;
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

const NETWORKS: IHeader[] = [
  {
    id: 1,
    img: "$HeaderNetworkFB$",
    description: "$HeaderNetworkTextFB$",
    style: "w-[30px] h-[30px]",
    functionId: "funcHeaderNetworkFB",
  },
  {
    id: 2,
    img: "$HeaderNetworkIN$",
    description: "$HeaderNetworkTextIN$",
    style: "w-[30px] h-[30px]",
    functionId: "funcHeaderNetworkIN",
  },
  {
    id: 3,
    img: "$HeaderNetworkVI$",
    description: "$HeaderNetworkTextVI$",
    style: "w-[30px] h-[30px]",
    functionId: "funcHeaderNetworkVI",
  },
  {
    id: 4,
    img: "$HeaderNetworkWS$",
    description: "$HeaderNetworkTextWS$",
    style: "w-[30px] h-[30px]",
    functionId: "funcHeaderNetworkWS",
  },
]


const Layout = ({...props}) => {
  return (
    <header className="flex bg-[#01018C]" {...props} data-container>

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
              NETWORKS.map(({ id, description, img, style, functionId }) =>
                <a key={id} id={functionId}>
                  <img className={style} src={img} alt={description} />
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


const placeholders: ITemplatePlaceholders[] = [
  {
    key: '$HeaderBrandLogo$',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/salymbekov-logo.png',
  },
  {
    key: '$HeaderTelephoneLogo$',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/telephone.png',
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
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/facebook.png',
  },
  {
    key: '$HeaderNetworkIN$',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/instagram.png',
  },
  {
    key: '$HeaderNetworkVI$',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/youtube.png',
  },
  {
    key: '$HeaderNetworkWS$',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/whatsapp.png',
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

const functions = [
  {
    id: 'funcHeaderNetworkFB',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: 'funcHeaderNetworkIN',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: 'funcHeaderNetworkVI',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: 'funcHeaderNetworkWS',
    func: {
      type: 'link',
      to: '/'
    }
  },
]

export default {
  layout: Layout,
  placeholders,
  functions,
}