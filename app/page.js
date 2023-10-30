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
import { Margarine } from "next/font/google";

export default function Home() {

  return (
    <>
      <BaseLayout>
        <div className="bg-slate-50 mt-1 shadoow-xl">
          <div className="mx-20 max-[450px]:mx-8 max-[768px]:mx-16 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-2">
            <div className="flex-col flex md:col-span-3 sm:col-span-1 ">
              <p className="font-extrabold mb-5">Easy way to make an order</p>
              <p className="text-4xl max-[425px]:text-3xl font-bold mb-5">
                <span className="text-red-600">HUNGRY?</span> just wait
                <br />
                food at <span className="text-red-600">your door</span>
              </p>
              <p className="text-slate-500 mb-5">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature.
              </p>
              <div className="flex flex-row  mb-5">
                <Link
                  href={"/explorefoods"}
                  className="rounded-md bg-red-600 text-white w-32 h-10 mr-20 max-[425px]:mr-12  max-[425px]:w-24 max-[425px]:h-8 py-2  px-3  max-[425px]:py-0 max-[425px]:px-0   max-[425px]:justify-evenly   flex items-center justify-stretch"
                >
                  <p className=" mb-1 max-[425px]:mb-1 max-[425px]:text-xs max-[425px]:pl-3">Order now</p>
                  <MdOutlineKeyboardArrowRight
                    size={24}
                  />
                </Link>
                <Link
                  href={"/explorefoods"}
                  className="rounded-md border-2 h-10  py-1  px-3  max-[425px]:pb-1 border-red-600 text-red-600 w-32  max-[425px]:w-24 max-[425px]:h-8"
                >
                 <p className="mb-1 max-[425px]:mb-0 max-[425px]:text-xs"> See all foods</p>
                </Link>
              </div>
              <div className="flex  mt-5">
                <div className="flex  mr-20 max-[425px]:mr-12">
                  <LiaShippingFastSolid
                    size={20}
                    className="rounded-full mt-1 bg-red-500 max-[425px]:mt-0"
                    color="white"
                  />
                  <p className="font-semibold ml-3  max-[425px]:text-xs max-[425px]:ml-2">No shipping charge</p>
                </div>
                <div className="flex ">
                  <IoBagCheckOutline
                    size={20}
                    className="rounded-full mt-1 max-[425px]:mt-0 bg-red-500"
                    color="white"
                  />
                  <p className="font-semibold ml-3 max-[425px]:text-xs max-[425px]:ml-2">100% secure checkout</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 sm:col-span-1 max-[768px]:px-12 max-[768px]:ml-7 max-[425px]:px-0 max-[425px]:ml-0 max-[425px]:pl-3">
              <Image
                src={image}
                alt="image"
                className="h-[450px] w-[450px]  max-[425px]:h-[300px] max-[425px]:w-[300px]"
              />
            </div>
          </div>
          {/* max-[768px]:hidden */}

          <div className="flex flex-row mx-20 max-[768px]:mx-16  max-[450px]:mx-8 justify-between  ">
            <div className="flex flex-row rounded-md  w-64 h-20 max-[1024px]:w-44 max-[768px]:w-32 max-[768px]:h-12 max-[425px]:w-[4.6rem] max-[425px]:h-10  bg-red-200 mb-7  items-center">
              <Image
                class="h-10 w-10 ml-4  max-[768px]:w-7 max-[768px]:h-7 max-[768px]:ml-2 max-[425px]:w-5 max-[425px]:h-5 max-[425px]:ml-1"
                src={category1}
                alt="Logo"
              />
              <p className="ml-3 max-[425px]:text-xs max-[425px]:ml-2">
                Fast Food
              </p>
            </div>
            <div className="flex flex-row rounded-md w-64 h-20  max-[1024px]:w-44 max-[768px]:w-32 max-[768px]:h-12 bg-red-200 mb-7 max-[425px]:w-[4.6rem] max-[425px]:h-10 items-center">
              <Image
                class="h-10 w-10 ml-4  max-[768px]:w-7 max-[768px]:h-7 max-[768px]:ml-2 max-[425px]:w-5 max-[425px]:h-5 max-[425px]:ml-1"
                src={category2}
                alt="Logo"
              />
              <p className="ml-3 max-[425px]:text-xs ">Pizza</p>
            </div>
            <div className="flex flex-row rounded-md w-64 h-20 bg-red-200 mb-7 max-[1024px]:w-44 max-[768px]:w-32 max-[768px]:h-12    max-[425px]:w-[4.6rem] max-[425px]:h-10 items-center">
              <Image
                class="h-10 w-10 ml-4  max-[768px]:w-7 max-[768px]:h-7 max-[768px]:ml-1 max-[425px]:w-5 max-[425px]:h-5 max-[425px]:ml-1"
                src={category3}
                alt="Logo"
              />
              <p className="ml-3 max-[425px]:text-xs max-[425px]:ml-2">
                Asian Food
              </p>
            </div>
            <div className="flex flex-row rounded-md w-64 h-20 bg-red-200 mb-7  max-[1024px]:w-44 max-[768px]:w-32 max-[768px]:h-12  max-[425px]:w-[4.6rem] max-[425px]:h-10 items-center">
              <Image
                class="h-10 w-10 ml-4  max-[768px]:w-7 max-[768px]:h-7 max-[768px]:ml-2 max-[425px]:w-5 max-[425px]:h-5 max-[425px]:ml-1"
                src={category4}
                alt="Logo"
              />
              <p className="ml-3 max-[425px]:text-xs max-[425px]:ml-2">
                Row Meat
              </p>
            </div>
          </div>
        </div>
        <PopularFoods />
      </BaseLayout>
    </>
  );
}
