import React, { useState }from "react";
import { FavoriteProvider } from "../favorites/FavoriteProvider";
import FavoritesList from "../favorites/FavoriteList";
import { SearchBar } from "../Search";
import { SearchResults } from "../SearchResults";


export default () => {

    const [searchTerms, setTerms] = useState(null);
    const [activeList, setActiveList] = useState("");
    const [components, setComponents] = useState();


    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <SearchBar setTerms={setTerms}/>
                <SearchResults searchTerms={searchTerms}/>
            </div>
            <div className="favoritesContainer">
                <FavoriteProvider>
                    <FavoritesList />
                </FavoriteProvider>
                
            </div>
        </div>
    )
}