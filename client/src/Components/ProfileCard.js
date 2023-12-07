import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import '.././HomeScreen/HomeScreen.css'


function ProfileCard(props){
   return(
   <div class = "homeProfileCard">
            <img class = "profile-picture-container" src = {props.uPic} alt = "Profile Picture"/>
       {/* Profile Info */}
       <div>
           <p class = "profCardWords">{props.uName}</p>
           <p class = "profCardWords">{props.uSchool} {props.uClass}</p>
           <p class = "profCardWords">{props.uJob}</p>
       </div>
   </div>
   )
}


export default ProfileCard;
