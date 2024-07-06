import React, { useState } from "react";


const numbers = [1,2,3,4,5]


export default function Rating(props){

    
    const [count, setCount] = useState(0)

    function select(number) {
                setCount(number)
                }
    
    
    
    function Rate(props){

        const [isOver, setIsOver] = useState(false)
    
        function over(){
            setIsOver(!isOver)
        }
        if (count === props.num){        
                return (
                <li 
                id={props.num} 
                className="rate" 
                onClick={() => {
                    select(props.num)
                    props.rateApp(props.num)
                }}
                style={
                    {
                       backgroundColor: count === props.num ? "#7C8798" : '#262E38',
                       color: count === props.num ? "#FFFFFF" : '#7C8798'
                    }
                    }>    
                    {props.num}
                </li>
                )
        }else {
                return (
                <li 
                id={props.num}
                className="rate" 
                onMouseEnter={over} 
                onMouseLeave={over}
                onClick={() => {
                    select(props.num)
                    props.rateApp(props.num)
                }} 
                style={
                    {
                        backgroundColor: isOver ? "#FC7614" : '#262E38',
                        color: isOver ? "#FFFFFF" : '#7C8798'
                    }
                     }>    
                    {props.num}
                </li>
                )
            }
        }
           
    
             
        return (
            <div id="rating">
            <ul id="rating-list">
                {numbers.map(function(number) {
                        return <Rate num={number} rateApp={props.points}/>    
                } )}
            </ul>
        </div>
    )
  }  




 // if (selected){        
        //         return (
        //         <li 
        //         id={props.number} 
        //         className="rate" 
        //         onClick={select}
        //         style={
        //             {
        //                backgroundColor: selected ? "#7C8798" : '#262E38',
        //                color: selected ? "#FFFFFF" : '#7C8798'
        //             }
        //             }>    
        //             {props.number}
        //         </li>
        //         )
        // }else {
        //         return (
        //         <li 
        //         id={props.number}
        //         className="rate" 
        //         onMouseEnter={rateHover} 
        //         onMouseLeave={rateHover}
        //         onClick={select} 
        //         style={
        //             {
        //                 backgroundColor: isTrue ? "#FC7614" : '#262E38',
        //                 color: isTrue ? "#FFFFFF" : '#7C8798'
        //             }
        //              }>    
        //             {props.number}
        //         </li>
        //         )
        //     }
        // }