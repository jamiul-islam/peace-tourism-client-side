import axios from "axios";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { OrderContext, UserContext } from "../../../App";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = ({ services }) => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("https://gory-fangs-99021.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const [orderItems, setOrderItems] = useContext(OrderContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(loggedInUser.email);

  const handleBooking = (id) => {
    //Error-handling: order will be sent to database after complete login (done!)
    var emailIsHere = loggedInUser.email;

    if (emailIsHere) {
      const [orderedItem] = services.filter((service) => service._id === id);
      orders.forEach((element) => {
        if (element._id === id) {
          alert("already added! please choose another one");
          // overriding to home
          window.location.href = "/home";
        } else {
          // if orderItem id alert else success
          axios
            .post("https://gory-fangs-99021.herokuapp.com/orders", orderedItem)
            .then((res) => {
              // console.log(res);
              if (res.data) {
                swal(
                  "Added to Dashboard!",
                  "your travel plan has been added successfuly",
                  "success"
                );
              }
            });
          const newOrders = [orderedItem, ...orderItems];
          setOrderItems(newOrders);
        }
      });
    }
  };
  return (
    <section>
      <div className="service-container mt-5">
        <h2 className="text-brand">Our Packages</h2>
      </div>

      <div className="card-holder mt-5 d-flex justify-content-center">
        <div className="row" style={{ width: "90rem" }}>
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              handleBooking={handleBooking}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
