import React from "react";




function NasaGrid(props) {
  return (
    <>
      <p className="date">{props.date}</p>
        <p className="title">{props.title}</p>
        
        {props.media_type === "video" ? (
        <iframe title="content" width="420" height="315" src={props.src} />
      ) : (
        <img alt="nasa api " src={props.hdurl} width="420" height="315" />
      )}
      
        
         <p className="explanation">{props.explanation}</p>
       
    </>
  );
}

export default NasaGrid;
