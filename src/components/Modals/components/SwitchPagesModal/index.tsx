import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const SwitchPagesModal = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm()

  return (
    <div className="text-center">
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("routes", {
            required: "Обязательно поле!",
            minLength: {
              value: 1,
              message: "Минимум один символ!",
            },
            maxLength: {
              value: 20,
              message: "Максимум 20 символов!",
            },
          })}
          type="text"
          placeholder="create new route"
        />
        {errors.routes && <p>{errors.routes.message}</p>}
        <button>send new route</button>
      </form>
    </div>
  );
};
