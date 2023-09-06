import React from 'react';

interface IOption {
  page: string;
}

interface ISideBarCardProps {
  name: string;
  image: string;
  option?: IOption[];
}

export const SideBarCard: React.FC<ISideBarCardProps> = ({ name, image, option }) => {
  const [openSideBar, setOpenSideBar] = React.useState(false);

  return (
    <div>
      <li className="flex cursor-pointer" onClick={() => setOpenSideBar(prev => !prev)}>
        <img className="w-4" src={image} alt={name} />
        <p
          className="block whitespace-nowrap leading-[0.32px] hover:duration-500 px-2 py-2 text-['Poppins'] font-[400] text-[16px] text-[#717171] dark:hover:text-[#0B63F8]"
          onClick={() => { }}
        >
          {name}
        </p>
      </li>
      {
        openSideBar || option &&
        <ul className="ml-3 pt-2">
          {
            option.map((obj, index) => (
              <li
                key={index}
                className="text-['Poppins'] font-[400] text-[14px] text-[#717171] cursor-pointer py-[5px] dark:hover:text-[#0B63F8]"
              >
                {obj.page}
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
};
