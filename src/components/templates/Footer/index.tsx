import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../redux/TemplatesReducer/types';

interface IFooter {
  id: number;
  description: string;
  style: string;
  path: string;
  functionId?: string;
}

const CONTACTS: IFooter[] = [
  {
    id: 1,
    description: "$ContactsNum$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterContacts1$"
  },
  {
    id: 2,
    description: "$ContactsEmail$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterContacts2$"
  },
  {
    id: 3,
    description: "$ContactsAddress$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterContacts3$"
  },
]

const EDUCATION: IFooter[] = [
  {
    id: 1,
    description: "$EducationMedicine$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterEducation1$"
  },
  {
    id: 2,
    description: "$EducationIT$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterEducation2$"
  },
  {
    id: 3,
    description: "$EducationBusiness$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterEducation3$"
  },
]

const CLINICS: IFooter[] = [
  {
    id: 1,
    description: "$ClinicsLazmed$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterClinics1$"
  },
  {
    id: 2,
    description: "$ClinicsDocClinic$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterClinics2$"
  },
  {
    id: 3,
    description: "$ClinicsDocHospital$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterClinics3$"
  },
  {
    id: 4,
    description: "$ClinicsOftolmalik$",
    style: "text-[#ffffff] text-[16px] font-[400] leading-[16px] transition duration-[0.3s] ease-in-out hover:text-[#B7ADAD]",
    path: "",
    functionId: "$funcFooterClinics4$"
  },
]

interface INetwork {
  id: number;
  img: string;
  description: string;
  style: string;
  path: string;
  functionId: string
}

const NETWORKS: INetwork[] = [
  {
    id: 1,
    img: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header3.svg",
    description: "$NetworksFC$",
    style: "w-[40px] h-[40px] w-[100%] h-[30px] transition duration-[0.3s] ease-in-out hover:scale-[1.1]",
    path: "/",
    functionId: "$funcFooterNetworks1$"
  },
  {
    id: 2,
    img: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header4.svg",
    description: "$NetworksIN$",
    style: "w-[40px] h-[40px] w-[100%] h-[30px] transition duration-[0.3s] ease-in-out hover:scale-[1.1]",
    path: "/",
    functionId: "$funcFooterNetworks2$"
  },
  {
    id: 3,
    img: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header5.svg",
    description: "$NetworksVI$",
    style: "w-[40px] h-[40px] w-[100%] h-[30px] transition duration-[0.3s] ease-in-out hover:scale-[1.1]",
    path: "/",
    functionId: "$funcFooterNetworks3$"
  },
  {
    id: 4,
    img: "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header6.svg",
    description: "$NetworksWA$",
    style: "w-[40px] h-[40px] w-[100%] h-[30px] transition duration-[0.3s] ease-in-out hover:scale-[1.1]",
    path: "/",
    functionId: "$funcFooterNetworks4$"
  },
]


