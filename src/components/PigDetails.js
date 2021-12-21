import React from "react";

function PigDetails({pig, selectedPig}){
    
    return(
        <p style = {{display: pig.name === selectedPig ? "block" : "none" }}>
            <strong>Specialty: </strong>{pig.specialty}
            <br />
            <strong>Weight: </strong>{pig.weight}
            <br />
            <strong>Greased: </strong>{pig.greased === true ? "Yes": "No"}
            <br />
            <strong>Highest medal achieved: </strong>{pig[ `highest medal achieved` ]}
        </p>
    )
}

export default PigDetails;
