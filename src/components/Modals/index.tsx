import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useGetBody } from "../../hooks/common";
import cls from "./index.module.css";
import { CreateModal } from "./components/CreateModal";
import { TemplatesModal } from "./components/TemplatesModal";

export const Modals: React.FC = () => {
  const typeModal = useAppSelector((s) => s.Modal.type);

  const { setModalViewAction } = useAppDispatch();

  const onClickCloseModal = () => setModalViewAction();

  const bodyRef = useGetBody();

  React.useEffect(() => {
    if (bodyRef.current)
      if (typeModal) {
        bodyRef.current.style.overflowY = "hidden";
      } else {
        bodyRef.current.style.overflowY = "auto";
      }
  }, [typeModal, bodyRef]);

  if (!typeModal) {
    return null;
  }

  return (
    <div className={cls["modalWrapper"]}>
      <div className={cls["modal"]}>
        <div className={cls["modalTop"]}>
          <button className="scale" onClick={onClickCloseModal}>
            X
          </button>
        </div>
        {typeModal === "create" && <CreateModal />}
        {typeModal === "templates" && <TemplatesModal />}
      </div>
    </div>
  );
};
