import React from "react";
import "./style.css";

export default function ImageCard({ image }) 
{
  console.log("ImageCard()");
  return (
      <div>
        <img src={image.image} id={image.id} alt={image.name} />
      </div>
  );
}

