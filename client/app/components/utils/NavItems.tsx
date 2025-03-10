"use client";
import Link from "next/link";
import React from "react";

export const NavItemsData = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/" },
  { name: "About", url: "/" },
  { name: "Policy", url: "/" },
  { name: "FAQ", url: "/" },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
  className: string;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {NavItemsData.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-[#37a39a] text-[crimson]"
                  : "dark:text-white text-black"
              } text-[18px] px-6 font-Poppins cursor-pointer font-[500]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {/* Menú móvil */}
      {isMobile && (
        <div className="block md:hidden mt-5">
          <div className="w-full text-center py-6">
            <Link href="/" passHref>
              <span className="text-[25px] font-Poppins text-black dark:text-white font-[500]">
                SABER ✘🎓
              </span>
            </Link>
          </div>
          {NavItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[#37a39a]"
                    : "dark:text-white text-black"
                } block py-5 text-[18px] px-6 font-Poppins cursor-pointer font-bold`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
