import React, {useState, useEffect} from "react";
import "./Apps.scss";
import NasaGrid from "./Components/NasaGrid";
import Header from "./Components/header.js";
// import Form from "./Components/form.js"
import {Days, Months, Year} from "./Components/button.js"
import styled from "styled-components";

import axios from "axios";


const MainContainer = styled.div `
 text-align: center;
 background-image: url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=827&q=80");
 background-size: cover;
 height: 100%;

`;

const ButtonDiv = styled.div `
  display: flex;
  justify-content: center;
  


`;






function App() {

 const [nasa, setNasa] = useState([]);
 const [day, setDay] = useState("17");
 const [month, setMonth] = useState("7");
 const [year, setYear] = useState("2019")

 useEffect(() => {
   axios 
   .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)
   .then((response) => {
         setNasa(response.data);
   })
    .catch((error) => {
     console.log("Something went wrong",error)
   })
 }, [day, month, year]);

    return (
      <MainContainer>
          <Header />
          <ButtonDiv>
            <Year   nasa = {nasa} setNasa = {setNasa} year= {year} setYear = {setYear} />
            <Months  nasa = {nasa} setNasa = {setNasa} month = {month} setMonth = {setMonth}/>
            <Days  nasa = {nasa} setNasa = {setNasa} day = {day} setDay = {setDay}/>
          </ButtonDiv>
          {<NasaGrid copyright ={nasa.copyright} media_type ={nasa.media_type} date={nasa.date} title = {nasa.title} hdurl = {nasa.hdurl} explanation={nasa.explanation} src={nasa.url}/> }
      </MainContainer>
    );
}

export default App;