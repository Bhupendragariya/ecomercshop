import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router";

function Productitem() {
  return (
    <div className="productitem rounded-md border-1 bg-[#f7f7f7] 
   shadow-2xl overflow-hidden">
      <div className=" w-full h-full overflow-hidden ">
        <Link>
          <img
            src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
            alt=""
            className=" h-[200px] w-full object-cover "
          />

          <div className="info p-3 py-5 ">
            <h6 className="text-xs link transition-all"> CLAFOUTIS</h6>
            <h3 className="text-sm mt-1 font-light link leading-tight transition-all text-black ">
              Men Opaque Casual Shirt
            </h3>
            <div>
              <Rating className="mt-1"
              name="half-rating-read " defaultValue={2.5} precision={0.5} readOnly />
            </div>
            <div className="flex items-center gap-4">
              <span className="oldprice line-through font-medium text-gray-500 ">$58.00</span>

              <span className="text-orange-600 font-semibold">$58.00</span>
            </div>



          </div>
        </Link>
      </div>
    </div>
  );
}

export default Productitem;
