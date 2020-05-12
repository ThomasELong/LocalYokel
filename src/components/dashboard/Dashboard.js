import React, { useState } from "react";
import { FavoriteProvider } from "../favorites/FavoriteProvider";
import FavoritesList from "../favorites/FavoriteList";
import { SearchBar } from "../Search";
import { SearchResults } from "../SearchResults";
import { BusinessProvider } from "../businesses/BusinessProvider";
import { CustomerNotesProvider } from "../notes/CustomerNotesProvider"
import "../auth/Login.css";
import { Button } from "reactstrap";

export default (toggle) => {
  const [searchTerms, setTerms] = useState(null);

  const [activeUser, setActiveUser] = useState(
    localStorage.getItem("ly_user") || ""
  );

  return (
    <div className="dashboardContainer">
      <div>
        <Button
          className="button__logout"
          onClick={() => {
            sessionStorage.clear();
          }}
        >
          Log Out
        </Button>
      </div>
      <div className="title">Local Yokel</div>
      <div className="customerContainer">
        <FavoriteProvider>
          <BusinessProvider>
              <div className="searchBar">
                <SearchBar setTerms={setTerms} />
                <SearchResults searchTerms={searchTerms} />
              </div>
              <div>
                <CustomerNotesProvider>
                <FavoritesList />
                </CustomerNotesProvider>
              </div>

          </BusinessProvider>
        </FavoriteProvider>
      </div>
    </div>
  );
};
