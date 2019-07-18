import React from "react";



function Days (props, key) {
    const dayOnes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", 
    "18", "19", "20", "21", "22", "23", "24", "25", "26" ,"27" ,"28", "29", "30", "31"];

    return (
        <div className = "days">
        <p>Pick Day:</p>
        <div className ="buttonDiv daysButtons" >
           {dayOnes.map(date => {
               return <button  onClick ={() => props.setDay(date)}>{date}</button>
           })}
           </div>
        </div>
    )
    
}



export default Days;