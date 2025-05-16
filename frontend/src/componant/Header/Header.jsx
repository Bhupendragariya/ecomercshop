import { Link } from "react-router-dom";
import logo from "../../assets/image/instagram.png";
import Search from "../Common/Search";
import Button from "@mui/material/Button";
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));


function Header() {
  return (
    <header className="bg-white ">
      
      <div className="top-strip py-2  ">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-semibold">
                {" "}
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3.5">
                <li className="list-none">
                  <Link
                    to={"#"}
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center{" "}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={"#"}
                    className="text-[13px] link font-[500] transition"
                  >
                    Order Tracking{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3  top-strip ">
        <div className="container flex items-center justify-between ">
          <div className="col1 ">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="col2 w-[44%] lg:block hidden">
            <Search />
          </div>

          <div className="col3  flex items-center pl-7">
            <ul className="flex items-center gap-1 justify-end w-full">
              <li className="flex gap-2">
                <Link to={"/login"}>
                  <Button className="!text-xs !px-6" variant="outlined">
                    Login
                  </Button>
                </Link>

                <Link to={"/signin"}>
                  <Button variant="contained" className="!text-xs ">
                    {" "}
                    Register
                  </Button>
                </Link>
              </li>
              <li>
                <Tooltip title="compare">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={1} color="secondary">
                    <FaCodeCompare />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
                <li>
                   <Tooltip title="Wishlist">
                <IconButton aria-label="wishlist">
                  <StyledBadge badgeContent={1} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
                <li>
                    <Tooltip title="cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={1} color="secondary">
                   <HiOutlineShoppingCart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  );
}

export default Header;
