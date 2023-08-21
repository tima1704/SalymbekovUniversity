import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import RouteService from "../../../../helpers/api/routes";
import { FORMERRORMESAGE } from "../../../../constants/common";

interface IForm {
  route: string;
}

export const SwitchPagesModal: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (formData) => {
    try {
      await RouteService.postRoutesApi(formData.route);
    } catch (error: any) {
      console.error(error.message + " create page error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
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
        {errors.route && <p>{errors.route.message}</p>}
        <button>
          {loading ? <span>loading..</span> : <span>send new route</span>}
        </button>
      </form>
    </div>
  );
};
