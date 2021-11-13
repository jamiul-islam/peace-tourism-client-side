import React from "react";
import "./MidBanner.css";
import bannerImg from "../../../image/banner-5-new.jpg";
import { useSpring } from "@react-spring/core";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const MidBanner = () => {
  const props = useSpring({ number: 500, from: { number: 1 } });

  return (
    <div className="mt-5 h-50 bg-light mid-banner">
      <div className="banner-over p-5">
        <div className="row">
          <div className="col-lg-6">
            <img className="w-100 banner-img" src={bannerImg} alt="" />
          </div>
          <div className="col-lg-5 p-5">
            <h1 className="pb-5">
              {" "}
              <span className="text-sub">You Dream it,</span>{" "}
              <span className="text-brand">We Take Care of it</span>
            </h1>
            <p>
              When you sign up or sign into your Expedia Rewards account, you
              can access instant savings worth 10% or more on select hotels each
              time you see a yellow Member Price tag, in addition to the points
              you’ll earn on eligible bookings along the way. Terms may apply.
            </p>

            <div className="row mt-5 pt-5 happy-customers">
              <div className="col-lg-6 ">
                <h1 className="text-brand">
                  {" "}
                  <CountUp start={0} end={500} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef}></span>
                      </div>
                    )}
                  </CountUp>{" "}
                </h1>
                <p>
                  <b>Happy Customers</b>
                </p>
              </div>
              <div className="col-lg-6">
                <h1 className="text-brand">
                  <CountUp start={0} end={45} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef}></span>
                      </div>
                    )}
                  </CountUp>
                </h1>
                <p>
                  <b>happy tours</b>
                </p>
              </div>
            </div>
            <div className="explore-button d-flex justify-content-center mt-5">
              <Link className="btn-brand py-3 px-5" to="/allservices">
                EXPLORE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
