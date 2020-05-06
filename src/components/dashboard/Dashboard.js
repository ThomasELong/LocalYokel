import React from "react";
import { FavoriteProvider } from "../favorites/FavoriteProvider";
import FavoritesList from "../favorites/FavoriteList";
import { SearchBar } from "../Search";


export default () => {

    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <SearchBar/>
            </div>
            <div className="favoritesContainer">
                <FavoriteProvider>
                    <FavoritesList />
                </FavoriteProvider>
                
            </div>
        </div>
    )
}