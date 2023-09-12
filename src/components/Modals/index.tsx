import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useGetBody } from "../../hooks/common";
import { SwitchPagesModal } from "./components/SwitchPagesModal";
import { AddBlocksModal } from "./components/AddBlocksModal";
import { ModifyContentModal } from "./components/ModifyContentModal";
import { UploadImagesModal } from "./components/UploadImages";
import { XMarkIcon } from '@heroicons/react/24/outline';

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

  if (!typeModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-20 transition-opacity">
      <div className="max-w-[90%] p-9 bg-slate-200 max-h-[90vh] overflow-x-hidden">
        <div className="modalTop">
          <button className="scale" onClick={onClickCloseModal}>
            <XMarkIcon />
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
