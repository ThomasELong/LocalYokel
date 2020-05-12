import React, { useState } from "react";
import { BusinessProvider } from "../businesses/BusinessProvider";
import BusinessForm from "../businesses/BusinessForm";
import "./Terminal.css"
import { Button } from "reactstrap";

export default () => {

  return (
    <div className="terminalContainer">
              <div>
        <Button className="button__logout" onClick={() => {
          sessionStorage.clear()
        }}>
          Log Out
        </Button>
        
      </div>
        <div className="title">
            Local Yokel
        </div>
      <div>
          <BusinessProvider>
            <BusinessForm/>
          </BusinessProvider>
      </div>
    </div>
  );
};
