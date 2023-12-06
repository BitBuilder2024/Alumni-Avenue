import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import '.././HomeScreen/HomeScreen.css'

function GroupCard({ nMem, gPic, gName, onClick }) {
    return (
        <div className="homeGroupCard" onClick={onClick}>
            <div class="hgcLeftSide">
                <p class="homeGroupName">{gName}</p>
                <img class="homeGroupPic" src={gPic} alt="Group Picture"/>
            </div>
            <div class="hgcRightSide">
                <p>{nMem} members</p>
            </div>
        </div>
    )
}

export default GroupCard;
