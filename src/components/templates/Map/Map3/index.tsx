import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";

const Layout = ({ ...props }) => {
  return (
    <div
      {...props}
      id="map"
      className="mt-[80px] flex flex-col items-center justify-center lg:pl-[350px] mb-[80px] max-w-[1180px]"
    >
      <h2 className="text-[#202124] text-[28px] font-[600] leading-[36px] mb-[40px]">
        $MapWhere2$
      </h2>
      <div className="w-[100%]">
        <iframe
          className="w-[100%] h-[600px] border-[0] rounded-[10px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3783770342079!2d74.59988456838221!3d42.84393614561879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb75b0941713d%3A0xe25c88f74c059a30!2sSalymbekov%20Business%20School!5e0!3m2!1sru!2skg!4v1692251720934!5m2!1sru!2skg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$MapWhere2$",
    value: "Где мы находимся",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
