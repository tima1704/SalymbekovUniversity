import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FORMERRORMESAGE } from "../../../../constants/common";
import {
  useDeleteRoutes,
  useGetRoutes,
  useSendRoutes,
} from "../../../../hooks/api/useRoutes";
import { IStructureRoutes } from "../../../../types/common";
import { TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import DeleteModal from "../../../ui/DeleteModal";
import { useAppDispatch } from "../../../../hooks/redux";

interface IForm {
  route: string;
}

export const SwitchPagesModal: React.FC = () => {
  const { setModalViewAction } = useAppDispatch();
  const onCloseModal = () => setModalViewAction();


  const [openModal, setOpenModal] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<number | string>("");

  const onClickOpenModal = (id: number | string) => {
    setOpenModal(true);
    setDeleteId(id);
  }

  // Query hooks:
  const { route, isLoading } = useGetRoutes();
  const { mutate, sendLoading } = useSendRoutes();
  const { mutate: mutateId } = useDeleteRoutes();

  if (!route.length) {
    onCloseModal()
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (formData) => {
    try {
      await mutate(formData.route);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number | string) => {
    try {
      await mutateId(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("route", {
            required: FORMERRORMESAGE.required,
            minLength: {
              value: 1,
              message: FORMERRORMESAGE.route.minLength,
            },
            maxLength: {
              value: 20,
              message: FORMERRORMESAGE.route.maxLength,
            },
          })}
          type="text"
          placeholder="New Route"
          className="rounded border-2 mr-4 px-3 py-2"
        />
        <button
          className="
            rounded
            bg-blue-400
            text-white
            px-3
            py-2
            hover:bg-blue-500
            active:bg-blue-700
          "
        >
          {sendLoading ? <ArrowPathIcon className="w-[20px] text-black" /> : <span>Create New Route</span>}
        </button>
      </form>
      {errors.route && (
        <p className="text-left text-red-600">{errors.route.message}</p>
      )}
      <div className="mt-2">
        {isLoading ? (
          <p className="text-blue-400">loading..</p>
        ) : (
          route?.map((item: IStructureRoutes, index: string) => (
            <div
              className="relative"
              key={"route" + index}
            >
              <Link
                to={item.route}
                className="text-white bg-[#0a0e0f] relative hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-base px-7 py-4 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-4"
              >
                {
                  item.route === "/"
                    ? "Home"
                    : item.route
                }
              </Link>
              <button
                onClick={() => onClickOpenModal(item.id)}
                className="disabled: opacity-70"
                disabled={isLoading}
              >
                <TrashIcon className="w-[20px]" />
              </button>
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
