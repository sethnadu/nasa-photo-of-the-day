import React, {useState, useEffect} from "react";



function Form (props) {
    

    return (
        <div>
        <form>
             <input  type="text" name="day" placeholder="date ex. 2019/07/15" /> 
             <input  onClick = {() => props.setDay()} type="submit" value="submit" />
              </form>
        </div>
    )
    
}



export default Form;