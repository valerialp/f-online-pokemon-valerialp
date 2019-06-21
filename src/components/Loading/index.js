import React from 'react';
import "./styles.scss";
import POKEBALL from "../../images/POKEBALL.png"

const Loading = () => {
    return(
        <img src={POKEBALL} className="loading"/>
    )
}

export default Loading;