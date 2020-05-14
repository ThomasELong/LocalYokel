import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import Favorites from "../favorites/Favorite";
import { BusinessContext } from "../businesses/BusinessProvider";

export default () => {
  const { favorite } = useContext(FavoriteContext);
  const { businesses } = useContext(BusinessContext)

  return (
    <>
      <div className="favorites">
        <h2 className="favoritesTitle">Your Favorites</h2>
        <div className="favoritesContainer">

                {
                    favorite.map(fav => {
                        const bus = businesses.find(b => b.id === fav.businessUserId)
                        return <Favorites key={fav.id} business={bus} favorites={fav} />
                        
                    })
                }



  

          
        </div>

      </div>
    </>
  );
};
