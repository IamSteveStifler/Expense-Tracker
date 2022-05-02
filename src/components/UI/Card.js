import React from "react";
import './Card.css';
function Card(props){
    const classop = "card " + props.className;
    return(
        <div className={classop}>{props.children}</div>
    );
}

export default Card;