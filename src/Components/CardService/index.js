import React from "react";
import fardas from "./../../assets/fardas.svg";

const CardService = ({ id, title, description }) => {
    return (
        <div className="card" id={id}>
            <img src={fardas} alt="Service-icon" width={150} height={150} />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardService;