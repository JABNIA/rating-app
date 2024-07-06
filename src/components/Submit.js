import React, { useState } from "react";


export default function Submit(props){

    const [isOrange, setIsOrange] = useState(true)
    

    return (<button type="submit" className="submitbtn" 
    style={{backgroundColor: isOrange ? "#FC7614" : '#FFFFFF',
     color: isOrange ? '#FFFFFF' : "#FC7614" }} 
     onMouseEnter={() => {
        setIsOrange(!isOrange)
    }}
    onMouseLeave={() => {
        setIsOrange(!isOrange)
    }}
    onClick={props.subm}
    >SUBMIT</button>)
}