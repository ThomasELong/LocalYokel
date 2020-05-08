import React, { useContext, useState } from "react";
import { FavoriteContext } from "./FavoriteProvider";
import { Button } from "reactstrap";

export default ({ favorites }) => {
  const { removeFavorite, favorite } = useContext(FavoriteContext);
  const [selectedFavorite, setFavorite] = useState([favorites]);

  return (
    <section className="favorite">
      <h3 className="favorite__name">{favorites.name}</h3>
      <div className="favorite__hours">{favorites.hours}</div>
      <div className="favorite__address">{favorites.address}</div>
      <div className="favorite__phone">{favorites.phone}</div>
      <div className="favorite__website">{favorites.website}</div>
      <div className="favorite__facebook">{favorites.facebook}</div>
      
      <Button className="button__delete" color="danger" 
      onClick={() => {
          const deleteThisFavorite = favorite.find(fav => fav.id === favorite.id)
          setFavorite(deleteThisFavorite.id);
          removeFavorite(selectedFavorite);
        }}
      >
        Delete
      </Button>
    </section>
  );
};
