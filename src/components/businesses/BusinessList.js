import React, { useContext } from "react"
import { BusinessContext } from "./BusinessProvider"
import Businesses from "../businesses/Business"


export default () => {
    const { businesses } = useContext(BusinessContext)

    return (
        <>
        <div className="businessHeader">
            <h2 className="businessTitle">Your Favorites</h2>
            <div>
                {
                    businesses.map(bus => <Favorites key={bus.id} favorites={bus} />
                    )
                }
            </div>
        </div>
        </>
    )
}
