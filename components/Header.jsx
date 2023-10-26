"use client"
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import logo from "../assets/assets/images/res-logo.png";
import Image from 'next/image'
import { useSelector,useDispatch } from "react-redux";
import { openModal } from "@/store/reduxstore";
import Model from "./Model";
import { usePathname } from "next/navigation";
function Header() {

  const dispatch = useDispatch();
  const isopen = useSelector(state => state.FoodData.isOpen);
  const Cartdata = useSelector((state) => state.FoodData.checkoutdata);
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const currentPath = usePathname();
  return (
    <>
      <div className="flex items-center justify-evenly bg-slate-50 py-3">
       <div className="flex flex-col items-center">
       <Image className="h-10 w-10" src={logo} alt="Logo" />
       <p className="">Tasty Treat</p>
       </div>

        <div className="flex items-center space-x-8 justify-center"> 
        <Link href={"/"} className={` text-semibold ${currentPath === '/' ? 'text-red-600' : "hover:underline"}`}>Home</Link>
         <Link href={"/explorefoods"} className={`text-semibold ${currentPath === '/explorefoods' ? 'text-red-600' : "hover:underline"}`}>Foods</Link>
         <Link href={"/checkout"} className={`text-semibold ${currentPath === '/checkout' ? 'text-red-600' : "hover:underline"}`}>Checkout</Link>
         <Link href={""} className=" hover:underline">Contact</Link>
       </div>
        <div>
        <div className="avatar indicator">
           <span className="indicator-item badge border-2 border-red-600 bg-red-600">{Cartdata.length>0 ? Cartdata.length : 0}</span>
          <button className=""><AiOutlineShoppingCart size={25} onClick={handleOpenModal}/></button>
          </div>
          {isopen && <Model/>}
          <button className="ml-4"><RxPerson size={25}/></button>
        </div>
      </div>
    </>
  );
}

export default Header;
