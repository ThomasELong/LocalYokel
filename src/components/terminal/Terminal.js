import React, { useState, useEffect } from "react";
import { BusinessProvider } from "../businesses/BusinessProvider";
import BusinessForm from "../businesses/BusinessForm";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import "./Terminal.css";
import Business from "../businesses/Business";
import { BusinessEditForm } from "../businesses/BusinessEditForm";

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

  const currentBusinessObject = currentBusiness[0]
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);
  const newBusiness = currentBusiness.map((bus) => {
    return (
      <div className="newBusiness">
        <div>
          <Business business={bus} />
        </div>
      </div>
    );
  });
  
  return (
    <>
      <div className="terminalContainer">
        <div>
          <Button
            className="button__logout"
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
          >
            Log Out
          </Button>

        </div>
        <div className="title">Local Yokel</div>
        <div>
          {currentBusiness.length ? (
            <>
          <div>{newBusiness}</div>
          <div>
          <Button
        color="link"
        onClick={(event) => {
          event.preventDefault();
          toggleEdit();
        }}
      >Edit</Button>
          </div>
          
          <div>
          <Modal isOpen={editModal} toggle={toggleEdit}>
            <ModalHeader toggle={toggleEdit}>
              {newBusiness.name}
            </ModalHeader>
            <ModalBody>
              <BusinessProvider>
              <BusinessEditForm
                key={currentBusinessObject.id}
                toggleEdit={toggleEdit}
                currentBusinessObject={currentBusinessObject}
                {...newBusiness}
              />
              </BusinessProvider>
            </ModalBody>
          </Modal>{" "}
        </div>
          </>
        ) : (
            <BusinessProvider>
              <BusinessForm />
            </BusinessProvider>
          )}
        </div>
      </div>
    </>
  );
};

