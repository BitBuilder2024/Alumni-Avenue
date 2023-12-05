import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import '.././HomeScreen/HomeScreen.css'

function GroupCard (props){
    return(
        <div class = "homeGroupCard">
            <div class = "hgcLeftSide">
                <p class = "homeGroupName">{props.gName}</p>
                <img class = "homeGroupPic" src = {props.gPic} alt = "Group Picture"/>
            </div>
            <div class = "hgcRightSide">
                <p>{props.nMem} Members</p>
                <button class = "homeBtn">- Leave Group</button>
            </div>
        </div>
    )
}

export default GroupCard;