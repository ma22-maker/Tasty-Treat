import React from "react";
import logo from "../assets/assets/images/res-logo.png";
import{PiPaperPlaneTilt} from "react-icons/pi"
import {BiLogoFacebook} from "react-icons/bi"
import{RiGithubLine} from "react-icons/ri"
import{AiOutlineYoutube} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import Image from 'next/image'
function Footer() {
  return (
    <>
     <footer className="footer bg-red-100 px-12 pt-12 pb-8">
      <div className="w-[16rem]">
        <Image class="h-10 w-10 " src={logo} alt="Logo" />
        <p className="font-bold text-xl">
          Tasty Treat
        </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
      </div>
      <div>
        <header className="mb-[0.5rem] font-bold">Delivery Time</header>
          <p>Sunday - Thursday</p>
          <p>10:00am - 11:00pm</p>
          <p className="mt-3">Friday - Saturday</p>
          <p>Off days</p>
      </div>
      <div>
        <header className=" mb-[0.5rem] font-bold">Contact</header>
          <p>Location: ZindaBazaar, Sylhet-3100, Bangladesh</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: example@example.com</p>
      </div>
      <form>
        <header className="mb-[0.5rem] font-bold">Newsletter</header>
        <p>Subscribe to our Newsletter</p>
        <fieldset className="form-control w-80">
          <div className="relative">
            <input
              type="text"
              placeholder=" Enter your email address"
              className="border-2 bg-red-100 border-black rounded-md h-[3rem] w-[20rem]"
            />
            <button className=" absolute top-1 bottom-1 right-7 boder-2 bg-red-600 w-20 rounded-md h-10 ">
            <PiPaperPlaneTilt size={20} color="white" className="ml-6"/>
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
    <div className="footer bg-red-100 flex justify-between pb-12 px-12">
    <p className="text-red-600">©-2023 website made by xyz. All Rights Reserved.</p>
    <div className="flex flex-row pr-20">
        <p className="">Follow: </p>
         <BiLogoFacebook size={20} className="rounded-full bg-red-500" color="white"/>
        <RiGithubLine size={20} className="rounded-full bg-red-500" color="white"/>
        <AiOutlineYoutube size={20} className="rounded-full bg-red-500" color="white"/>
        <BiLogoLinkedin size={20} className="rounded-full bg-red-500" color="white"/>
    </div>
    </div> 
    </> 
  );
}

export default Footer;
