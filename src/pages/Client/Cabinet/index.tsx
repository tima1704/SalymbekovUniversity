import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import parse from "html-react-parser";
import DeleteModal from "../../../components/common/DeleteModal";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ITemplate } from "../../../redux/TemplatesReducer/types";

interface IRenderedTemplateProps extends ITemplate {
  index: number;
  route: string;
}

interface ICabinetProps {
  route: string
}

export const Cabinet = ({ route }: ICabinetProps) => {
  const user = localStorage.getItem("accessToken");

  const addedTemplates = useAppSelector((s) => s.Template);

  if (!user) return <Navigate to={ROUTES.auth.authRoute} />;
  return (
    <React.Fragment>
      {addedTemplates[route].blocks.map(({ placeholders, layout }, index) => {
        if (!placeholders) return;
        return (
          <RenderedTemplate
            placeholders={placeholders}
            layout={layout}
            key={index}
            index={index}
            route={route}
          />
        );
      })}
    </React.Fragment>
  );
};

function RenderedTemplate({
  placeholders,
  layout,
  index,
  route,
}: IRenderedTemplateProps) {
  const [isActive, setIsActive] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const addedTemplates = useAppSelector((s) => s.Template);
  const { editTemplateAction } = useAppDispatch();

  function removeBlock() {
    const newTemplates = {
      ...addedTemplates,
      [route]: {
        blocks: addedTemplates[route].blocks.filter((_, i) => i !== index),
        id: addedTemplates[route].id
      }
    }
    editTemplateAction(newTemplates);
  }

  if (!placeholders) return;
  return (
    <div
      key={index}
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      className="relative"
    >
      {parse(
        placeholders.reduce((total, { key, value }) => {
          return total.replace(key, value);
        }, layout as string)
      )}
      {isActive && (
        <button
          className="bg-red-600 text-white rounded text-xs p-1 absolute right-1 bottom-1 hover:bg-red-700"
          onClick={() => setOpenModal(true)}
        >
          <TrashIcon className="w-[20px]" />
        </button>
      )}
      {openModal && (
        <DeleteModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteSubject="block"
          onClick={removeBlock}
        />
      )}
    </div>
  );
}
