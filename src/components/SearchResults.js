import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { BusinessContext } from "./businesses/BusinessProvider";
import { FavoriteContext } from "./favorites/FavoriteProvider";
import Business from "./businesses/Business";

export const SearchResults = ({ searchTerms, searchTermsSet }) => {
  const { businesses } = useContext(BusinessContext);
  const { addFavorite } = useContext(FavoriteContext);
  const [filteredBusinesses, setFiltered] = useState([]);
  const [selectedBusiness, setBusiness] = useState({ business: { id: 0 } });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const existingBusinessFavoriteCheck = () => {
    return fetch(
      `http://localhost:9001/customerFavorites?businessUserId=${selectedBusiness.business.businessUserId}`
    )
      .then((_) => _.json())
      .then((favBus) => {
        if (favBus.length) {
          return favBus[0];
        }
        return false;
      });
  };
  const addToFavorites = () => {
    const userId = parseInt(sessionStorage.getItem("ly_user"));

    const newFavorite = {
      customerId: userId,
      businessUserId: selectedBusiness.business.businessUserId,
    };
    existingBusinessFavoriteCheck().then((exists) => {
      if (
        exists &&
        exists.businessUserId === selectedBusiness.business.businessUserId
      ) {
        window.alert("You've already saved this business!");
      } else if (!exists) {
        addFavorite(newFavorite);
      }
    });
  };

  useEffect(() => {
    
    if (searchTermsSet !== "") {
      let subsetName = businesses.filter((business) => business.name.toLowerCase().includes(searchTermsSet));
      setFiltered(subsetName);
    } 
    else if (searchTerms === "Cafe" || "Restaurant" || "Grocery" || "Self-Care" || "Retail" || "Entertainment") {
      let subsetType = businesses.filter((business) => business.businessTypes.includes(searchTerms)); 
      setFiltered(subsetType);
    } 
    else { setFiltered([]) }
    
  }, [searchTerms, searchTermsSet, businesses]);
console.log(filteredBusinesses)
console.log(searchTerms)
console.log(searchTermsSet)


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
        <ModalHeader className="searchResult_title" toggle={toggle}>
          {selectedBusiness.business.name}
        </ModalHeader>
        <ModalBody>
          <Business key={selectedBusiness.business.id} {...selectedBusiness} />
          <Button
            className="addToFavorites-button"
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
