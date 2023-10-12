"use client";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavbarLink } from "@/app/_components/Navbar/NavbarLink";

export const Navbar = () => {
  const [NavbarMenu, setNavbarMenu] = useState(false);
  const NavbarMenuClickHandler = () => {
    setNavbarMenu((NavbarMenu) => !NavbarMenu);
  };
  return (
    <>
      <nav
        className={
          "mx-6 flex justify-between bg-transparent pt-6 font-inter text-gray-200 md:mx-24 items-center text-center"
        }
      >
        <Link href={"/"}>
          <h1 className={"font-inter text-2xl "}>Get Learn</h1>
        </Link>
        <NavbarLink className={"hidden gap-11 md:flex "} />
        <button className={"block sm:hidden"} onClick={NavbarMenuClickHandler}>
          {NavbarMenu ? <IoMdClose size={30} /> : <SlMenu size={30} />}
        </button>
      </nav>
      {NavbarMenu && (
        <div
          className={
            "z-10 ml-[67%] inline-grid w-fit animate-showDown gap-y-7 bg-blue-700 pt-9 font-inter text-gray-200"
          }
        >
          <NavbarLink className={"flex flex-col items-end gap-2"} />
        </div>
      )}
    </>
  );
};
