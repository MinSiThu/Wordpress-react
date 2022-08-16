import React from "react";
import { useNavigate } from "react-router-dom";
import {interstitial} from "../ads"

const GoBackButton = ()=>{
    let history = useNavigate();

    const goBack = ()=>{
        interstitial();
        history(-1)
    }

    return <section className="backSection">
        <button className="backButton" onClick={goBack}>&#x2190;</button>
    </section>
}

export default GoBackButton;