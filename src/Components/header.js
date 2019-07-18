import React from "react";

function Header () {

    return (
        <div>
            <img className ="logo" src="https://api.nasa.gov/images/logo.png" alt ="NASA logo" />
            <h1>On This Day:</h1>
            <p>Date must be between Jun 16, 1995 and Current Date</p>
        </div>
    )
    
}



export default Header;