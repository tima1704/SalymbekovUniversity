import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FORMERRORMESAGE } from "../../../../constants/common";
import {
  useSendRoutes,
} from "../../../../hooks/api/useRoutes";
import { ArrowPathIcon } from "@heroicons/react/24/outline";


interface IForm {
  route: string;
}

export const AddPages: React.FC = () => {



  // Query hooks:
  const { mutate, sendLoading } = useSendRoutes();

  

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


  return (
    <React.Fragment>
      <h1 className="text-center text-2xl font-medium mb-8">Страницы</h1>
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
          placeholder="например: settings"
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
          {sendLoading ? (
            <ArrowPathIcon className="w-[20px] text-black" />
          ) : (
            <span>Создать страницу</span>
          )}
        </button>
      </form>
      {errors.route && (
        <p className="text-left text-red-600">{errors.route.message}</p>
      )}
    </React.Fragment>
  );
};
