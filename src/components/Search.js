
import React, { useRef } from "react"
import cafeLogo from "./images/cafe.png"
import entertainmentLogo from "./images/entertainment.png"
import groceryLogo from "./images/grocery.png"
import restaurantLogo from "./images/restaurant.png"
import retailLogo from "./images/retail.png"
import selfcareLogo from "./images/selfcare.png"


export const SearchBar = ({ setTerms, setSearchTerms }) => {

    const { searchName } = useRef()
    const { typeCafe } = useRef()
    const { typeRestaurant } = useRef()
    const { typeRetail } = useRef()
    const { typeGrocery } = useRef()
    const { typeEntertainment } = useRef()
    const { typeSelfCare } = useRef()



    return (
        <>
        <fieldset>
            <div className="searchForm-Group">
                <input onChange={ e => { setTerms(""); setSearchTerms(e.target.value) } }
                    type="text"
                    placeholder="Search"
                    id="searchTextInput"
                    ref={searchName}
                    className="form-control"  
                />                
                <div className="searchCategories">
                    
                    <button onClick={ e => { 
                       setSearchTerms.value=""; 
                       setTerms(e.target.value = "Cafe")
                    }}
                    type="text"
                    id="searchTerms"
                    ref={typeCafe}
                    className="searchOption">
                              <img className="searchLogo" src={cafeLogo} alt="Logo"/>

                    </button>

                    <button onClick={ e => {
                        if (setSearchTerms !== "") setSearchTerms(""); 
                        setTerms(e.target.value = "Restaurant") 
                    }}
                    type="text"
                    id="searchTerms"
                    ref={typeRestaurant}
                    className="searchOption">
                              <img className="searchLogo" src={restaurantLogo} alt="Logo"/>
                    </button>

                    <button onClick={ e => { 
                        if (setSearchTerms !== "") setSearchTerms("");
                        setTerms(e.target.value = "Retail") }}
                    type="text"
                    id="searchTerms"
                    ref={typeRetail}
                    className="searchOption">
                              <img className="searchLogo" src={retailLogo} alt="Logo"/>
                    </button>
                    
                    <button onClick={ e => {
                        if (setSearchTerms !== "") setSearchTerms("");
                        setTerms(e.target.value = "Grocery") }}
                    type="text"
                    id="searchTerms"
                    ref={typeGrocery}
                    className="searchOption">
                              <img className="searchLogo" src={groceryLogo} alt="Logo"/>
                    </button>

                    <button onClick={ e => {
                        if (setSearchTerms !== "") setSearchTerms("");
                        setTerms(e.target.value = "Entertainment") }}
                    type="text"
                    id="searchTerms"
                    ref={typeEntertainment}
                    className="searchOption">
                              <img className="searchLogo" src={entertainmentLogo} alt="Logo"/>
                    </button>

                    <button onClick={ e => {
                        if (setSearchTerms !== "") setSearchTerms("");
                        setTerms(e.target.value = "Self-Care") }}
                    type="text"
                    id="searchTerms"
                    ref={typeSelfCare}
                    className="searchOption">
                              <img className="searchLogo" src={selfcareLogo} alt="Logo"/>
                    </button>
                   
                </div>

            </div>
        </fieldset>
        </>
    )
}
