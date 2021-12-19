import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
      <div>
        <img src={props.image} id={props.id} alt="" />
      </div>
  );
}

export default ImgCard;