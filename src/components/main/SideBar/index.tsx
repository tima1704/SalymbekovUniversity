import React from "react";
import { Link } from "react-router-dom";

interface ILinks {
  name: string;
  link: string;
}

const sidebarLinks: ILinks[] = [
  {
    name: "Templates",
    link: "/templates",
  },
  {
    name: "Add page",
    link: "/add_page",
  },
  {
    name: "Edit_page",
    link: "/edit_page",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-67 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
        <div>
          <Link to="/" className="flex items-center pl-2.5 mt-5 text-white text-2xl">
            Admin page
          </Link>
          <ul className="space-y-2 font-medium mt-10">
            {sidebarLinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="block px-4 py-2 font-medium text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-auto">
          <button
            type="button"
            className="text-white bg-[#0a0e0f] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            Sign Out
          </button>
          <button
            type="button"
            className="text-white bg-[#0a0e0f] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            Back to client
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
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
};

export default SideBarBlock;
