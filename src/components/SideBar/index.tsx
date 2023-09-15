import React from "react";
import { TModals } from "../../redux/ModalReducer/types";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { SideBarCard } from "./SideBarCard";

import "./index.css";

interface IOption {
  page: string;
  modal?: TModals
}

interface ILinks {
  name: string;
  modal?: TModals,
  image: string;
  option?: IOption[];
}


const sidebarModalText: ILinks[] = [
  {
    name: "Страницы",
    image: "/src/components/common/icon/pages.svg",
    option: [
      {
        page: "Добавить страницу",
        modal: "addPages", 
      },
      {
        page: "Переключить страницу",
        modal: "switchPages",
      },
    ]
  },
  {
    name: "Блоки",
    image: "/src/components/common/icon/add_block.svg",
    option: [
      {
        page: "Добавить блок",
        modal: "addBlocks",
      },
      {
        page: "Изменить блок",
        modal: "modifyContent",
      },
    ]
  },
  {
    name: "Посты",
    image: "/src/components/common/icon/add_post.svg",
    option: [
      {
        page: "Добавить пост",
      },
      {
        page: "Изменить пост",
      },
    ]
  },
  {
    name: "Загрузить фото",
    modal: "uploadImages",
    image: "/src/components/common/icon/gallery.svg",
  },
];

const Sidebar: React.FC = () => {

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleExit = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate(ROUTES.auth.authRoute);
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-10 w-[17%] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[rgba(255,255,255,1)] dark:bg-[rgba(255,255,255,1)]"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto sidebar-scroll">
        <div>
          <p className="text-[#013CC6] text-[26px] font-[500]">
            Salymbekov admin
          </p>
          <div className="flex items-center mt-2">
            <img
              className="w-4"
              src="/src/components/common/icon/homik.svg"
              alt="home"
            />
            <p className="flex items-center pl-2 my-3 text-[#CBCCCC] text-lg">
              {pathname === "/" ? (
                <span>Home</span>
              ) : (
                <span>
                  {pathname.slice(1).charAt(0).toUpperCase() +
                    pathname.slice(2)}
                </span>
              )}
            </p>
          </div>
          <ul className="space-y-8 font-medium my-10">
            {sidebarModalText.map((item, index) => (
              <SideBarCard
                key={index}
                {...item}
              />
            ))}
          </ul>
        </div>
        <div className="flex mt-auto justify-between">
          <button
            onClick={handleExit}
            type="button"
            className="text-white bg-[#013CC6] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#0B63F8]/50 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center hover:duration-300 dark:focus:ring-[#0B63F8]/50 dark:hover:bg-[#0B63F8]/90 mr-2 mb-2"
          >
            Выйти
          </button>
          <button
            type="button"
            className="text-white bg-[#013CC6] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#0B63F8]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center hover:duration-300 dark:focus:ring-[#0B63F8]/50 dark:hover:bg-[#0B63F8]/90 mr-2 mb-2"
          >
            Вернуться на сайт
          </button>
        </div>
      </div>
    </aside>
  );
};

interface ISideBarBlock {
  children: React.ReactNode;
}

const SideBarBlock: React.FC<ISideBarBlock> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-5/6 absolute right-0">{children}</div>
    </div>
  );
};

export default SideBarBlock;
