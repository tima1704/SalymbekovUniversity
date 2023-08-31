import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { TModals } from "../../../redux/ModalReducer/types";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useSendBlocks } from '../../../hooks/api/useBlocks';

interface ILinks {
  name: string;
  modal: TModals;
}

const sidebarModalText: ILinks[] = [
  {
    name: "Переключить страницу",
    modal: "switchPages",
  },
  {
    name: "Добавить блок",
    modal: "addBlocks",
  },
  {
    name: "Изменить контент",
    modal: "modifyContent",
  },
  {
    name: "Загрузить фото",
    modal: "uploadImages",
  },
];

const Sidebar: React.FC = () => {
  const { setModalViewAction } = useAppDispatch();

  const navigate = useNavigate();

  const { pathname } = useLocation()

  const handleExit = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate(ROUTES.auth.authRoute);
  };


  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-10 w-1/6 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
        <div>
          <p className="flex items-center pl-2.5 mt-5 text-white text-xl">
            Salymbekov admin
          </p>
          <p className="flex items-center pl-2.5 my-3 text-white">
            Current page: {pathname}
          </p>
          <ul className="space-y-2 font-medium mt-10">
            {sidebarModalText.map((item, index) => (
              <li key={index}>
                <p
                  className="block px-4 py-2 cursor-pointer font-medium text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setModalViewAction(item.modal);
                  }}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-auto justify-around">
          <button
            onClick={handleExit}
            type="button"
            className="text-white bg-[#0a0e0f] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            Выйти
          </button>
          <button
            type="button"
            className="text-white bg-[#0a0e0f] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            Вернуться на сайт
          </button>
        </div>
      </div>
    </aside>
  );
};

const PostBlocksButton = () => {
  const { pathname } = useLocation()

  const { mutate, isLoading } = useSendBlocks()

  const addedBlocks = useAppSelector(s => s.Template)

  function handlePatchBlocks() {
    const block = addedBlocks[pathname]
    mutate(block)
  }

  return (
    <button
      className="
        fixed
        right-4
        bottom-4
        bg-green-500
        text-white
        rounded
        px-3
        py-2
        hover:bg-green-600
        active:bg-green-700
        disabled:bg-slate-400
      "
      onClick={handlePatchBlocks}
      disabled={isLoading}
    >
      Отправить
    </button>
  )
}

interface ISideBarBlock {
  children: React.ReactNode;
}

const SideBarBlock: React.FC<ISideBarBlock> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <PostBlocksButton />
      <div className="p-4 w-5/6 absolute right-0">{children}</div>
    </div>
  );
};

export default SideBarBlock;
