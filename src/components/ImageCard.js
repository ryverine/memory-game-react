import React, {useState} from "react";
import "./style.css";

export default function ImageCard({image})
{

  function imageClicked (imageName)
  {
    console.log("imageClicked(" + imageName + ")");
  }
  
  return (
      <div>
        <img src={image.image} id={image.id} onClick={e => imageClicked(image.name)} alt={image.name} />
      </div>
  );
}

