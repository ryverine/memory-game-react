import "./App.css";

import React, { useState } from "react";
import { Subtitle, Title } from "./components/Title";

import ImageSection from "./components/ImageSection";

// import ImgEasy from "./imgEasy.json";
import ImgNormal from "./imgNormal.json";
// import ImgHard from "./imgHard.json";

function App() {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [images, shuffleImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);


  function startGame() {

    shuffleImages((images) => {
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
      //console.log("shuffled: " + currentImages.map((img) => " " + img.name));
      return [...currentImages];
    });
  }

  function alert()
  {
    console.log("Alert From App.js");
  }

  return (
    <>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <div>
        <button onClick={startGame}>Start!</button>
        <ImageSection images={images} funct={alert}/>
      </div>
    </>
  );
}

export default App;
