"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import logo from "../assets/assets/images/res-logo.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "@/store/reduxstore";
import Model from "./Model";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
function Header() {
  const dispatch = useDispatch();
  const isopen = useSelector((state) => state.FoodData.isOpen);
  const Cartdata = useSelector((state) => state.FoodData.checkoutdata);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const currentPath = usePathname();
  return (
    <>
      <div className="flex items-center justify-between px-9 sm:px-6   md:px-12 bg-slate-50 py-3">
        <div className="flex flex-col items-center">
          <Image className="h-10 w-10" src={logo} alt="Logo" />
          <p className="font-bold">Tasty Treat</p>
        </div>

        <div className="flex items-center space-x-8 justify-center max-[768px]:hidden">
          <Link
            href={"/"}
            className={`${currentPath === "/" ? "text-red-600 " : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/explorefoods"}
            className={`text-semibold ${
              currentPath === "/explorefoods" ? "text-red-600" : ""
            }`}
          >
            Foods
          </Link>
          <Link
            href={"/checkout"}
            className={`text-semibold ${
              currentPath === "/checkout" ? "text-red-600" : ""
            }`}
          >
            Checkout
          </Link>
          <Link href={""} className="">
            Contact
          </Link>
        </div>
        <div className="flex">
          <div className="avatar indicator">
            <span className="indicator-item badge border-2 border-red-600 bg-red-600">
              {Cartdata.length > 0 ? Cartdata.length : 0}
            </span>
            <button className="">
              <AiOutlineShoppingCart size={25} onClick={handleOpenModal} />
            </button>
          </div>
          {isopen && <Model />}
          <button className="ml-4">
            <RxPerson size={25} />
          </button>
          <buttom
            // className=" min-[768px]:hidden  max-[768px]:visible ml-4"
            className={` min-[768px]:hidden  max-[768px]:visible ml-4  focus:outline-none transition-transform ${
              isOpen ? "transform rotate-90" : "transform rotate-0"
            }`}
            onClick={toggleMenu}
          >
            <GiHamburgerMenu size={25} />
          </buttom>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex items-center flex-col font-semibold bg-red-100 space-y-8 p-3 justify-center">
          <Link
            href={"/"}
            className={`${currentPath === "/" ? "text-red-600 " : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/explorefoods"}
            className={`text-semibold ${
              currentPath === "/explorefoods" ? "text-red-600" : ""
            }`}
          >
            Foods
          </Link>
          <Link
            href={"/checkout"}
            className={`text-semibold ${
              currentPath === "/checkout" ? "text-red-600" : ""
            }`}
          >
            Checkout
          </Link>
          <Link href={""} className="">
            Contact
          </Link>
        </div>
        </div>
      )}
    </>
  );
}

export default Header;
