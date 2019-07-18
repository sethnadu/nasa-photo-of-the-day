import React from "react";
import styled from "styled-components";

const Heading = styled.h1 `
   font-size: 3rem;
   color: white;
`;

const Paragraph = styled.p `
    font-size: 1.6rem;
    color: white;
`


function Header () {

    return (
        <div>
            <img className ="logo" src="https://api.nasa.gov/images/logo.png" alt ="NASA logo" />
            <Heading>On This Day:</Heading>
            <Paragraph>Date must be between Jun 16, 1995 and Current Date</Paragraph>
        </div>
    )
    
}



export default Header;