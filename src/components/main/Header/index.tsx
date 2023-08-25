import React from "react";

interface IFlags {
  id: number;
  img: string;
  description: string;
}

const FLAGS: IFlags[] = [
  {
    id: 1,
    img: "/src/components/common/icon/Russia.png",
    description: "Ru",
  },
  {
    id: 2,
    img: "/src/components/common/icon/Kyrgyzstan.png",
    description: "Kg",
  },
  {
    id: 3,
    img: "/src/components/common/icon/United_Kingdom.png",
    description: "UK",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="bg-[#041326] text-[#ffffff]">
      <div className="flex items-center justify-between max-w-[1140px] w-[100%] m-[auto] py-[16px]">
        <div className="flex items-center gap-x-[46px]">
          <div className="cursor-pointer">
            <img
              className="w-[135px] h-[30px]"
              src="/src/components/common/icon/logo-salymbekov-university-site.svg"
              alt="Salymbekov University"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-[32px]">
          <div className="flex items-center cursor-pointer">
            <select className="bg-[#041326] border-[none] outline-none cursor-pointer ">
              {FLAGS.map((obj) => (
                <option key={obj.id} value={obj.description}>
                  {obj.description}
                </option>
              ))}
            </select>
          </div>
          <button className="text-[14px] font-[600] not-italic leading-[20px] bg-[#0D3A71] px-[14.8px] py-[6px] rounded-[8px] border border-1 border-solid border-[#0D3A71] hover:bg-[#ffffff] hover:text-[#0D3A71] transition duration-[0.3s] ease-in-out">
            Перейти на сайт
          </button>
        </div>
      </div>
    </header>
  );
};
