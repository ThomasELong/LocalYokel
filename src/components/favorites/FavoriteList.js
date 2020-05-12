import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import Favorites from "../favorites/Favorite";
import CustomerNoteForm from "../notes/CustomerNoteForm";
import { CustomerNotesProvider, CustomerNotesContext } from "../notes/CustomerNotesProvider";
import CustomerNote from "../notes/CustomerNote";

export default () => {
  const { favorite } = useContext(FavoriteContext);
  const { customerNotes } = useContext(CustomerNotesContext);

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
