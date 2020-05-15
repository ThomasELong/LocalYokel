
import React, { useRef } from "react"
import magnifyingGlassLogo from "./images/magnifyingglass.png"


export const SearchBar = ({ setTerms, setSearchTerms }) => {

    const { terms } = useRef()

    return (
        <>
        <fieldset>
            <div className="searchForm-Group">
                <input onKeyUp={ e => 
                {
                setTerms("") 
                setSearchTerms(e.target.value)
                } }
                    type="text"
                    placeholder="Search"
                    id="searchTextInput"
                    ref={terms}
                    className="form-control"
                    
                />
                <div id='buttonHolder'></div>
                <button onClick={ e => 
                {
                setSearchTerms(null) 
                setTerms(e.target.value = "Search")
                } }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="search-button">
                       <img id="buttonLogo" src={magnifyingGlassLogo}/>
                    </button>
                <div className="selections">
                <div className="searchCategories">

                    <button onClick={ e => setTerms(e.target.value = "Cafe")}
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Cafe
                    </button>

                    <button onClick={ e => setTerms(e.target.value = "Restaurant") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Restaurant
                    </button>

                    <button onClick={ e => setTerms(e.target.value = "Retail") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Retail
                    </button>

                    <button onClick={ e => setTerms(e.target.value = "Grocery") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Grocery
                    </button>

                    <button onClick={ e => setTerms(e.target.value = "Entertainment") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Entertainment
                    </button>

                    <button onClick={ e => setTerms(e.target.value = "Self-Care") }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    className="searchOption">
                        Self-Care
                    </button>
                </div>
                </div>

            </div>
        </fieldset>
        </>
    )
}