const Layout = ({ ...props }) => {
  return (
    <div id="footer" className="text-[#ffffff] bg-[#01018C] pt-[40px] pb-[50px]" {...props}>
      <div className="max-w-[90%] w-[100%] m-[auto]">
        <div className="flex items-start justify-between flex-wrap gap-[30px] lg:flex-nowrap">
          <div className="w-[100%] sm:w-[45%] lg:w-[23%]">
            <h3 className="text-[20px] not-italic font-[600] mb-[15px] lg:mb-[34px] leading-[28px]">$FTContacts$</h3>
            <ul className="flex flex-col gap-[10px] sm:gap-[22px]">
              {
                CONTACTS.map(({ id, description, style, functionId }) =>
                  <li key={id} id={functionId}>
                    <a className={style}>{description}</a>
                  </li>
                )
              }
            </ul>
          </div>

          <div className="w-[100%] sm:w-[45%] lg:w-[23%]">
            <h3 className="text-[20px] not-italic font-[600] mb-[15px] lg:mb-[34px] leading-[28px]">$FTEducational$</h3>
            <ul className="flex flex-col gap-[10px] sm:gap-[22px]">
              {
                EDUCATION.map(({ id, description, style, functionId }) =>
                  <li key={id} id={functionId}>
                    <a className={style}>{description}</a>
                  </li>
                )
              }
            </ul>
          </div>

          <div className="w-[100%] sm:w-[45%] lg:w-[23%]">
            <h3 className="text-[20px] not-italic font-[600] mb-[15px] lg:mb-[34px] leading-[28px]">$FTClinics$</h3>
            <ul className="flex flex-col gap-[10px] sm:gap-[22px]">
              {
                CLINICS.map(({ id, description, style, functionId }) =>
                  <li key={id} id={functionId}>
                    <a className={style}>{description}</a>
                  </li>
                )
              }
            </ul>
          </div>

          <div className="w-[100%] sm:w-[45%] lg:w-[23%]">
            <h3 className="text-[20px] not-italic font-[600] mb-[15px] lg:mb-[32px] leading-[28px]">$FTNetworks$</h3>
            <div className="flex justify-between sm:justify-start items-start gap-[16px]">
              {
                NETWORKS.map(({ id, description, style, img, functionId }) =>
                  <a key={id} id={functionId}>
                    <img className={style} src={img} alt={description} />
                  </a>
                )
              }
            </div>
            <div className="hidden sm:block bg-[#ffffff] py-[20px] px-[30px] rounded-[500px] mt-[38px] cursor-pointer w-max">
              <img className="w-[90%] lg:max-w-[150px] h-[auto]" src="$FTLogo$" alt="Salymbekov University" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-[38px]">
          <div className="flex items-center gap-[30px] not-italic text-[#B5B7C0] text-[16px] font-[400] leading-[16px]">
            <p className=">$FTSalymbekov$</p>
            <p className=">$FTPrivacy$</p>
          </div>
        </div>
      </div>
    </div>
  )
};


const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$ContactsNum$',
    value: '+996 709 213-321'
  },
  {
    key: '$ContactsEmail$',
    value: 'info@salymbekov.com'
  },
  {
    key: '$ContactsAddress$',
    value: '720054 улица Фучика, 3'
  },
  {
    key: '$EducationMedicine$',
    value: 'Международный факультет Медицины'
  },
  {
    key: '$EducationIT$',
    value: 'Международный колледж IT и бизнеса'
  },
  {
    key: '$EducationBusiness$',
    value: 'Бизнес школа Салымбекова'
  },
  {
    key: '$ClinicsLazmed$',
    value: 'Лазмед'
  },
  {
    key: '$ClinicsDocClinic$',
    value: 'DOC university clinic'
  },
  {
    key: '$ClinicsDocHospital$',
    value: 'DOC university hospital'
  },
  {
    key: '$ClinicsOftolmalik$',
    value: 'Дордой офтмальмик сервис'
  },
  {
    key: '$NetworksFC$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header3.svg'
  },
  {
    key: '$NetworksIN$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header4.svg'
  },
  {
    key: '$NetworksVI$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header5.svg'
  },
  {
    key: '$NetworksWA$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header6.svg'
  },
  {
    key: '$FTContacts$',
    value: 'Наши контакты'
  },
  {
    key: '$FTEducational$',
    value: 'Образовательные центры'
  },
  {
    key: '$FTClinics$',
    value: 'Наши клиники'
  },
  {
    key: '$FTNetworks$',
    value: 'Мы в соц. сетях'
  },
  {
    key: '$FTSalymbekov$',
    value: '© 2023 - Salymbaev University'
  },
  {
    key: '$FTPrivacy$',
    value: 'Privacy Policy'
  },
  {
    key: '$FTLogo$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/header1.png'
  }
]


const functions: ITemplateFunction[] = [
  {
    id: '$funcFooterContacts1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterContacts2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterContacts3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterEducation1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterEducation2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterEducation3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterClinics1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterClinics2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterClinics3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterClinics4$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterNetworks1$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterNetworks2$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterNetworks3$',
    func: {
      type: 'link',
      to: '/'
    }
  },
  {
    id: '$funcFooterNetworks4$',
    func: {
      type: 'link',
      to: '/'
    }
  },
]

export default {
  layout: <Layout />,
  placeholders,
  functions,
}
