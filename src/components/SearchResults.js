import React, { useState, useContext, useEffect } from "react"
import  { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import { BusinessContext } from "./businesses/BusinessProvider"


export const SearchResults = ({ searchTerms }) => {
    const { businesses, removeBusiness } = useContext(BusinessContext)


    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = businesses.filter(business => business.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, businesses])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="businesses">
                {
                    filteredBusinesss.map(business => <div
                        className="fakeLink href"
                        onClick={() => {
                            const location = locations.find(l => l.id === business.locationId)
                            const customer = customers.find(c => c.id === business.customerId)

                            setBusiness({ business, location, customer })
                            toggle()
                        }}
                    >{business.name}</div>)
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <Animal key={ selectedAnimal.animal.id } { ...selectedAnimal } />

                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                        updateAnimal(selectedAnimal.animal.id)
                        toggle()
                    }}>Edit</Button>
                    <Button color="danger" onClick={() => {
                        releaseAnimal(selectedAnimal.animal.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}