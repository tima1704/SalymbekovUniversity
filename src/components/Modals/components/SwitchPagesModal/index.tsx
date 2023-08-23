import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FORMERRORMESAGE } from "../../../../constants/common";
import {
  useDeleteRoutes,
  useGetRoutes,
  useSendRoutes,
} from "../../../../hooks/api/useRoutes";
import { IStructureRoutes } from "../../../../types/common";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

interface IForm {
  route: string;
}

interface IShowProps {
  mouse: boolean | null;
  data: IStructureRoutes;
}

// Delete button
const ShowDeleteRoute: React.FC<IShowProps> = ({ mouse, data }) => {
  const { mutate } = useDeleteRoutes();
  const handleDelete = (id: number | string) => mutate(id);

  return (
    <React.Fragment>
      {mouse && (
        <button
          className="bg-red-600 text-white rounded text-xs p-1 absolute right-1 bottom-1 hover:bg-red-700"
          onClick={() => {
            handleDelete(data.id);
          }}
        >
          <TrashIcon className="w-[20px]" />
        </button>
      )}
    </React.Fragment>
  );
};

export const SwitchPagesModal: React.FC = () => {
  const [mouse, setMouse] = React.useState<boolean | null>(null);

  // Query hooks:
  const { route, isLoading } = useGetRoutes();
  const { mutate, sendLoading } = useSendRoutes();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (formData) => {
    try {
      await mutate(formData.route);
    } catch (error) {}
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
          placeholder="create new route"
        />
        <button>
          {sendLoading ? <span>loading..</span> : <span>send new route</span>}
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
            <React.Fragment>
              <button
                onMouseEnter={() => setMouse(true)}
                onMouseLeave={() => setMouse(false)}
                className="text-white bg-[#0a0e0f] relative hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xs px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-4"
                key={"route" + index}
              >
                <Link to={item.route}>{item.route}</Link>
              </button>
              <ShowDeleteRoute mouse={mouse} data={item} />
            </React.Fragment>
          ))
        )}
      </div>
    </React.Fragment>
  );
};
