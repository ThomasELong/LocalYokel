import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { BusinessContext } from "./businesses/BusinessProvider";
import { FavoriteContext } from "./favorites/FavoriteProvider";
import Business from "./businesses/Business";

export const SearchResults = ({ searchTerms }) => {
  const { businesses } = useContext(BusinessContext);
  const { addFavorite } = useContext(FavoriteContext);
  const [filteredBusinesses, setFiltered] = useState([]);
  const [selectedBusiness, setBusiness] = useState({ business: { id: 0 } });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const addToFavorites = () => {
    const userId = parseInt(sessionStorage.getItem("ly_user"))
    const newFavorite = {
      
      customerId: userId, 
      businessUserId: selectedBusiness.business.businessUserId,
      
    }
    
    addFavorite(newFavorite)
    
    };
  

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = businesses.filter((business) =>
        business.name.toLowerCase().includes(searchTerms)
      );

      setFiltered(subset);
    } else {
      setFiltered([]);
    }
  }, [searchTerms, businesses]);

  return (
    <div className="searchResults">
      <div className="resultsContainer">
        {filteredBusinesses.map((business) => (
          <div
            className="singleSearchResult"
            onClick={() => {
              setBusiness({ business });
              toggle();
            }}
          >
            <button>
              <div className="searchResult_title">{business.name}</div>
              <div>{business.phone}</div>
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="searchResult_title"toggle={toggle}>
          {selectedBusiness.business.name}
        </ModalHeader>
        <ModalBody>
          <Business key={selectedBusiness.business.id} {...selectedBusiness} />
          <Button className="addToFavorites-button"
            onClick={(event) => {
              event.preventDefault();
              addToFavorites();
              toggle();
            }}
          >
            Add To Favorites
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};
