import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeMain from "../HomeMain/HomeMain";
import Message from "../Message/Message";
import MidBanner from "../MidBanner/MidBanner";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../../Shared/Footer/Footer";
import OurWork from "../OurWork/OurWork";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("https://gory-fangs-99021.herokuapp.com/services").then((res) => {
      // console.log(response.data);
      setServices(res.data);
    });
  }, []);

  return (
    <div>
      <HomeMain />
      <Services services={services} />
      <MidBanner />
      <OurWork />
      <Testimonials />
      <Message />
      <Footer />
    </div>
  );
};

export default Home;
