import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { TModals } from '../../../redux/ModalReducer/types';

interface IOption {
  page: string;
  modal?: TModals
}

interface ISideBarCardProps {
  name: string;
  image: string;
  modal?: TModals;
  option?: IOption[];
}

export const SideBarCard: React.FC<ISideBarCardProps> = ({ name, image, option, modal }) => {

  const { setModalViewAction } = useAppDispatch();

  const [openSideBar, setOpenSideBar] = React.useState(false);

  return (
    <div>
      <li className="flex cursor-pointer" onClick={() => setOpenSideBar(prev => !prev)}>
        <img className="w-4" src={image} alt={name} />
        {
          modal ? (
            <p
              className="block whitespace-nowrap leading-[0.32px] hover:duration-500 px-2 py-2 text-['Poppins'] font-[400] text-[16px] text-[#717171] dark:hover:text-[#0B63F8]"
              onClick={() => setModalViewAction(modal)}
            >
              {name}
            </p>
          ) : (
            <p
              className="block whitespace-nowrap leading-[0.32px] hover:duration-500 px-2 py-2 text-['Poppins'] font-[400] text-[16px] text-[#717171] dark:hover:text-[#0B63F8]"
            >
              {name}
            </p>
          )
        }
      </li>
      {
        openSideBar &&
        <ul className="ml-3 pt-2">
          {
            option && option.map((obj, index) => {
              return obj.modal ? (
                <li
                  key={index}
                  className="text-['Poppins'] font-[400] text-[14px] text-[#717171] cursor-pointer py-[5px] dark:hover:text-[#0B63F8]"
                  onClick={() => setModalViewAction(obj.modal)}
                >
                  {obj.page}
                </li>
              ) : (
                <li
                  key={index}
                  className="text-['Poppins'] font-[400] text-[14px] text-[#717171] cursor-pointer py-[5px] dark:hover:text-[#0B63F8]"
                >
                  {obj.page}
                </li>
              )
            })
          }
        </ul>
      }
    </div>
  )
};
