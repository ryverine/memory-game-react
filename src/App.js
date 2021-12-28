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

    shuffleImages((previousShuffle) => {
      console.log("shuffled: " + previousShuffle.map((img) => " " + img.name));
      let newShuffle = previousShuffle.map((img) => img);

      let end = newShuffle.length,
        idx;

      // While there remain elements to shuffle
      while (end) {
        // Pick a remaining element...
        idx = Math.floor(Math.random() * end--);

        // Swap with current element.
        [newShuffle[idx], newShuffle[end]] = [newShuffle[end], newShuffle[idx]];
      }
      console.log("shuffled: " + newShuffle.map((img) => " " + img.name));
      return newShuffle;
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
