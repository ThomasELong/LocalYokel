import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import { Button } from "reactstrap";

export default ({ favorites }) => {
  const { removeFavorite } = useContext(FavoriteContext);

  return (
    <section className="favoriteItem">

        
      <h3 className="favorite__name">{favorites.name}</h3>
      <div className="favorite__hours">{favorites.hours}</div>
      <div className="favorite__address">{favorites.address}</div>
      <div className="favorite__phone">{favorites.phone}</div>
      <div className="favorite__website">{favorites.website}</div>
      <div className="favorite__facebook">{favorites.facebook}</div><br/>
      <div className="favorite__note">{favorites.notes}</div><br/>


      <div className="buttonContainer">
      <Button className="button__favorites" color="info" 
      onClick={() => {
          removeFavorite(favorites.id);
        }}
      >
        Delete
      </Button>
      <Button className="button__favorites" color="info">
          Note
      </Button>
      </div>

    </section>
  );
};
