import React from "react";
import { ITemplateFunction, ITemplatePlaceholder } from "../../../../redux/TemplatesReducer/types";


const Layout = ({ ...props }) => {
  return (
    <div className="bg-[#01018C] relative overflow-hidden rounded-b-[50px] mb-[80px]" {...props}>
      <div className="flex max-w-[90%] w-[100%] m-[auto] pt-[113px] pb-[124px]">
        <div className="text-[#ffffff] w-[56%]">
          <h1 className="text-[26px] lg:text-[36px] font-[600] leading-[30px] lg:leading-[44px] mb-[24px]">
            $SalymbekovContacts$
          </h1>
          <p className="font-['Inter'] text-[13px] lg:text-[18px] font-[400] leading-[20px] lg:leading-[28px] border-l-[4px] border-solid rounded-[2px] pl-[20px]">
            $SalymbekovContactsContent$
          </p>
        </div>
      </div>
      <div>
        <img
          className="hidden md:block absolute bottom-[0] right-[0]"
          src="$SalymbekovContactsBackground$"
          alt="Faculties"
        />
        <img
          className="block md:hidden absolute bottom-[0] right-[0]"
          src="$SalymbekovContactsSmallBackground$"
          alt="Faculties"
        />
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$SalymbekovContacts$',
    value: 'Контакты Salymbekov University'
  },
  {
    key: '$SalymbekovContactsContent$',
    value: 'Контактные данные университета Salymbekov, офис компании располагается в Бишкеке'
  },
  {
    key: '$SalymbekovContactsBackground$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/contacts1.png'
  },
  {
    key: '$SalymbekovContactsSmallBackground$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/contactsSmall.png'
  }
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
