import React from "react";
import styled from "styled-components";

const YearDiv = styled.div `
border: 4px solid black;
border-radius: 5px;
padding: 10px;
width: 180px;
height: 200px;
overflow: scroll;
margin: 20px;
background-image: url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
`;


const DayMonthDiv = styled.div `
  border: 4px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 100px;
  height: 200px;
  overflow: scroll;
  margin: 20px;
  background-image: url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");    
`;

const ButtonStyleDayMonth = styled.div `
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    border: 2px solid #0066b3;
    background-color: black;
    color: white;
    font-size: 2rem;
    box-shadow: 5px 5px 10px;

    &:hover {
        background-color: #0066b3;
       
        box-shadow: 5px 5px 10px #ec171e;
        border: 1px solid white;
    }
    
    
`;

const ButtonStyleYear = styled.div `
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    border: 2px solid #0066b3;
    background-color: black;
    color: white;
    font-size: 2rem;
    box-shadow: 5px 5px 10px;

    &:hover {
        background-color: #0066b3;
        color: white;
        box-shadow: 5px 5px 10px #ec171e;
        border: 1px solid white;
    }
`;

const Paragraph = styled.div `
    font-size: 1.6rem;

`





export function Year (props) {
    const years = ["1995", "1996", "1997", "1998", "1999","2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
    "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
    


    return (
        <div>
        <Paragraph>Pick Year:</Paragraph>
        <YearDiv>
           {years.map(date => {
               return <ButtonStyleYear onClick ={() => props.setYear(date)}>{date}</ButtonStyleYear>
           })}
        </YearDiv>
        </div>
    )
    
}

export function Months (props) {
    const monthArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12"];

    return (
        <div>
        <Paragraph>Pick Month:</Paragraph>    
        <DayMonthDiv>
        
           {monthArray.map(date => {
               return <ButtonStyleDayMonth onClick ={() => props.setMonth(date)}>{date}</ButtonStyleDayMonth>
           })}
        </DayMonthDiv>
        </div>
    )
    
}



export function Days (props, key) {
    const dayOnes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", 
    "18", "19", "20", "21", "22", "23", "24", "25", "26" ,"27" ,"28", "29", "30", "31"];

    return (
        <div>
        <Paragraph>Pick Day:</Paragraph>
        <DayMonthDiv>
           {dayOnes.map(date => {
               return <ButtonStyleDayMonth  onClick ={() => props.setDay(date)}>{date}</ButtonStyleDayMonth>
           })}
           </DayMonthDiv>
        </div>
    )
    
}