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
  const [images, shuffleImages] = useState(ImgNormal);

  function startGame() {
    console.log("startGame()");

    shuffleImages((images) => {
      console.log("shuffled: " + images.map((img) => " " + img.name));

      let end = images.length,
        idx;

      // While there remain elements to shuffle
      while (end) {
        // Pick a remaining element...
        idx = Math.floor(Math.random() * end--);

        // Swap with current element.
        [images[idx], images[end]] = [images[end], images[idx]];
      }
      console.log("shuffled: " + images.map((img) => " " + img.name));
      return [...images];
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
