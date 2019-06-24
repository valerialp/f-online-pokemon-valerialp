import React from 'react';
import "./styles.scss";
import pokeball from "../../images/pokeball.svg"

const Loading = () => {
    return(
        <img src={pokeball} className="loading" alt="loading symbol"/>
    )
}

export default Loading;