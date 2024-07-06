import React, { useState } from "react";
import Star from "./components/star";
import Heading from './components/headnig';
import Paragraph from "./components/Paragraph";
import Rating from "./components/rating";
import Submit from "./components/Submit";
import Thankpage from "./components/thanks";

export default function Container() {

    const [submited, setSubmited] =useState(false)
    const [rate, setRate] = useState(0)



    function submit(){
        setSubmited(!submited)
    }


    function rateApp(point) {
        setRate(point)
    }
    if (submited){
        return (
            <div id="container">
                <Thankpage point={rate}/>
            </div>
        )
    }else{
        return ( 
            <div id="container">
            <Star />
            <Heading />
            <Paragraph />
            <Rating points={rateApp}/>
            <Submit subm={submit}/>  
        </div>
    )}
}
//     return (
//         <>
//         <div className="container">
//         <Star />
//         <Heading />
//         <Paragraph />
//         <Rating points={rateApp}/>
//         <Submit subm={submit}/>  
//     </div>
//     <div className="container">
//          <Thankpage point={rate}/>
//     </div>
//         </> 
// )
