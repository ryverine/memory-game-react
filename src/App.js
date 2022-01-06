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


  function incrementScore(scoreValue)
  {
    setScore(prevScore => prevScore + scoreValue);
    console.log("Score: " + score);
  }

  function startGame() {

    // set score to 0
    // set gameStarted to TRUE
    // set gameOver to FALSE
    // set maxScore 

    setGameStarted(true);

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
    clickedImages.push(1);
    console.log("clickedImages.length = " + clickedImages.length)

    incrementScore(1);
  }

  /*return (
    <>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <div><span>Score: </span>{score}</div>
      <div>
        <button onClick={startGame}>Start!</button>
        <ImageSection images={images} funct={alert}/>
      </div>
    </>
  );*/

  if(gameStarted)
  {
    return (
      <>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <div><span>Score: </span>{score}</div>
        <div>
          <ImageSection images={images} funct={alert}/>
        </div>
      </>
    );
  }
  else
  {
    return (
      <>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <div>
          <button onClick={startGame}>Start!</button>
        </div>
      </>
    );
  }

}

export default App;
