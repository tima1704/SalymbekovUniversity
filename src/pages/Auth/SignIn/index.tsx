import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FORMERRORMESAGE, FORMREGEX } from "../../../constants/common";
import { AuthService } from "../../../helpers/api/authorization";

interface IForm {
  username: string;
  password: string;
}

export const SignIn = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await AuthService.getAuthUser(data).then((res) =>
        localStorage.setItem("accessToken", res.data.access)
      );
    } finally {
      reset();
    }
  };

  return (
    <header>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div className="py-6 px-8 h-80 w-96 bg-white rounded shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("username", {
                  required: FORMERRORMESAGE.required,
                  maxLength: {
                    value: 15,
                    message: FORMERRORMESAGE.username.maxLength,
                  },
                  minLength: {
                    value: 3,
                    message: FORMERRORMESAGE.username.minLength,
                  },
                  pattern: {
                    value: FORMREGEX.username,
                    message: FORMERRORMESAGE.username.pattern,
                  },
                })}
                placeholder="Username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
              {errors.username && (
                <p className="text-red-600">{errors.username?.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-800 font-bold"
              >
                Password:
              </label>
              <label htmlFor="password" className="relative">
                <input
                  type="password"
                  {...register("password", {
                    required: FORMERRORMESAGE.required,
                    maxLength: {
                      value: 40,
                      message: FORMERRORMESAGE.password.maxLength,
                    },
                    minLength: {
                      value: 5,
                      message: FORMERRORMESAGE.password.minLength,
                    },
                  })}
                  id="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600 pr-8"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </label>
            </div>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
