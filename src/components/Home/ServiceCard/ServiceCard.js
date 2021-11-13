import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
const ServiceCard = ({ service, handleBooking }) => {
  // console.log(service.data);
  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
      <Card className="m-4 service-card">
        <div className="card-image-holder">
          <Card.Img
            className="service-card-image"
            variant="top"
            src={service.data.imgURL}
          />
        </div>
        <Card.Body>
          <Card.Title className="text-brand">
            {service.data.packageName}
          </Card.Title>
          <h6>{service.data.price}/- TK only</h6>
          <Card.Text className="text-left service-card-item">
            <ul>
              {service.data.items?.map((item) => (
                <li>{item.itemName}</li>
              ))}
            </ul>
          </Card.Text>
          <div className="d-flex align-items-end justify-content-center">
            <Link
              to="/dashboard/bookNow"
              onClick={() => handleBooking(service._id)}
              className="py-2 px-3 btn-brand"
            >
              BOOK NOW
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
