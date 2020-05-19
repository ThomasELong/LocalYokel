import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import { CustomerNotesContext } from "../notes/CustomerNotesProvider";

export default ({ customerNote }) => {
  const { removeCustomerNote } = useContext(CustomerNotesContext)

  return (
    <section className="note">
      <div className="custNote--text">{customerNote.noteText}</div>
      <div className="custNote--timestamp">{new Date(customerNote.timestamp).toLocaleDateString()}</div>

      <div className="buttonContainer">
        <button
          className="Button"
          onClick={() => {
            removeCustomerNote(customerNote.id);
          }}>
          Delete
        </button>
      </div>
    </section>
  );
};
