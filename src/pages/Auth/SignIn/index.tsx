import React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export const SignIn = () => {

  const [type, setType] = React.useState('text')

  const passwordInputRef = React.useRef<HTMLInputElement>(null)

  const onToggle = () => {

    setType(current => current === 'text' ? 'password' : 'text')

    passwordInputRef.current?.focus()
    const passwordLength = passwordInputRef.current?.value.length ?? null
    setTimeout(() => {
      passwordInputRef.current?.setSelectionRange(passwordLength, passwordLength)
    }, 1)
  }

  return (
    <header>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div className="py-6 px-8 h-80 w-96 bg-white rounded shadow-xl">
          <form action="">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-800 font-bold">Password:</label>
              <label htmlFor="password" className="relative">
                <input
                  ref={passwordInputRef}
                  type={type}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600 pr-8"
                />
                <button
                  type="button"
                  className="absolute right-2 z-0 w-[20px] h-[20px] top-1/2 -translate-y-1/2 border-none outline-none"
                  onClick={onToggle}
                >
                  {type ? <EyeIcon className="text-indigo-600" /> : <EyeSlashIcon className="text-indigo-600" />}
                </button>
              </label>

            </div>
            <button
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
