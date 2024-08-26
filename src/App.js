import React, { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import EndScreen from './EndScreen';
import i2 from "./images/2.jpg";
import i1 from "./images/1.jpg";
import i3 from "./images/3.jpg";
import i4 from "./images/4.jpg";
import i5 from "./images/5.jpg";
import i6 from "./images/6.jpg";
import i7 from "./images/7.jpg";
import i8 from "./images/8.jpg";
import './App.css';
import ReactDOM from 'react-dom/client';

const imgList = [i1,i2,i3,i4,i5,i6,i7,i8];

let i = 0;
let j = 1;

function App() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(imgList[i]);
  const [imageSrc1, setImageSrc1] = useState(imgList[j]);

  const changeImg = (index) =>{
    if(index==0 && i<imgList.length-1&&j<imgList.length-1){
      i= ((i > j) ? i : j) + 1;
      console.log(i);
      return;
    }
    if(i<imgList.length-1&&j<imgList.length-1){
      j= ((i > j) ? i : j) + 1;
      console.log(j);
      return;
    }
    return endscreen(imgList[(i < j) ? i : j]);
  }

  const endscreen = (srcFinal) => {
    //return window.location.href = '/endscreen';
    return navigate('/endscreen', {state: {srcFinal: srcFinal}});
  }

  const changeImageSrc = () => {
      setImageSrc(imgList[i]);
    }
    const changeImageSrc1 = () => {
        setImageSrc1(imgList[j]);
      }
  return (
    <div className="App">
      <header className="App-header">
        <p>Which photo do you like more?</p>
        <img onClick={() => {changeImg(0); changeImageSrc();}} src={imageSrc1} className="App-img" alt="img0" />
        <br/>
        <img onClick={() => {changeImg(1); changeImageSrc1();}} src={imageSrc} className="App-img" alt="img1" />
      </header>
    </div>
  );
}

export default App;
