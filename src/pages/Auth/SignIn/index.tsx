import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FORMERRORMESAGE, FORMREGEX } from "../../../constants/common";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import AuthService from "../../../helpers/api/authorization";
import { toast } from "react-toastify";

interface IForm {
  username: string;
  password: string;
}

export const SignIn = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();

  const navigate = useNavigate();

  const user = localStorage.getItem("accessToken");

  if (user) return <Navigate to={ROUTES.home} />;

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      setLoading(true);
      const { password, username } = data;
      const response = await AuthService.login(password, username);

      if (response.access && response.refresh) {
        localStorage.setItem("accessToken", response.access);
        localStorage.setItem("refreshToken", response.refresh);

        navigate(ROUTES.home);
      }
    } catch (error: any) {
      toast(error.message, {
        theme: "colored",
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
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
              {loading ? <span>loading...</span> : <span>login</span>}
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
