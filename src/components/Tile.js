import React from "react";
import PigDetails from "./PigDetails";

function Tile({pig, selectedPig, updateSelectedPig}){
    
    function handleSelectPig(event){
        updateSelectedPig(event.target.name);
    }
    return(
        <div className = "ui eight wide column">
            <h1>{pig.name}</h1>
            <img className = "hogpic" src = {pig.image} alt = {pig.name} name = {pig.name} onClick = {handleSelectPig} />
            <PigDetails pig = {pig} selectedPig = {selectedPig} />
        </div>
    )
}

export default Tile;
