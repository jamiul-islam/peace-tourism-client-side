import React from "react";
import Sidebar from "../../Shared/SideBar/Sidebar";
import BookNow from "../BookNow/BookNow";

const Dashboard = () => {
  return (
    <section>
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <h1 className="mt-5">Welcome to Dashboard</h1>
          <BookNow />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
