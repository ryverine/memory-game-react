import "./App.css";

import React, { useState } from "react";
import { Subtitle, Title } from "./components/Title";

import ImageSection from "./components/ImageSection";

// import ImgEasy from "./imgEasy.json";
import ImgNormal from "./imgNormal.json";
// import ImgHard from "./imgHard.json";

function App() {
  console.log("App()");

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [images, setImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);


  function incrementScore(scoreValue)
  {
    // console.log("incrementScore()");
    setScore(prevScore => prevScore + scoreValue);
    var newScore = score + scoreValue;
    //setScore(newScore);
    console.log("Score: " + score);
    console.log("newScore: " + newScore);
    console.log("maxScore: " + maxScore);

    if (newScore === maxScore) 
    {
      setGameOver(true);
    }
  }

  function shuffleImages()
  {
    console.log("shuffleImages()");

    let currentImages = ImgNormal;// this will need to change based on difficulty selected

    let end = currentImages.length,
      idx;

    // While there remain elements to shuffle
    while (end) {
      // Pick a remaining element...
      idx = Math.floor(Math.random() * end--);

      // Swap with current element.
      [currentImages[idx], currentImages[end]] = [currentImages[end], currentImages[idx]];
    }
    // console.log("shuffled: " + currentImages.map((img) => " " + img.name));
    return [...currentImages];

    /*
      sometimes the shuffle returns the images in the order they were already in.
      This can be confusing for the player, so we need a way to know what order the images are in and to force the shuffle to always be a different order.
    */
  }

  function startGame() 
  {
    console.log("startGame()");
    
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
    setImages(shuffleImages());

    setMaxScore(prevMaxScore => prevMaxScore + ImgNormal.length);// this will need to change based on difficulty

  }

  function alert()
  {
    //clickedImages.push(1);
    //console.log("clickedImages.length = " + clickedImages.length)

    console.log("alert()");

    incrementScore(1);
    setImages(shuffleImages());
  }

  if(gameStarted)
  {
    if (gameOver) 
    {
      return (
        <>
          <Title>GAME OVER</Title>
          <Subtitle>Refresh to try again!</Subtitle>
        </>
      );
    } 
    else
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
