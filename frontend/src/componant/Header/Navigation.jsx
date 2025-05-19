import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./CategoryPanel";

function Navigation() {
  const [isopencatPanel, serIsOpenCatPanel] = useState(false);

  const openCategoryPanel = (val) => {
    serIsOpenCatPanel(val);
  };

  return (
    <>
      <nav>
        <div className=" container flex items-center justify-start
        gap-8  py-3">
          <div className=" lg:block hidden w-[20%]">
            <Button
              className="!text-black gap-2   "
              onClick={openCategoryPanel}
            >
              {" "}
              <RiMenu3Fill className="text-xl font-bold" />
              Shop By Categories <FaAngleDown className="text-sm ml-3" />
            </Button>
          </div>

          <div
            className="  overflow-x-auto 
            lg:lg:overflow-visible
            whitespace-nowrap no-scrollbar  "
          >
            <ul className=" items-center flex   ">
              <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Home
                  </Button>{" "}
                </Link>
              </li>
              <li className="relative group">
                <Link to={"/"}>
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Fashion
                  </Button>
                </Link>

                <div className="absolute left-0 top-full mt-2 min-w-[150px] bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul>
                    <li className="relative group/sub">
                      <Link to={"/"}>
                        <Button
                          size="large"
                          sx={{
                            textTransform: "none",
                            fontFamily: "Lora, serif",
                            color: "black",
                            "&:hover": {
                              color: "#ff5252",
                            },
                          }}
                          className="!w-full !text-left !justify-start
                          !rounded-none"
                        >
                          Men
                        </Button>
                      </Link>

                      <div className="absolute left-[100%] top-0 min-w-[150px] bg-white shadow-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                        <ul>
                          <li>
                            <Link to={"/"}>
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                          !rounded-none"
                              >
                                T-Shirts

                              </Button>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/"}>
                              {" "}
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                           !rounded-none"
                              >
                                Casual Shirts

                              </Button>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/"}>
                              {" "}
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                          !rounded-none"
                              >
                                Blazers & Coats

                              </Button>
                            </Link>
                          </li>
                           <li>
                            <Link to={"/"}>
                              {" "}
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                           !rounded-none"
                              >
                                Jeans

                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to={"/"}>
                        {" "}
                        <Button
                          size="large"
                          sx={{
                            textTransform: "none",
                            fontFamily: "Lora, serif",
                            color: "black",
                            "&:hover": {
                              color: "#ff5252",
                            },
                          }}
                          className="!w-full !text-left !justify-start
                           !rounded-none"
                        >
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        {" "}
                        <Button
                          size="large"
                          sx={{
                            textTransform: "none",
                            fontFamily: "Lora, serif",
                            color: "black",
                            "&:hover": {
                              color: "#ff5252",
                            },
                          }}
                          className="!w-full !text-left !justify-start
                          !rounded-none"
                        >
                          Girl
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative group">
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Electronic
                  </Button>{" "}
                </Link>
                <div className="absolute left-0 top-full mt-2 min-w-[150px] bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul>
                    <li className="relative group/sub">
                      <Link to={"/"}>
                        <Button
                          size="large"
                          sx={{
                            textTransform: "none",
                            fontFamily: "Lora, serif",
                            color: "black",
                            "&:hover": {
                              color: "#ff5252",
                            },
                          }}
                          className="!w-full !text-left !justify-start
                          !rounded-none"
                        >
                          Men
                        </Button>
                      </Link>

                      <div className="absolute left-[100%] top-0 min-w-[150px] bg-white shadow-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                        <ul>
                          <li>
                            <Link to={"/"}>
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                          !rounded-none"
                              >
                                T-Shirts

                              </Button>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/"}>
                              {" "}
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                           !rounded-none"
                              >
                                Casual Shirts

                              </Button>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/"}>
                              {" "}
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                          !rounded-none"
                              >
                                Blazers & Coats

                              </Button>
                            </Link>
                          </li>
                           <li>
                            <Link to={"/"}>
                              {" "}
                              <Button
                                size="large"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "Lora, serif",
                                  color: "black",
                                  "&:hover": {
                                    color: "#ff5252",
                                  },
                                }}
                                className="!w-full !text-left !justify-start
                           !rounded-none"
                              >
                                Jeans

                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to={"/"}>
                        {" "}
                        <Button
                          size="large"
                          sx={{
                            textTransform: "none",
                            fontFamily: "Lora, serif",
                            color: "black",
                            "&:hover": {
                              color: "#ff5252",
                            },
                          }}
                          className="!w-full !text-left !justify-start
                           !rounded-none"
                        >
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        {" "}
                        <Button
                          size="large"
                          sx={{
                            textTransform: "none",
                            fontFamily: "Lora, serif",
                            color: "black",
                            "&:hover": {
                              color: "#ff5252",
                            },
                          }}
                          className="!w-full !text-left !justify-start
                          !rounded-none"
                        >
                          Girl
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Bags
                  </Button>{" "}
                </Link>
              </li>
               <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Footwear
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Groceries
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Beauty
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Wellness
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  {" "}
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontFamily: "Lora, serif",
                      color: "black",
                      "&:hover": {
                        color: "#ff5252",
                      },
                    }}
                  >
                    Jewellry
                  </Button>{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className=" lg:flex hidden w-[20%] ">
            <p className=" font-[300]  gap-3 flex items-center  ">
             
              <IoRocketOutline className="text-xl" />
              Free international Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel isOpen={isopencatPanel} setOpen={openCategoryPanel} />
    </>
  );
}

export default Navigation;
