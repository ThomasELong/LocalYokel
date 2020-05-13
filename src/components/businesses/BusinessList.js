import React, { useContext } from "react";
import { BusinessContext } from "./BusinessProvider";
import Businesses from "../businesses/Business";
import BusinessForm from "./BusinessForm";

export default () => {
  const { businesses } = useContext(BusinessContext);
  const userId = parseInt(sessionStorage.getItem("ly_user"));


  const filteredBusiness = businesses.filter(
    (selectBusiness) => selectBusiness.businessUserId === userId
  );

  return (
    <>
      <div className="favorites">
        <h2 className="favoritesTitle">Your Business Details</h2>
        <div className="favoritesContainer">
          {filteredBusiness.map((bus) => {
            return <Businesses key={bus.id} business={bus} />;
          })}
        </div>
      </div>
    </>
  );
};
