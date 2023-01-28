import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

function Navbar () {
    return (
        <div className="navbar">
            <FontAwesomeIcon icon={faEarthAmericas} className="nav--icon" />
            <p className="nav--text">my travel journal.</p>
        </div>
    )
}

export default Navbar;
