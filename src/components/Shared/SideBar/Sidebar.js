import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/peace-turism-logo-removebg-preview.png";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThList,
  faPlus,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className=" d-lg-block text-left sidebar px-5 d-md-flex">
      <div className="logo">
        <Link to="/">
          {" "}
          <div className="logo d-flex justify-content-start">
            <img className="p-2 w-75" src={logo} alt="" />
          </div>{" "}
        </Link>
      </div>
      <div className="user-panel">
        <Link className="link mx-lg-4" to="/dashboard/bookNow">
          <h5>
            <FontAwesomeIcon size="1x" icon={faPlus} /> Book Now
          </h5>
        </Link>
        <Link className="link mx-lg-4" to="/bookingList">
          <h5>
            <FontAwesomeIcon size="1x" icon={faThList} /> Booking List
          </h5>
        </Link>
        <Link className="link mx-lg-4" to="/dashboard/reviews">
          <h5>
            <FontAwesomeIcon size="1x" icon={faAlignRight} /> Review
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
