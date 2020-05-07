import React from "react"


export default ({business}) => (
    <section className="favorite">
        
        <h3 className="favorite__name">{business.name}</h3>
        <div className="favorite__hours">{business.hours}</div>
        <div className="favorite__address">{business.address}</div>
        <div className="favorite__phone">{business.phone}</div>
        <div className="favorite__website">{business.website}</div>
        <div className="favorite__facebook">{business.facebook}</div>

    </section>
)