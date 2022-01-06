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
    <span className="imageCard">
      <img src={props.image.image} id={props.image.id} onClick={() => props.updateGame(props.image)} alt={props.image.name} />
    </span>
);

/*
class ChildComponent2{
      render(){
  return (<Button onClick={()=>this.props.myFunction(param)}>SomeButton</Button>)
    }
*/
}

