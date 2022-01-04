import "./App.css";

import React, { useState } from "react";
import { Subtitle, Title } from "./components/Title";

import ImageSection from "./components/ImageSection";
import ImgNormal from "./imgNormal.json";

/*state = {
  score: 0,
  images: imgNormal,
  clickedImgs: [],
  gameOver: false
};
*/

function App() {
  const [images, shuffleImages] = useState([]);

  function startGame() {
    console.log("startGame()");

    shuffleImages((images) => {
      console.log("shuffled: " + images.map((img) => " " + img.name));

      let currentImages = ImgNormal;

      let end = currentImages.length,
        idx;

      // While there remain elements to shuffle
      while (end) {
        // Pick a remaining element...
        idx = Math.floor(Math.random() * end--);

        // Swap with current element.
        [currentImages[idx], currentImages[end]] = [currentImages[end], currentImages[idx]];
      }
      console.log("shuffled: " + currentImages.map((img) => " " + img.name));
      return [...currentImages];
    });
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
