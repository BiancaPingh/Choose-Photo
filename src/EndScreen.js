import React from "react";
import './App.css';
import {useLocation} from 'react-router-dom';

function EndScreen() {

 const {state} = useLocation();
 const {srcFinal} = state;

 const backHome = () =>{
   return window.location.href = '/';
 }

  return (
    <div className="App">
      <header className="App-header">
        <p>This is the photo you liked most:</p>
        <img className="App-final" src={srcFinal} alt="imgFin" />
        <br/>
        <button align="center" onClick={backHome} style = {{backgroundColor:'#808e9c', color: 'black'}} >Play Again</button>
      </header>
    </div>
  );
}
export default EndScreen;
