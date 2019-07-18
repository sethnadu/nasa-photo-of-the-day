import React from "react";



function Year (props) {
    const years = ["1995", "1996", "1997", "1998", "1999","2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
    "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
    


    return (
        <div className = "year">
        <p>Pick Year:</p>
        <div className ="buttonDiv yearsButtons">
           {years.map(date => {
               return <button onClick ={() => props.setYear(date)}>{date}</button>
           })}
        </div>
        </div>
    )
    
}



export default Year;