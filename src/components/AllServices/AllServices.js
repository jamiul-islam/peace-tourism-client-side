import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeMain from "../Home/HomeMain/HomeMain";
import Services from "../Home/Services/Services";
import Footer from "../Shared/Footer/Footer";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://gory-fangs-99021.herokuapp.com/services")
      .then((response) => {
        setServices(response.data);
      });
  }, []);
  return (
    <div>
      <HomeMain />
      <div>
        <div>
          <Services services={services} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllServices;
