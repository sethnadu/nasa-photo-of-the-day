import React, {useState, useEffect} from "react";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";
import Header from "./Components/header.js"
import axios from "axios";

function App() {
 const [nasa, setNasa] = useState([]);
 useEffect(() => {
   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-17")
   .then((response) => {
     setNasa(response.data)
   }).catch((error) => {
     console.log(error)
   })
 }, [])
 return (
   <div className="App">
       <Header />
       <div>
         {<NasaGrid media_type ={nasa.media_type} date={nasa.date} title = {nasa.title} explanation={nasa.explanation} src={nasa.url}/> }
       </div>

   </div>
 );
}

export default App;