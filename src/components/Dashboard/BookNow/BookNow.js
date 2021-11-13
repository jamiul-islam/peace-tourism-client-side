import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import BookingCard from "../BookingCard/BookingCard";

const BookNow = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("https://gory-fangs-99021.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("are you sure?");
    if (deleteConfirm) {
      // console.log(id);
      const url = `https://gory-fangs-99021.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount === 1) {
            swal("Deleted!", "successfully deleted this plan", "success");

            const remaining = orders.filter((item2) => item2._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div className="row  mr-0">
      <div className="col-lg-9 mt-5">
        <h4 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
          Your tour Plan
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row ">
            {orders?.map((item) => (
              <BookingCard
                key={item._id}
                item={item}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
