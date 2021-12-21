import React, {useState} from "react";
import Tile from "./Tile"

function Tiles({pigs}){
    const [selectedPig, setSelectedPig] = useState("");

    function updateSelectedPig(selectedPigName) {
        setSelectedPig(selectedPigName);
    }

    function DisplayTiles() {
        return(
            pigs.map((pig) => {
                return(
                <Tile key = {pig.name} pig = {pig} selectedPig = {selectedPig} updateSelectedPig = {updateSelectedPig} />
                )
            })
        )
    }
    return(
        <div className = "ui grid container">
            <DisplayTiles pigs = {pigs} selectedPig = {selectedPig} />
        </div>
    )
}

export default Tiles;
