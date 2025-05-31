import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const images = [
  "https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp",

  " https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp",

  " https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",
];

function ProductModal({ open, onClose }) {
  const [mainImage, setMainImage] = useState(images[0]);

  const [inputVal, setInputVal] = useState(1);

  const minus = () => {
    if (inputVal > 1) {
      setInputVal(inputVal - 1);
    }
  };

  const plus = () => {
    setInputVal(inputVal + 1);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={modalStyle}>
          <Button
            onClick={onClose}
            variant="outlined"
            style={{ float: "right" }}
          >
            close
          </Button>
          <h4 className="mb-2">All Natural Italian-Style Chicken Meatballs</h4>
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center">
              <span>Brands:</span>
              <span className="ml-2">Welch's</span>
            </div>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
          <hr className="text-[#d4d3cb]" />

          <div className="flex mt-5 justify-evenly gap-20">
            <div className="w-5/12">
            <div className=" bg-blue-400 w-9 text-white rounded-2xl text-xs px-1  shadow-md transform-none">
              10% 
            </div>
              <img
                src={mainImage}
                alt="Main Product"
                className="rounded-xl shadow-lg w-full object-cover "
              />

              <div className="flex justify-center gap-3 mt-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setMainImage(img)}
                    className={`w-14 h-20 rounded-md border-2 cursor-pointer ${
                      mainImage === img
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-7/12">
              <div className="flex  items-center gap-2">
                <span className="text-gray-500 line-through">$9.45</span>
                <span className="text-red-600 font-semibold">$7.45</span>
              </div>

              <div className="mt-1">
                <span className="text-green-600 font-medium text-xs">
                  In Stock
                </span>
              </div>
              <p className="mt-3">
                Rs: Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>

              <div className="flex justify-start gap-10">
                <div className="flex items-center justify-self-start gap-5">
                  <Button
                    onClick={minus}
                    className="!w-30px !h-30px
                  !py-3 !max-w-30px !rounded-full !bg-blue-100 "
                  >
                    <FaMinus />
                  </Button>
                  <input
                    type="text"
                    value={inputVal}
                    className="w-10 outline-none"
                  />
                  <Button
                    onClick={plus}
                    className="!w-30px !h-30px
                  !py-3 !max-w-30px !rounded-full !bg-blue-100 "
                  >
                    <FaPlus />
                  </Button>
                </div>

                <Button className="!bg-blue-600 !rounded-2xl !text-white  !font-semibold !px-4 !py-3">
                  Add to Card
                </Button>
              </div>
              <div className="flex items-center t-4">
                <Button
                  sx={{
                    color: "black",
                    "&:hover": { color: "black" },
                    "&:active": { color: "black" },
                    "&:focus": { color: "black" },
                  }}
                  className="!rounded-2xl !mx-3 "
                >
                  <FaRegHeart /> &nbsp; ADD TO WISHLIST
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ProductModal;
