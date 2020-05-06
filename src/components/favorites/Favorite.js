import React from "react"



export default ({favorites}) => (
    <section className="favorite">
        <h3 className="favorite__name">{favorites.name}</h3>
        <div className="favorite__hours">{favorites.hours}</div>
        <div className="favorite__address">{favorites.address}</div>
        <div className="favorite__phone">{favorites.phone}</div>
        <div className="favorite__website">{favorites.website}</div>
        <div className="favorite__facebook">{favorites.facebook}</div>

    </section>
)