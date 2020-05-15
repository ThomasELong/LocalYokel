import React, { useContext, useRef } from "react"
import { BusinessContext } from "./BusinessProvider"
import { FormGroup } from "reactstrap"
import { BusinessTypeContext } from "./BusinessTypeProvider"

export default ({toggle}) => {
    const { addBusiness } = useContext(BusinessContext)
    
    const name = useRef()
    const phone = useRef()
    const address = useRef()
    const hours = useRef()
    const facebook = useRef()
    const website = useRef()
    const note = useRef()
    const { businessTypes } = useContext(BusinessTypeContext)

    const createNewBusiness = () => {
        const userId = parseInt(sessionStorage.getItem("ly_user"))

        const newBusiness = {
            name: name.current.value,
            phone: phone.current.value,
            address: address.current.value,
            hours: hours.current.value,
            facebook: facebook.current.value,
            website: website.current.value,
            notes: note.current.value,
            businessTypeId: businessTypes.current.value,
            businessUserId: userId
        }
        addBusiness(newBusiness)
        .then(toggle)
    }

    return (
        <>
        <FormGroup className="addBusinessForm">
            <h2 className="addBusinessForm--Title">Your Business Details</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessName">Name: </label>
                    <input
                        type="text"
                        id="newBusinessName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessPhone">Phone Number: </label>
                    <input
                        type="text"
                        id="newBusinessPhone"
                        ref={phone}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Phone"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessAddress">Address: </label>
                    <input
                        type="text"
                        id="newBusinessAddress"
                        ref={address}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Address"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessHours">Hours: </label>
                    <input
                        type="text"
                        id="newBusinessHours"
                        ref={hours}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Hours"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessWebsite">Website: </label>
                    <input
                        type="text"
                        id="newBusinessWebsite"
                        ref={website}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Website"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessFacebook">Facebook: </label>
                    <input
                        type="text"
                        id="newBusinessFacebook"
                        ref={facebook}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Facebook"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newBusinessNote">Note: </label>
                    <input
                        type="text"
                        id="newBusinessNote"
                        ref={note}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Add a Note"
                        />
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="businessType">Business Type</label>
                <select
                  defaultValue=""
                  name="businessType"
                  ref={businessTypes}
                  id="businessType"
                  className="form-control"
                >
                    <option>Cafe</option>
                    <option>Restaurant</option>
                    <option>Retail</option>
                    <option>Grocery</option>
                    <option>Self-Care</option>
                    <option>Entertainment</option>

                  
                </select>
              </fieldset>
            
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        createNewBusiness()
                        window.location.reload();
                    }
                }
                className="btn btn-primary">
                Submit Information
            </button>
        </FormGroup>
        </>
    )


}