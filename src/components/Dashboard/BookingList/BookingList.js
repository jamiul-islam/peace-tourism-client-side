import React from "react";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import { OrderContext, UserContext } from "../../../App";
import NavBar from "../../Shared/NavBar/NavBar";
import Sidebar from "../../Shared/SideBar/Sidebar";
const BookingList = () => {
  const [orderItems, setOrderItems] = useContext(OrderContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const orders = orderItems[0].data;
  const bookings = { ...orders, ...loggedInUser };
  console.log(bookings);

  return (
    <>
      <section>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="container">
              <h1 className="mb-4 mt-5 text-center text-brand rounded bg-light p-3">
                Every bookings until now
              </h1>
              <div className="mt-4">
                <Table hover responsive>
                  <thead>
                    <tr>
                      <th>*</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Destination</th>
                      <th>Budget</th>
                      <th>Booking Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>{bookings.name}</td>
                      <td>{bookings.email}</td>
                      <td>{bookings.packageName}</td>
                      <td>{bookings.price}</td>
                      <td className="text-success">pending</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingList;
