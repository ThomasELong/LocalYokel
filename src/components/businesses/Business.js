import React from "react";

export default ({ business }) => (
  <section className="businessObject">
    <h3 className="businessDetail">{business.name}</h3>
    <div className="businessDetail">{business.hours}</div>
    <div className="businessDetail">{business.address}</div>
    <div className="businessDetail">{business.phone}</div>
    <div className="businessDetail">{business.website}</div>
    <div className="businessDetail">{business.facebook}</div>
    <div className="businessDetail">{business.notes}</div>
    <div className="businessDetail">{business.businessTypes}</div>
  </section>
);
