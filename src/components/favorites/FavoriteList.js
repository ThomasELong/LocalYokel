import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import Favorites from "../favorites/Favorite";
import { BusinessContext } from "../businesses/BusinessProvider";

export default () => {
  const { favorite } = useContext(FavoriteContext);
  const { businesses } = useContext(BusinessContext)
  const userId = parseInt(sessionStorage.getItem("ly_user"))
  const mySelectedFavorites = favorite.filter(sF => sF.customerId === userId)
  
  const favoritedBusinesses = businesses.filter(bus => mySelectedFavorites.some(mSF => mSF.businessUserId === bus.businessUserId))

  return (
    <>
      <div className="favorites">
        <div className="favoritesTitle">Your Favorites</div>
        <div className="favoritesContainer">

                {
                    favoritedBusinesses.map(fav => {
                        return <Favorites key={fav.id} favorites={fav} />
                      })
                    
                    }
        </div>

      </div>
    </>
  );
};
