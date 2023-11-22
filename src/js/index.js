//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let seconds = 0;
//render your react application
setInterval(() => {
    const digitOne = Math.floor((seconds/1)%10)
    const digitTwo = Math.floor((seconds/10)%10)
    const digitThree = Math.floor((seconds/100)%10)
    const digitFour = Math.floor((seconds/1000)%10)
    const digitFive = Math.floor((seconds/10000)%10)
    const digitSix = Math.floor((seconds/100000)%10)
console.log({digitOne,digitTwo,digitThree,digitFour,digitFive,digitSix})
    seconds +=1;
    ReactDOM.render(<Home one={digitOne} two={digitTwo} three={digitThree} four={digitFour} five={digitFive} six={digitSix} />, document.querySelector("#app"));
}, 1000); 



