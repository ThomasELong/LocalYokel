import React, { useState } from "react";
import { BusinessProvider } from "../businesses/BusinessProvider";
import BusinessForm from "../businesses/BusinessForm";

export default () => {

  return (
    <div className="terminalContainer">
      <div>
          <BusinessProvider>
            <BusinessForm/>
          </BusinessProvider>
      </div>
    </div>
  );
};
