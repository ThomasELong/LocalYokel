import React from "react";

export default ({ business }) => (
  <section className="businessObject">
    <h3 className="name">{business.name}</h3>
    <div className="hours">{business.hours}</div>
    <div className="address">{business.address}</div>
    <div className="phone">{business.phone}</div>
    <div className="website">{business.website}</div>
    <div className="facebook">{business.facebook}</div>
    <div className="note">{business.notes}</div>
    <div className="type">{business.businessTypes}</div>
  </section>
);
