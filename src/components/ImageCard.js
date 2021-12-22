import React from "react";
import "./style.css";

export default function ImageCard({ image }) 
{
  //const [image, imageClicked] = useState({})

  const imageClicked = (imageID) => {
      console.log("handleImgClick(" + imageID + ")");
    }

  return (
      <div>
        <img src={image.image} id={image.id} onClick={imageClicked(image.id)} alt={image.name} />
      </div>
  );
}

