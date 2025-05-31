import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { LiaShippingFastSolid } from "react-icons/lia";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import AdsBannerSlider from "../Common/AdsBannerSlider/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../Common/ProductSlider/ProductSlider";
import Productitem from "../Common/ProductSlider/Productitem";


function Home() {
  const products = [
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",
      brand: "CLAFOUTIS",
      title: "Men Opaque Casual Shirt",
      rating: 2.5,
      oldPrice: 58,
      price: 35,
      stock: true,
      wishlist: false,
      off: "15%",
    },
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",
      brand: "CLAFOUTIS",
      title: "Men Opaque Casual Shirt",
      rating: 2.5,
      oldPrice: 58,
      price: 35,
      stock: true,
      wishlist: false,
      off: "30%",
    },
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",

      brand: "CLAFOUTIS",
      title: "Men Opaque Casual Shirt",
      rating: 2.5,
      oldPrice: 58,
      price: 35,
      wishlist: true,
      off: "25%",
    },
    {
      image:
        "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",

      brand: "ZARA",
      title: "Slim Fit Denim Jacket",
      rating: 4,
      oldPrice: 75,
      price: 60,
      stock: true,
      wishlist: true,
      off: "30%",
    },
    {
      image:
        "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734526995692_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",
      brand: "ZARA",
      title: "Slim Fit Denim Jacket",
      rating: 4,
      oldPrice: 75,
      price: 60,
      stock: true,
      wishlist: true,
      off: "20%",
    },
    {
      image:
        "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734526995692_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",

      brand: "ZARA",
      title: "Slim Fit Denim Jacket",
      rating: 4,
      oldPrice: 75,
      price: 60,
      wishlist: false,
      off: "10%",
    },
    {
      image:
        "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      hoverImage:
        "https://api.spicezgold.com/download/file_1734526995692_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",

      brand: "ZARA",
      title: "Slim Fit Denim Jacket",
      rating: 4,
      oldPrice: 75,
      price: 60,
      wishlist: false,
      off: "20%",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="bg-amber-100">
        <div className="py-4 overflow-x-hidden ">
          <div className="container  ">
            <Swiper
              spaceBetween={15}
              navigation={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Autoplay]}
              className="mySwiper  !overflow-visible "
            >
              <SwiperSlide>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1745504016576_NewProject.jpg"
                    alt="img"
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1745504016576_NewProject.jpg"
                    alt="img"
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="py-4  card_min overflow-x-hidden  ">
          <div className="container  ">
            <Swiper
              // slidesPerView={7}
              spaceBetween={15}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper !overflow-visible"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },

                480: {
                  slidesPerView: 3,
                },

                768: {
                  slidesPerView: 4,
                },

                1024: {
                  slidesPerView: 5,
                },

                1280: {
                  slidesPerView: 6,
                },

                1536: {
                  slidesPerView: 7,
                },
              }}
            >
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-all "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                      alt=""
                      className="w-[60px] transition-transform duration-300 hover:scale-100 "
                    />
                    <h3 className="text-center text-lg">Fashion</h3>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-white py-8  overflow-x-hidden ">
        <section>
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="leftSec ">
                <h2 className="text-lg font-semibold">Popular Products</h2>
                <p>Do not miss the current offers until the end of March.</p>
              </div>

              <div className="rightSec w-3/5">
                <Box>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                      "& .Mui-selected": {
                        color: "#ff5252",
                      },

                      "& .MuiTabs-indicator": {
                        backgroundColor: "#ff5252",
                      },
                    }}
                  >
                    <Tab label="Fashion" />
                    <Tab label="Electronics" />
                    <Tab label="Bags" />
                    <Tab label="Footwear" />
                    <Tab label="Groceries" />
                    <Tab label="Beauty" />
                    <Tab label="wellness" />
                    <Tab label="jewellery" />
                  </Tabs>
                </Box>
              </div>
            </div>

            <ProductSlider />
          </div>
        </section>
      </div>

      <div className="bg-white ">
        <section className="container">
          <div className="">
            <h2 className="text-lg font-semibold">Popular Products</h2>
            <p>Do not miss the current offers until the end of March.</p>
          </div>
        

          <div  className="grid lg:grid-cols-5 gap-3 md:gap-5 mt-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
            {products.map((product) => (
              <Productitem
                key={product.id}
                image={product.image}
                hoverImage={product.hoverImage}
                brand={product.brand}
                title={product.title}
                rating={product.rating}
                oldPrice={product.oldPrice}
                price={product.price}
                stock={product.stock}
                selected={product.wishlist}
                off={product.off}
                // onWishlistToggle={() => toggleWishlist(product.id)}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="bg-white py-15">
        <section className="container">
          <div className="w-full p-4 border py-3 border-red-500 md:flex items-center justify-between rounded-xl mb-5 text-center">
            <div className="flex items-center gap-3 justify-center ">
              <LiaShippingFastSolid className="text-5xl transform -scale-x-100" />
              <span className="text-xl font-semibold uppercase">
                Free shipping
              </span>
            </div>

            <div>
              <p className="mb-o font-medium">
                Free Delivery Now On Your First Order And Over $200{" "}
              </p>
            </div>

            <div>
              <p className="font-bold text-2xl"> - Only $200</p>
            </div>
          </div>

          <AdsBannerSlider items={4} />
        </section>
      </div>
    </>
  );
}

export default Home;
