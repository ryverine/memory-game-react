import React, { useState } from "react";
import "./style.css";

export default function ImageCard(props)
{

 function imageClicked (image)
  {
    console.log("imageClicked(" + image.name + ")");

  }
  
  /*return (
      <div className="imageCard">
        <img src={image.image} id={image.id} onClick={() => imageClicked(image)} alt={image.name} />
      </div>
  );*/

  return (
    <div className="imageCard">
      <img src={props.image.image} id={props.image.id} onClick={props.funct} alt={props.image.name} />
    </div>
);

}

