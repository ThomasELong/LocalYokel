import React, { useContext } from "react"
import { FavoriteContext } from "./FavoriteProvider"
import Favorites from "../favorites/Favorite"


export default () => {
    const { favorites } = useContext(FavoriteContext)

    return (
        <>
        <div className="favoriteHeader">
            <h2 className="favoriteTitle">Your Favorites</h2>
            <div className="favoritesContainer">
                {
                    favorites.map(fav => <Favorites key={fav.id} favorites={fav} />
                    )
                }
            </div>
        </div>
        </>
    )
}
