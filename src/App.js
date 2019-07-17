import React, {useState, useEffect} from "react";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";
import Header from "./Components/header.js"
import axios from "axios";

function App() {
 const [nasa, setNasa] = useState([]);
 const [day, setDay] = useState("7");

 useEffect(() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-${day}`)
   .then((response) => {
     setNasa(response.data)
   }).catch((error) => {
     console.log(error)
   })
 }, [day]);


    return (
      <div className="App">
          <Header />
          <div>
              <form> 
                <input  type="text" name="day" placeholder="date ex. 2019/07/15"/> 
                <input  onClick = {() => setDay()} type="submit" value="submit" />
                {/* <button onClick = {() => setDay("submit") }>Submit</button> */}
              </form>
          </div>
         
          {<NasaGrid media_type ={nasa.media_type} date={nasa.date} title = {nasa.title} hdurl = {nasa.hdurl} explanation={nasa.explanation} src={nasa.url}/> }
      </div>
    );
}

export default App;