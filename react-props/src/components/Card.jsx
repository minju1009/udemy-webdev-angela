import React from "react";
import Avatar from "./avatar.jsx";
import Detail from "./Detail.jsx";


function Card(props) {
    return (
        <div className="card">
          <div className="top">
            <p>{props.key}</p>
            <h2 className="cardname">{props.name}</h2>
            <Avatar imgUrl={props.imgUrl}/>
          </div>
          <div className="bottom">
            <Detail detailInfo = {props.phone} />
            <Detail detailInfo = {props.email} />
          </div>
        </div>
    )
  }

  export default Card;
