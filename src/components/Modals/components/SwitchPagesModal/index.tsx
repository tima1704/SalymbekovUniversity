import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FORMERRORMESAGE } from "../../../../constants/common";
import { useGetRoutes, useSendRoutes } from "../../../../hooks/api/useRoutes";
import { IStructureRoutes } from "../../../../types/common";
import { Link } from "react-router-dom";

interface IForm {
  route: string;
}

export const SwitchPagesModal: React.FC = () => {
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
      <div>
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
        {errors.route && <p className="text-left text-red-600">{errors.route.message}</p>}
      </div>
      <div className="mt-2">
        {isLoading ? (
          <p className="text-blue-400">loading..</p>
        ) : (
          route?.map((item: IStructureRoutes, index: string) => (
            <button
              className="text-white bg-[#0a0e0f] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xs px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-4"
              key={"route" + index}
            >
              <Link to={item.route}>{item.route}</Link>
            </button>
          ))
        )}
      </div>
    </React.Fragment>
  );
};
