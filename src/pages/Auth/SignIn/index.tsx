import React from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"

export const SignIn = () => {
  const [type, setType] = React.useState("text")

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const passwordInputRef = React.useRef<HTMLInputElement>(null);

  const onToggle = () => {
    setType((current) => (current === "text" ? "password" : "text"));

    passwordInputRef.current?.focus();
    const passwordLength = passwordInputRef.current?.value.length ?? null;
    setTimeout(() => {
      passwordInputRef.current?.setSelectionRange(
        passwordLength,
        passwordLength
      );
    }, 1);
  };

  return (
    <header>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div className="py-6 px-8 h-80 w-96 bg-white rounded shadow-xl">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Обязательное поле!",
                  maxLength: {
                    value: 15,
                    message: "максимум 15 символов",
                  },
                  minLength: {
                    value: 1,
                    message: "минимум 1 символ",
                  },
                })}
                placeholder="Username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Обязательное поле!",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                })}
                placeholder="Username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
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
                  // ref={passwordInputRef}
                  type={type}
                  {...register("password", {
                    required: "Обязательное поле",
                    maxLength: {
                      value: 40,
                      message: "максимум 40 символов",
                    },
                    minLength: {
                      value: 5,
                      message: "минимум 5 символов",
                    },
                  })}
                  id="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600 pr-8"
                />
                <button
                  type="button"
                  className="absolute right-2 z-0 w-[20px] h-[20px] top-1/2 -translate-y-1/2 border-none outline-none"
                  onClick={onToggle}
                >
                  {type ? (
                    <EyeIcon className="text-indigo-600" />
                  ) : (
                    <EyeSlashIcon className="text-indigo-600" />
                  )}
                </button>
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
