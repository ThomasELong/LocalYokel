// Customers main page, holds search bar, favorites container, and edit button



import React, { useRef } from "react"
import { Button } from "reactstrap"

export const SearchBar = ({ setTerms }) => {

    const { terms } = useRef()

    return (
        <>
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchTerms">Search:</label>
                <input onKeyUp={ e => setTerms(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    required
                    autoFocus
                    className="form-control"
                />
            </div>
        </fieldset>
        <fieldset>
            <Button className="addFavorite">Add Favorite</Button>
        </fieldset>
        </>
    )
}