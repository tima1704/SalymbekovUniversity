import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useGetBody } from "../../hooks/common";
import cls from "./index.module.css";
import { SwitchPagesModal } from "./components/SwitchPagesModal";
import { AddBlocksModal } from "./components/AddBlocksModal";
import { ModifyContentModal } from './components/ModifyContentModal';
import { UploadImagesModal } from './components/UploadImages';

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
        {typeModal === "switchPages" && <SwitchPagesModal />}
        {typeModal === "addBlocks" && <AddBlocksModal />}
        {typeModal === "modifyContent" && <ModifyContentModal />}
        {typeModal === "uploadImages" && <UploadImagesModal />}
      </div>
    </div>
  );
};
