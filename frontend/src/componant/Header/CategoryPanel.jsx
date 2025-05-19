import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegSquareMinus } from "react-icons/fa6";

function CategoryPanel({ isOpen, setOpen }) {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [samesubmenuIndex, setSameSubmenuIndex] = useState(null);

  const opensubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const subopensubmenu = (index) => {
    if (samesubmenuIndex === index) {
      setSameSubmenuIndex(null);
    } else {
      setSameSubmenuIndex(index);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className=" text-lg  p-3 font-semibold flex items-center justify-between">
        Shop By Categories{" "}
        <IoMdClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-lg"
        />
      </h3>

      <div className="scroll pt-3">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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

            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Men
                    </Button>
                  </Link>

                  {samesubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(0)}
                    />
                  )}

                  {samesubmenuIndex === 0 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Casual Shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Blazers & Coats
                        </Link>
                      </li>
                      <li className="list-none relative  mb-2">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 0 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Women
                    </Button>
                  </Link>

                  {samesubmenuIndex === 2 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(2)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(2)}
                    />
                  )}

                  {samesubmenuIndex === 2 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Kurtas & Suits
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Sarees
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="list-none relative  mb-2">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 0 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Girl
                    </Button>
                  </Link>

                  {samesubmenuIndex === 3 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(3)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(3)}
                    />
                  )}

                  {samesubmenuIndex === 3 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Kurta Sets
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
                Electronics
              </Button>
            </Link>

            {submenuIndex === 4 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(4)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(4)}
              />
            )}

            {submenuIndex === 4 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Mobiles
                    </Button>
                  </Link>

                  {samesubmenuIndex === 4 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(4)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(4)}
                    />
                  )}

                  {samesubmenuIndex === 4 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Apple
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Samsung
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Oppo
                        </Link>
                      </li>
                      <li className="list-none relative  mb-2">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Vivo
                        </Link>
                      </li>
                      <li className="list-none relative  mb-2">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Techno
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 4 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Laptop
                    </Button>
                  </Link>

                  {samesubmenuIndex === 5 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(5)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(5)}
                    />
                  )}

                  {samesubmenuIndex === 5 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          MackBook
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Dell
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 4 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Smart Watch
                    </Button>
                  </Link>

                  {samesubmenuIndex === 6 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(6)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(6)}
                    />
                  )}

                  {samesubmenuIndex === 6 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Apple Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Fastrack
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 4 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Cameras
                    </Button>
                  </Link>

                  {samesubmenuIndex === 7 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(7)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(7)}
                    />
                  )}

                  {samesubmenuIndex === 7 && (
                    <ul className="submenu  w-full pl-3 ">
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Canon
                        </Link>
                      </li>
                      <li className="list-none relative mb-2 ">
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition font-thin   "
                        >
                          Nikon
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
              </Button>
            </Link>

            {submenuIndex === 8 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(8)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(8)}
              />
            )}

            {submenuIndex === 8 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Men Bags
                    </Button>
                  </Link>

                  {samesubmenuIndex === 9 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(9)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(9)}
                    />
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 8 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Women Bags
                    </Button>
                  </Link>

                  {samesubmenuIndex === 10 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(7)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(10)}
                    />
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
                Foot Wear
              </Button>
            </Link>

            {submenuIndex === 11 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(11)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(11)}
              />
            )}

            {submenuIndex === 11 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Men Footwears
                    </Button>
                  </Link>

                  {samesubmenuIndex === 12 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(12)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(12)}
                    />
                  )}
                </li>
              </ul>
            )}

            {submenuIndex === 11 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Women Footwears
                    </Button>
                  </Link>

                  {samesubmenuIndex === 13 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(13)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(13)}
                    />
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
              </Button>
            </Link>

            {submenuIndex === 14 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(14)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(14)}
              />
            )}
          </li>

          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
              </Button>
            </Link>

            {submenuIndex === 15 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(15)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(15)}
              />
            )}

            {submenuIndex === 15 && (
              <ul className="  w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button
                      className="w-full !text-left !justify-start !px-3 "
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
                      Quan
                    </Button>
                  </Link>

                  {samesubmenuIndex === 16 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(16)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px]  right-[15px] cursor-pointer"
                      onClick={() => subopensubmenu(16)}
                    />
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
              </Button>
            </Link>

            {submenuIndex === 17 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(17)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(17)}
              />
            )}
          </li>
          <li className="list-none flex items-center relative flex-col ">
            <Link to={"/fashion"} className="w-full">
              <Button
                className="w-full !text-left !justify-start !px-3 "
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
                Jewellery
              </Button>
            </Link>

            {submenuIndex === 18 ? (
              <FaRegSquareMinus
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(18)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px]  right-[15px] cursor-pointer"
                onClick={() => opensubmenu(18)}
              />
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list}
    </SwipeableDrawer>
  );
}

export default CategoryPanel;
