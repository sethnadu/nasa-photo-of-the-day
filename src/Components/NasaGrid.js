import React from "react";
import styled from "styled-components";

const Box = styled.div `
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 50px 10% 50px 10%;
`;

const Explanation = styled.p `
      margin: auto;
      padding: 10px;
      text-align: left;
      line-height: 1.5;
      
`;

const Info = styled.div `
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
    background-color: black;
    border: 2px solid #0066b3;
    color: white;
    padding: 10px;
`;

const Date = styled.p `
    font-size: 3rem;
    margin-top: 20px
    border: 2px solid #0066b3;
    background-color: black;
    color: white;
    width: 300px;
    display: flex;
    justify-content: center;
    margin: auto;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
`;

const Media = styled.div `
    width: 560px;
    height: 430px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #0066b3;
    margin-bottom: 40px;

`;

const Title = styled.p `
    font-size: 2rem;
`;

const CopyRight = styled.p `
    text-align: center;
    color: white;
    font-size: 1rem;
    background-color: black;
    width: 200px;
    display: flex;
    margin: auto auto 20px auto;
    justify-content: center;
    border: 2px solid #0066b3;
    padding: 10px; 
    border-radius: 10px;

`;


function NasaGrid(props) {
  return (
    <div>
    <div>
      <Date>{props.date}</Date>
    </div>
    <Box> 
      
        <Media> 
        {props.media_type === "video" ? (
        <iframe title="content" width="540" height="405" src={props.src} />
      ) : (
        <img alt="nasa api " src={props.hdurl} width="420" height="315" />
      )}
       </Media> 
       {!props.copyright ? 
         <CopyRight>No Copyright</CopyRight> 
        : 
        <CopyRight>{props.copyright}</CopyRight> 
       } 
        <Info>
        <Title>{props.title}</Title>
        <Explanation>{props.explanation}</Explanation>
        </Info>
     </Box>   
    </div>
  );
}

export default NasaGrid;
