import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router";
import { BiCartAdd } from "react-icons/bi";
import { TfiFullscreen } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import ProductModal from "../productModal/productModal";

function Productitem({
  image,
  brand,
  title,
  rating,
  oldPrice,
  price,
  stock,
  hoverImage,
  off ,
  selected = true,
  onWishlistToggle,
}) {


  const [isOpenProductModal, setIsOpenProductModal] = useState( false)



  const viewProductDetails= () =>{
    setIsOpenProductModal(true);
  }


  return (
    <>
    <div
      className="productitem rounded-xl  bg-[#f8f0f0]
    overflow-hidden hover:shadow-lg transition-all duration-300 "
    >
      <div className=" w-full h-full ">
        <Link>
          <div className="relative group transition-all hover:scale-105 hover:shadow-lg ">
            <img
              src={image}
              alt=""
              className=" h-[200px]  w-full object-cover transition-opacity duration-300 group-hover:opacity-0 "
            />
            <img
              src={hoverImage}
              alt=""
              className=" h-[200px] w-full object-cover absolute transition-opacity top-0 opacity-0  duration-300 group-hover:opacity-100 "
            />
            <span className="absolute top-3 left-2 bg-blue-400 text-white rounded-2xl text-xs px-1  shadow-md transform-none">
              {off}
            </span>
            <span className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow hover:bg-rose-200  ">

              <TfiFullscreen
              onClick={()=> viewProductDetails(1) } 
                className="text-md"/>
            </span>

            <span

             onClick={() =>   onWishlistToggle?.()}
            className="absolute top-16 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow  hover:bg-rose-200 "
            >
            {selected ? (
              
                <FaHeart className="text-red-500 !text-xl" />
            
            ) : (
             
                <CiHeart className="!text-2xl " />
             
            )}
            </span>
          </div>

          <div className="info p-3 py-5 ">
            <h6 className="text-xs link transition-all"> {brand}</h6>
            <h3 className="text-sm mt-1 font-light link leading-tight transition-all text-black ">
              Men Opaque Casual Shirt {title}
            </h3>
            <div>
              <Rating
                className="mt-1"
                name="half-rating-read "
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="oldprice line-through font-medium text-gray-500 ">
                {oldPrice}
              </span>

              <span className="text-orange-600 font-semibold">{price}</span>
            </div>
            <div>
              {stock ? (
                <span className="text-green-600 font-medium text-xs">
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 font-medium text-xs">
                  Out of Stock
                </span>
              )}
            </div>

            <div className=" justify-self-center mt-2 rounded-3xl bg-blue-500 px-5 py-2 flex items-center  transition-all hover:scale-105 hover:shadow-lg">
              Add to Card <BiCartAdd />{" "}
            </div>
          </div>
        </Link>
      </div>
    </div>

    {isOpenProductModal && ( 
      <ProductModal 
      open ={isOpenProductModal}
       onClose={() => setIsOpenProductModal(false)}
      />
       ) }
    </>
  );
}

export default Productitem;
