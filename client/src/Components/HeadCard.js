import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import '.././HomeScreen/HomeScreen.css'

function HeadCard (props){
    
    return(
    <div  class = "homeHeader">
        <img class = "homeLogo" src = '/AlumAveLogo.png' alt = "Alumni Avenue Logo"/>
        <h1>Alumni Avenue</h1>
        <button>Profile</button>
    </div>
    )
}

export default HeadCard;