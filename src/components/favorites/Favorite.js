import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import { Button } from "reactstrap";
import { CustomerNotesContext } from "../notes/CustomerNotesProvider";
import CustomerNoteForm from "../notes/CustomerNoteForm";
import CustomerNote from "../notes/CustomerNote";

export default ({ favorites }) => {
  const { favorite, removeFavorite } = useContext(FavoriteContext);
  const { customerNotes } = useContext(CustomerNotesContext);

  const filteredNotes = customerNotes.filter(
    (custNote) => custNote.businessId === favorites.id
  )
  const filteredFavorite = favorite.find(favorite => favorite.businessUserId === favorites.businessUserId) || {}

  return (
    <section className="favoriteItem">
      <div className="favoriteDetail">
          <h3 className="favorite__name">{favorites.name}</h3>
          <div className="favorite__hours">{favorites.hours}</div>
          <div className="favorite__address">{favorites.address}</div>
          <div className="favorite__phone">{favorites.phone}</div>
          <div className="favorite__website">{favorites.website}</div>
          <div className="favorite__facebook">{favorites.facebook}</div>
          <br />
          <div className="favorite__note">{favorites.notes}</div>
          <br />
      </div>
      <div className="notesForm">
      <h4 className="addBusinessForm--Title">Notes:</h4>

        {filteredNotes.map(note => {

          return <CustomerNote customerNote={note} />
          
        })}
        <CustomerNoteForm businessObject={favorites} />
      </div>
      <div className="buttonContainer">
        <button
          className="Button deleteButton"
          color="info"
          size="sm"
          onClick={() => {
            removeFavorite(filteredFavorite.id);
          }}
        >
          Delete This Favorite
        </button>
      </div>
    </section>
  );
};
