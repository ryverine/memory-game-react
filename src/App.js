
import React, { useState, useRef, useEffect } from "react";
import ImageSection from "./components/ImageSection";
import {Title, Subtitle} from "./components/Title";
import './App.css';
import ImgNormal from "./imgNormal.json";

/*state = {
  score: 0,
  images: imgNormal,
  clickedImgs: [],
  gameOver: false
};
*/

function App() {

  const [images, shuffleImages] = useState([])

  function startGame()
  {
    console.log("startGame()");


    shuffleImages(shuffled =>{

      console.log("shuffled: " + shuffled)

      let currentImages = ImgNormal;
      let newImages = [];
  
      while (newImages.length < 4)
      {
        var currentImageIndex =  Math.floor(Math.random()*currentImages.length);
        var testImage = currentImages[currentImageIndex];
        var foundImage = false;
        for(var i = 0; i < newImages.length; i++)
        {
          console.log("testImage.name = " + testImage.name);
          if (testImage.id === newImages[i].id)
          {
            foundImage = true;
            break;
          }
        }
  
        if(!foundImage)
        {
          newImages.push(testImage);
        }
      }
  
      return newImages;
    })
  }

  return (
    <>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <div>
        <button onClick={startGame}>Start!</button>
        <ImageSection images={images} />
      </div>
    </>
  );
}

export default App;