"use client";
import React from "react";
import BaseLayout from "@/components/BaseLayout";
import products from "@/assets/assets/fake-data/products";
import allfood from "../../assets/assets/images/banner-02.1d3252d3.jpg";
import Image from "next/image";
import { addtoCart_SUCCESS } from "@/store/reduxstore";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import{LiaSearchSolid} from "react-icons/lia"

function page() {
  const dispatch = useDispatch();
  const [isplaced, Setisplaced] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState('default');

  const handleAddToCart = (product) => {
    console.log("add to cart");
    Setisplaced(true);
    const { image01, title, id, price } = product;
    dispatch(addtoCart_SUCCESS({ image01, title, id, price, quantity: 1 }));
    setTimeout(() => {
      Setisplaced(false);
    }, 3000);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const filterProducts = products.filter(
    (product) =>
      searchTerm === "" ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filterProducts].sort((a, b) => {
    if (a.price === b.price) {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title); 
      } else if (sortOrder === 'desc') {
        return b.title.localeCompare(a.title); 
      }
    }
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });


const renderfood = sortOrder === ("asc"||"desc")?sortedProducts : filterProducts 


  return (
    <BaseLayout>
     {isplaced && (
        <div
          className={`toast toast-center toast-top rounded-md m-3 bg-red-600 text-white w-auto transition-opacity duration-300 ease-in-out ${
            isplaced ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Added to the cart!</span>
        </div>
      )}
    <div className=" min-[425px]:hidden max-[425px]:visible  bg-slate-50 shadow-lg max-[425px]:my-3">
        <input
          type="text"
          onChange={handleSearch} 
          value={searchTerm}
          placeholder="I'm looking for......."
          className="border-[0.1rem] border-red-100 h-10 bg-white rounded-full p-2  imput-bodered w-full"
           
        />
      </div>
      <div className="relative">
        <Image
          src={allfood}
          className="w-full h-44 object-cover z-0 opacity-60"
        />
        <p className="z-10 absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          All Foods
        </p>
      </div>
      <div className="flex items-center min-[425px]:justify-between my-8 mx-12 max-[425px]:justify-end max-[425px]:my-6 max-[425px]:mx-8  ">
      <div className="max-[425px]:hidden">
        <input
          type="text"
          onChange={handleSearch} 
          value={searchTerm}
          placeholder="I'm looking for......."
          className="border-[0.1rem] border-red-100 h-10 bg-white rounded-sm p-2  imput-bodered w-[24rem] max-[768px]:w-[14rem]"
        />
      </div>
      <div className="">
          <select
            className=" select bg-white border-[0.1rem] border-red-100 max-w-xs  "
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="default">Default</option>
            <option value="asc">Price : Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        </div>
      <div className="my-5 mx-12 max-[425px]:mx-8 bg-slate-50 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
          {renderfood.map((product) => (
            <div key={product.id} className="border-[0.09rem] border-red-100">
              <div className="max-w-full h-[16rem] rounded-lg overflow-hidden ">
                <div className=" flex flex-col items-center">
                  <Image
                    src={product.image01}
                    alt={product.title}
                    className="w-32 h-32 "
                  />
                  <div className="lg:px-6 md:px-3 px-2 py-4">
                    <div className="font-bold md:text-md  mb-2 text-center">
                      {product.title}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between pb-5">
                  <span className="text-2xl text-red-500 font-bold ml-3">
                    ${product.price}
                  </span>
                  <button
                    className="rounded-md border-2 w-32 h-10 mr-3 bg-red-500 transition-opacity duration-300 ease-in-out hover:opacity-70"
                    onClick={() => handleAddToCart(product)}
                  >
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
