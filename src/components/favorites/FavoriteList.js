import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import Favorites from "../favorites/Favorite";
import { BusinessNotesProvider } from "../notes/BusinessNotesProvider";
import BusinessNotesList from "../notes/BusinessNotesList";

export default () => {
  const { favorite } = useContext(FavoriteContext);

  return (
    <>
      <div className="favorites">
        <h2 className="favoritesTitle">Your Favorites</h2>
        <div className="favoritesContainer">
          {favorite.map((fav) => (
            <Favorites key={fav.id} favorites={fav} />
          ))}
        </div>
      </div>
    </>
  );
};
