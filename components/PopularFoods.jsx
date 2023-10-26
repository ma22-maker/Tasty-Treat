"use client";
import React from "react";
import bread from "../assets/assets/images/bread.png";
import pizza from "../assets/assets/images/pizza.png";
import hamburger from "../assets/assets/images/hamburger.png";
import Image from "next/image";
import products from "@/assets/assets/fake-data/products";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addtoCart_SUCCESS } from "@/store/reduxstore";

function PopularFoods() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const menu = [
    { name: "All" },
    { name: "Burger", src: hamburger },
    { name: "Pizza", src: pizza },
    { name: "Bread", src: bread },
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);


      const handleAddToCart = (product) => {
        console.log("add to cart")
        const { image01, title, id, price } = product;
        dispatch(addtoCart_SUCCESS({ image01, title, id, price, quantity: 1 }));
      };



  return (
    <div className=" bg-slate-50 shadow-lg my-1 mb-4">
        <div className="font-bold text-3xl text-center py-8">Popular Foods</div>
        <div className="flex flex-row justify-center items-center width-full bg-red-500 h-16 rounded-md mx-5">
          {menu.map((item, index) => (
            <button key={index} onClick={() => handleCategoryChange(item.name)} className= " md:mx-10 sm:mx-3 mx-3 hover:bg-white hover:text-red-500 hover:p-3 hover:rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              {item.src ? (
                <div className="flex flex-row justify-between items-center">
                  <Image className="h-5 w-5" src={item.src} alt="Logo" />
                  <p>{item.name}</p>
                </div>
              ) : (
                item.name
              )}
            </button>
          ))}
        </div>
      <div className="mx-5 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border-[0.09rem] border-red-100">
            
            <div className="max-w-full h-[16rem]  rounded-lg overflow-hidden">
              <div className=" flex flex-col items-center">
              <Image
                src={product.image01}
                alt={product.title}
                className="w-32 h-32 "
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl  mb-2 text-center">{product.title}</div>
              </div>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-xl text-red-500 font-semibold ml-3 pt-2">
                  ${product.price}
                </span>
                <button className="rounded-md bg-red-500 border-2 w-32 h-10 mr-3 transition-opacity duration-300 ease-in-out hover:opacity-70" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        
        ))}
        </div>
      </div>
      </div>

  );
}

export default PopularFoods;
