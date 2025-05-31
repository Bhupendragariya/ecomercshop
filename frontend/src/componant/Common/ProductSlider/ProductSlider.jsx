import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Productitem from "./Productitem";

function ProductSlider() {
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
      off: "15%"
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
      off: "30%"
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
      off: "25%"
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
      off: "30%"
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
      off: "20%"
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
      off: "10%"
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
      off: "20%"
    },
  ];

  return (
    <>
      <div className="productsSlider py-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper !overflow-visible"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Productitem
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductSlider;
