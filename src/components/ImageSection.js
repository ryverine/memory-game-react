import React, {useState} from "react";
import ImageCard from './ImageCard'
import "./style.css";

export default function ImageSection({ images }) {

  return (
    images.map(image => {
      return <ImageCard key={image.id} image={image} src={image.image} name={image.name}/>
    })
  );
}

