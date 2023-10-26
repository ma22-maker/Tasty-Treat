import BaseLayout from "@/components/BaseLayout";
import Image from "next/image";
import image from "../assets/assets/images/hero.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import category1 from "../assets/assets/images/category-01.png";
import category2 from "../assets/assets/images/category-02.png";
import category3 from "../assets/assets/images/category-03.png";
import category4 from "../assets/assets/images/category-04.png";
import PopularFoods from "../components/PopularFoods";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <BaseLayout>
        <div className="bg-slate-50 mt-1 shadoow-xl">
          <div className="mx-20 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-2">
            <div className="flex-col flex md:col-span-3 sm:col-span-1 ">
              <p className="font-extrabold mb-5">Easy way to make an order</p>
              <p className="text-4xl font-bold mb-5">
                <span className="text-red-600">HUNGRY?</span> just wait
                <br />
                food at <span className="text-red-600">your door</span>
              </p>
              <p className="text-slate-500 mb-5">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature.
              </p>
              <div className="flex flex-row mb-5">
                <Link
                  href={"/explorefoods"}
                  className="rounded-md bg-red-600 text-white w-32 h-10 mr-20 flex items-center"
                >
                  <p className="pl-3">Order now</p>
                  <MdOutlineKeyboardArrowRight
                    className="self-center"
                    size={24}
                  />
                </Link>
                <Link href={"/explorefoods"}>
                  {" "}
                  <button className="rounded-md border-2 h-10 border-red-600 text-red-600 w-32">
                    See all foods
                  </button>
                </Link>
              </div>
              <div className="flex flex-row mt-5">
                <div className="flex flex-row mr-20">
                  <LiaShippingFastSolid
                    size={20}
                    className="rounded-md mt-1 bg-red-500"
                    color="white"
                  />
                  <p className="font-semibold ml-3">No shipping charge</p>
                </div>
                <div className="flex flex-row">
                  <IoBagCheckOutline
                    size={20}
                    className="rounded-md mt-1 bg-red-500"
                    color="white"
                  />
                  <p className="font-semibold ml-3">100% secure checkout</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 sm:col-span-1 ">
              <Image src={image} alt="image" className="h-[450px] w-[450px]" />
            </div>
          </div>
          
          <div className="flex flex-row mx-20 justify-between ">
            <div className="flex flex-row rounded-md w-64 h-20 bg-red-200 mb-7  items-center">
              <Image class="h-10 w-10 ml-4" src={category1} alt="Logo" />
              <p className="ml-3">Fast Food</p>
            </div>
            <div className="flex flex-row rounded-md w-64 h-20 bg-red-200 mb-7  items-center">
              <Image class="h-10 w-10 ml-4" src={category2} alt="Logo" />
              <p className="ml-3">Pizza</p>
            </div>
            <div className="flex flex-row rounded-md w-64 h-20 bg-red-200 mb-7    items-center">
              <Image class="h-10 w-10 ml-4" src={category3} alt="Logo" />
              <p className="ml-3">Asian Food</p>
            </div>
            <div className="flex flex-row rounded-md w-64 h-20 bg-red-200 mb-7   items-center">
              <Image class="h-10 w-10 ml-4" src={category4} alt="Logo" />
              <p className="ml-3">Row Meat</p>
            </div>
          </div>
        </div>
        <PopularFoods />
      </BaseLayout>
    </>
  );
}
