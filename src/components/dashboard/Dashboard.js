import React, { useState } from "react";
import { FavoriteProvider } from "../favorites/FavoriteProvider";
import FavoritesList from "../favorites/FavoriteList";
import { SearchBar } from "../Search";
import { SearchResults } from "../SearchResults";
import { BusinessProvider } from "../businesses/BusinessProvider";
import { CustomerNotesProvider } from "../notes/CustomerNotesProvider"
import "../auth/Login.css";
import { Button } from "reactstrap";
import Logo from "../images/Local Yokel Logo.png"


export default (toggle) => {
  const [searchTerms, setTerms] = useState(null)
  const [searchTermsSet, setSearchTerms] = useState("")


  return (
    <div className="dashboardContainer">
      <div className="dashboardHeader">
        <button
          className="button__logout"
          onClick={() => {
            sessionStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
        </button>
      <img className="userLogo" src={Logo} alt="Logo"/>
      </div>
      <div className="customerContainer">
        <FavoriteProvider>
          <BusinessProvider>
              <div className="searchBar">
                <SearchBar setTerms={setTerms} setSearchTerms={setSearchTerms}/>
                <SearchResults searchTerms={searchTerms} searchTermsSet={searchTermsSet}/>
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
