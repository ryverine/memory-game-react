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

  function updateGame(img)
  {

    console.log("img.name: " + img.name);

    if(clickedImages.length > 0)
    {
      var foundImage = false;
      // check if image is already in clickedImages
      for(var clickedImagesIndex = 0; clickedImagesIndex < clickedImages.length; clickedImagesIndex++)
      {
        if(img.name === clickedImages[clickedImagesIndex].name)
        {
          foundImage = true;
          break;
        }
      }
    
      if(foundImage)
      {
        setGameOver(true);
      }
      else
      {
        clickedImages.push(img);
        incrementScore(1);
        setImages(shuffleImages());
      }
      
    }
    else
    {
      clickedImages.push(img);
      incrementScore(1);
      setImages(shuffleImages());
    }
  }

  if(gameStarted)
  {
    if (gameOver) 
    {
      if(score === maxScore)
      {
        return (
          <>
            <Title>YOU WON!</Title>
            <Subtitle>Refresh to play again!</Subtitle>
            <div><span>Score: </span>{score} / {maxScore}</div>
          </>
        );
      }
      else
      {
        return (
          <>
            <Title>GAME OVER!</Title>
            <Subtitle>Refresh to try again.</Subtitle>
            <div><span>Score: </span>{score} / {maxScore}</div>
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
          <div><span>Score: </span>{score}</div>
          <div>
            <ImageSection images={images} updateGame={updateGame}/>
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
