import React from "react";



function Months (props) {
    const monthArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12"];

    return (
        <div className = "month">
        <p>Pick Month:</p>    
        <div className ="buttonDiv daysButtons">
        
           {monthArray.map(date => {
               return <button onClick ={() => props.setMonth(date)}>{date}</button>
           })}
        </div>
        </div>
    )
    
}



export default Months;