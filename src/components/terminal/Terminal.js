import React, { useState, useEffect } from "react";
import { BusinessProvider } from "../businesses/BusinessProvider";
import BusinessForm from "../businesses/BusinessForm";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import "./Terminal.css";
import Business from "../businesses/Business";
import { BusinessEditForm } from "../businesses/BusinessEditForm";
import { BusinessTypeProvider } from "../businesses/BusinessTypeProvider";
import Logo from "../images/Local Yokel Logo.png"


export default () => {
  const userId = parseInt(sessionStorage.getItem("ly_user"));

  const [currentBusiness, setCurrentBusiness] = useState([]);

  const existingBusinessInfoCheck = () => {
    return fetch(`http://localhost:9001/businessInfo?businessUserId=${userId}`)
      .then((response) => response.json())
      .then((businessInfo) => {
        setCurrentBusiness(businessInfo);
      });
  };

  useEffect(() => {
    existingBusinessInfoCheck();
  }, []);

  const currentBusinessObject = currentBusiness[0];
  const [newBusModal, setNewBusModal] = useState(false);
  const toggleNewBus = () => setNewBusModal(!newBusModal);
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const newBusiness = currentBusiness.map((bus) => {
    return (
      <div>
        <div>
          <Business business={bus} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="terminalContainer">
        <div className="terminalHeader">
          <button
            className="terminalButton logoutButton"
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
          >
            Log Out
          </button>
        <img className="userLogo" src={Logo} alt="Logo"/>
        </div>
        <div>
          {currentBusiness.length ? (
            <>
              <div className="newBusiness">{newBusiness}
              
                <button
                  className="terminalButton"
                  onClick={(event) => {
                    event.preventDefault();
                    toggleEdit();
                  }}
                >
                  Edit
                </button>
              </div>

              <div>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                  <ModalHeader toggle={toggleEdit}>
                    {newBusiness.name}
                  </ModalHeader>
                  <ModalBody>
                    <BusinessTypeProvider>
                      <BusinessProvider>
                        <BusinessEditForm
                          key={currentBusinessObject.id}
                          toggleEdit={toggleEdit}
                          currentBusinessObject={currentBusinessObject}
                          {...newBusiness}
                        />
                      </BusinessProvider>
                    </BusinessTypeProvider>
                  </ModalBody>
                </Modal>{" "}
              </div>
            </>
          ) : (
            <BusinessTypeProvider>
              <BusinessProvider>
                <BusinessForm />
              </BusinessProvider>
            </BusinessTypeProvider>
          )}
        </div>
      </div>
    </>
  );
};
