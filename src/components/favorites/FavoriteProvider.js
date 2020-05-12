import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    This component only adds and removes favorites to the customer's list
*/

export const FavoriteContext = React.createContext()



export const FavoriteProvider = (props) => {
    const [favorite, setFavorites] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getFavorites = () => {
        return fetch("http://localhost:9001/customerFavorites")
            .then(response => response.json())
            .then(setFavorites)
    }

    const addFavorite = business => {
        return fetch("http://localhost:9001/customerFavorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(business)
        })
            .then(getFavorites)
    }

    const removeFavorite = favorites => {
        return fetch(`http://localhost:9001/customerFavorites/${favorites}`, {
            method: "DELETE"
        }) .then(getFavorites)
    }

    /*
        Load all animals when the component is mounted. Ensure
        that an empty array is the second argument to avoid infinite loop.
    */
   useEffect(() => {
       getFavorites()
        }, [])
  



        // This exports these functions
   return (
        <FavoriteContext.Provider value={{
            favorite, 
            addFavorite, 
            setSearchTerm, 
            searchTerm, 
            setFavorites, 
            removeFavorite
        }}>
            {props.children}
        </FavoriteContext.Provider>
   )    
}
