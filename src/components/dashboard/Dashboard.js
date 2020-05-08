import React, { useState } from "react";
import { FavoriteProvider } from "../favorites/FavoriteProvider";
import FavoritesList from "../favorites/FavoriteList";
import { SearchBar } from "../Search";
import { SearchResults } from "../SearchResults";
import { BusinessProvider } from "../businesses/BusinessProvider";
import "../auth/Login.css"

export default () => {
  const [searchTerms, setTerms] = useState(null);
  const [activeList, setActiveList] = useState("");
  const [components, setComponents] = useState();

  return (
    <div className="dashboardContainer">
      <div>
        <FavoriteProvider>
          <BusinessProvider>
            <SearchBar setTerms={setTerms} />
            <SearchResults searchTerms={searchTerms} />
            <div className="favoritesContainer">
              <FavoritesList />
            </div>
          </BusinessProvider>
        </FavoriteProvider>
      </div>
    </div>
  );
};
