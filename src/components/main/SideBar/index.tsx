import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { TModals } from "../../../redux/ModalReducer/types";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useSendBlocks } from "../../../hooks/api/useBlocks";

interface ILinks {
  name: string;
  modal: TModals;
  image: string;
}

<img src="/src/components/common/icon/" alt="" />;
const sidebarModalText: ILinks[] = [
  {
    name: "Переключить страницу",
    modal: "switchPages",
    image: "/src/components/common/icon/pages.svg",
  },
  {
    name: "Добавить блок",
    modal: "addBlocks",
    image: "/src/components/common/icon/add_block.svg",
  },
  {
    name: "Добавить пост",
    modal: "addBlocks",
    image: "/src/components/common/icon/add_post.svg",
  },
  {
    name: "Изменить контент",
    modal: "modifyContent",
    image: "/src/components/common/icon/add_post.svg",
  },
  {
    name: "Загрузить фото",
    modal: "uploadImages",
    image: "/src/components/common/icon/gallery.svg",
  },
];

const Sidebar: React.FC = () => {
  const { setModalViewAction } = useAppDispatch();

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
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
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
          <ul className="space-y-8 font-medium mt-10">
            {sidebarModalText.map((item, index) => (
              <li className="flex" key={index}>
                <img className="w-4" src={item.image} alt={item.name} />
                <p
                  className="block whitespace-nowrap leading-[0.32px] hover:duration-500 px-2 py-2 cursor-pointer text-['Poppins'] font-[400] text-[16px] text-[#717171] dark:hover:text-[#0B63F8]"
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

const PostBlocksButton = () => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  const { mutate, isLoading } = useSendBlocks();

  const addedBlocks = useAppSelector((s) => s.Template);

  function handlePatchBlocks() {
    const block = addedBlocks[pathname];
    mutate(block);
  }

  React.useEffect(() => {
    if (
      addedBlocks[pathname].blocks.length == 0 ||
      addedBlocks[pathname].blocks.length <= 2
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [addedBlocks, pathname]);

  return (
    <button
      title={
        addedBlocks[pathname].blocks.length < 1
          ? "Минимум один блок должен быть на странице."
          : undefined
      }
      className="
        fixed
        right-4
        bottom-4
        bg-[#013CC6]
        text-white
        rounded
        px-3
        py-2
        hover:bg-blue-700
        active:bg-blue-700
        disabled:bg-slate-400
      "
      onClick={handlePatchBlocks}
      disabled={disabled}
    >
      Отправить
    </button>
  );
};

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
