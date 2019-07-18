import React, {useState, useEffect} from "react";
import "./Apps.scss";
import NasaGrid from "./Components/NasaGrid";
import Header from "./Components/header.js";
// import Form from "./Components/form.js"
import Days from "./Components/day.js";
import Months from './Components/month.js';
import Years from './Components/year.js';

import axios from "axios";


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
     console.log("Something went wrong",error);
   })
 }, [day, month, year]);

 




    return (
      <div className="App">
          
          <Header />
          <div className = "buttons">
            <Years   nasa = {nasa} setNasa = {setNasa} year= {year} setYear = {setYear}/>
            <Months  nasa = {nasa} setNasa = {setNasa} month = {month} setMonth = {setMonth}/>
            <Days   nasa = {nasa} setNasa = {setNasa} day = {day} setDay = {setDay}/>
          </div>
          {<NasaGrid copyright ={nasa.copyright} media_type ={nasa.media_type} date={nasa.date} title = {nasa.title} hdurl = {nasa.hdurl} explanation={nasa.explanation} src={nasa.url}/> }
      </div>
    );
}

export default App;