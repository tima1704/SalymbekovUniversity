import React from "react";
import {
  useDeleteRoutes,
  useGetRoutes,
} from "../../../../hooks/api/useRoutes";
import { IStructureRoutes } from "../../../../types/common";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import DeleteModal from "../../../common/DeleteModal";
import { useAppDispatch } from "../../../../hooks/redux";



export const SwitchPagesModal: React.FC = () => {
  const { setModalViewAction } = useAppDispatch();
  const onCloseModal = () => setModalViewAction();

  const [openModal, setOpenModal] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<number | string>("");

  const onClickOpenModal = (id: number | string) => {
    setOpenModal(true);
    setDeleteId(id);
  };

  // Query hooks:
  const { route, isLoading } = useGetRoutes();
  const { mutate: mutateId } = useDeleteRoutes();

  if (!route.length) {
    onCloseModal();
  }

  const handleDelete = async (id: number | string) => {
    try {
      await mutateId(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center text-2xl font-medium mb-8">Страницы</h1>
      <div className="mt-5 flex text-center justify-center">
        {isLoading ? (
          <p className="text-blue-400">loading..</p>
        ) : (
          route?.map((item: IStructureRoutes, index: string) => (
            <div className="relative" key={"route" + index}>
              <button
                onClick={() => onClickOpenModal(item.id)}
                className="disabled: opacity-70 relative -top-3.5 -right-0.5"
                disabled={isLoading}
              >
                <TrashIcon className="w-[20px]" />
              </button>
              <Link
                to={item.route}
                className="text-white bg-blue-400 relative hover:bg-blue-300/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg px-3.5 py-2.5 text-center inline-flex items-center mr-4 mb-2.5 mt-3"
                onClick={onCloseModal}
              >
                {item.route === "/" ? "Home" : item.route.slice(1)}
              </Link>
            </div>
          ))
        )}
      </div>
      {openModal && (
        <DeleteModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          onClick={() => handleDelete(deleteId)}
          deleteSubject="route"
        />
      )}
    </React.Fragment>
  );
};
