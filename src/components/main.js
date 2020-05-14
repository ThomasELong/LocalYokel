// Same as Dashboard, this is the main page that holds everything

import React from "react";
import CustomerDashboard from "./dashboard/Dashboard";
import BusinessTerminal from "./terminal/Terminal";

import "./favorites/Favorite.css";
import "./auth/Login.css";
import "./dashboard/Dashboard.css";
import { BusinessProvider } from "./businesses/BusinessProvider";

export const MainPage = () => {

  return (
    sessionStorage.getItem("accountType") === "1" ? <CustomerDashboard/> : <BusinessTerminal/>

  );
};
