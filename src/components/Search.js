
import React, { useRef } from "react"
import { Button } from "reactstrap"

export const SearchBar = ({ setTerms, setSearchTerms }) => {

    const { terms } = useRef()

    return (
        <>
        <fieldset>
            <div className="form-group">
                <input onKeyUp={ e => setSearchTerms(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="form-control"
                />
                <div className="selections">
                <div className="searchCategories">

                    <Button onClick={ e => setTerms(e.target.value = "Cafe")}
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Cafe
                    </Button>

                    <Button onClick={ e => setTerms(e.target.value = "Restaurant") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Restaurant
                    </Button>

                    <Button onClick={ e => setTerms(e.target.value = "Retail") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Retail
                    </Button>

                    <Button onClick={ e => setTerms(e.target.value = "Grocery") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Grocery
                    </Button>

                    <Button onClick={ e => setTerms(e.target.value = "Entertainment") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Entertainment
                    </Button>

                    <Button onClick={ e => setTerms(e.target.value = "Self-Care") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Self-Care
                    </Button>
                </div>
                </div>

            </div>
        </fieldset>
        </>
    )
}
