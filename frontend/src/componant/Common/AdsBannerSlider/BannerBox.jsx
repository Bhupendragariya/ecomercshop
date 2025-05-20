import React from "react";
import { Link } from "react-router";

function BannerBox(props) {
  return (
    <div>
      <div className="box bannerBox overflow-hidden rounded-lg">
        <Link to={props.Link}>
        <img
          src={props.img}
          alt="banner"
          className="w-full transition-all hover:scale-105 hover:rotate-1 "
          
        />
        </Link>
      </div>
    </div>
  );
}

export default BannerBox;
