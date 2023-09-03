import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../redux/TemplatesReducer/types";
import ContentConnection from "./ContentConnection";
import Connection from "./Connection";

const Layout = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="text-[#202124] text-[20px] lg:text-[28px] font-[600] leading-[30px] lg:leading-[36px] lg:text-start text-center lg:pl-[350px] mb-[20px] lg:mb-[60px]">
        $ConnectionArticle$
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-[40px] max-w-[90%] w-[100%] m-[auto]">
        <ContentConnection.layout />
        <Connection.layout />
      </div>
    </div>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  ...ContentConnection.placeholders,
  ...Connection.placeholders,
  {
    key: "$ConnectionArticle$",
    value: "Связь с нами",
  },
];

const functions: ITemplateFunction[] = [];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
