import React from "react";
import { Card } from "react-bootstrap";

const BookingCard = ({ item, handleDelete }) => {
  return (
    <div className="col-md-6 d-flex justify-content-center">
      <Card className="m-3" style={{ width: "22rem" }}>
        <Card.Img variant="top" src={item.data.imgURL} />
        <Card.Body>
          <Card.Title>{item.data.packageName}</Card.Title>
          <Card.Text>{item.data.price}/-</Card.Text>
          <button
            onClick={() => handleDelete(item._id)}
            className="px-4 btn btn-danger fs-5"
          >
            X
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookingCard;
