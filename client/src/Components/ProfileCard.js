import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import '.././HomeScreen/HomeScreen.css'


function ProfileCard(props){
   return(
   <div class = "homeProfileCard">
            <img class = "homeProfPic" src = {props.uPic} alt = "Profile Picture"/>
       {/* Profile Info */}
       <div>
           <p>{props.uName}</p>
           <p>{props.uSchool} {props.uClass}</p>
           <p>{props.uJob}</p>
       </div>
   </div>
   )
}


export default ProfileCard;
