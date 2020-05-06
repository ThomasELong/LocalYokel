import React from "react"



export default ({businesses}) => (
    <section className="favorite">
        <h3 className="favorite__name">{businesses.name}</h3>
        <div className="favorite__hours">{businesses.hours}</div>
        <div className="favorite__address">{businesses.address}</div>
        <div className="favorite__phone">{businesses.phone}</div>
        <div className="favorite__website">{businesses.website}</div>
        <div className="favorite__facebook">{businesses.facebook}</div>

    </section>
)