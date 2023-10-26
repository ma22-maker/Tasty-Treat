"use client"
import React from "react";
import BaseLayout from "@/components/BaseLayout";
import products from "@/assets/assets/fake-data/products";
import allfood from "../../assets/assets/images/banner-02.1d3252d3.jpg";
import Image from "next/image";
import {addtoCart_SUCCESS} from "@/store/reduxstore";
import { useSelector, useDispatch } from "react-redux";
function page() {
 const dispatch = useDispatch();

 const handleAddToCart = (product) => {
  console.log("add to cart")
  const { image01, title, id, price } = product;
  dispatch(addtoCart_SUCCESS({ image01, title, id, price, quantity: 1 }));
};



  return (
    <BaseLayout>
      <div className="relative">
        <Image
          src={allfood}
          className="w-full h-44 object-cover z-0 opacity-60"
        />
        <p className="z-10 absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          All Foods
        </p>
      </div>
      {/* <div className="my-12 mx-12">
        <input
          type="text"
          placeholder="I'm looking for......."
          className="border-red-400 h-10 bg-white rounded-sm  imput-bodered w-full max-w-xl"
        />
      </div> */}
      <div className="my-5 mx-12  bg-slate-50 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
          {products.map((product) => (
            <div key={product.id} className="border-[0.09rem] border-red-100">
              <div className="max-w-full h-[16rem] rounded-lg overflow-hidden ">
                <div className=" flex flex-col items-center">
                  <Image
                    src={product.image01}
                    alt={product.title}
                    className="w-32 h-32 "
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl  mb-2 text-center">
                      {product.title}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between pb-5">
                  <span className="text-2xl text-red-500 font-bold ml-3">
                    ${product.price}
                  </span>
                  <button className="rounded-md border-2 w-32 h-10 mr-3 bg-red-500 transition-opacity duration-300 ease-in-out hover:opacity-70"  onClick={()=>handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}

export default page;
