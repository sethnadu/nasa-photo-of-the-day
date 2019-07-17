import React from "react";



function NasaGrid(props){
   return(
       <>
           <p className="date">{props.date}</p>

           {(props.media_type === "video") ?
           <iframe width="420" height="315"
           src={props.src}>
           </iframe>
           :
           <img src = {props.hdurl} width = "420" height ="315"/>
           }

           <p className="title">{props.title}</p>


           <p className="explanation">{props.explanation}</p>


       </>
   )
}

export default NasaGrid;

