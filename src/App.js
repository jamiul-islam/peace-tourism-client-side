import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

import React, { createContext, useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import BookNow from "./components/Dashboard/BookNow/BookNow";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import AllServices from "./components/AllServices/AllServices";
import AddPlan from "./components/AddPlan/AddPlan";
import BookingList from "./components/Dashboard/BookingList/BookingList";

export const OrderContext = createContext();
export const UserContext = createContext();
export const UserToken = createContext();

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  // state for preserving admin info
  const [userToken, setUserToken] = useState([]);

  const setToken = () => {
    const loggedinToken = sessionStorage.getItem("token");
    if (loggedinToken) {
      const loggedinTokenInfo = jwt_decode(loggedinToken);
      setUserToken(loggedinTokenInfo);
    }
  };
  useEffect(() => {
    setToken();
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <OrderContext.Provider value={[orderItems, setOrderItems]}>
          <UserToken.Provider value={[userToken, setUserToken]}>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/dashboard/bookNow">
                  <BookNow />
                </PrivateRoute>
                <PrivateRoute path="/bookingList">
                  <BookingList />
                </PrivateRoute>
                <PrivateRoute path="/addplan">
                  <AddPlan />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/allservices">
                  <AllServices />
                </Route>
                <Route path="*">
                  <Error />
                </Route>
              </Switch>
            </Router>
          </UserToken.Provider>
        </OrderContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
