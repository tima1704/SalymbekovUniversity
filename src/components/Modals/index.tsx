import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useGetBody } from "../../hooks/common";
import cls from "./index.module.css";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeModal]);

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
        {typeModal === "templates" && (
          <div className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eligendi atque doloribus! Magnam repellendus corrupti cupiditate
            delectus deserunt atque possimus, ipsam et, molestias dolore
            deleniti repudiandae odit omnis laudantium voluptatem.
          </div>
        )}
      </div>
    </div>
  );
};
