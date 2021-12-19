
import React, { useState, useEffect } from "react";
import ImgCard from "./components/imgCard";
import {Title, Subtitle} from "./components/Title";
import ColorCard from "./components/ColorCard";
// import logo from './logo.svg';
import './App.css';
import ImgNormal from "./imgNormal.json";

/*state = {
  score: 0,
  images: imgNormal,
  clickedImgs: [],
  gameOver: false
};

useEffect(() => {
  const images = imgNormal;
  
}, [])
*/

function startGame()
{
  console.log("startGame()");
}

function handleImgClick(e)
{
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([])
  console.log("handleImgClick()");
}

function App() {
  return (
    <>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <div>
        <button onClick={startGame}>Start!</button>
        <ImgCard onClick={handleImgClick()} />
      </div>
    </>
  );
}

export default App;