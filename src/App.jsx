import './App.css';
import React, {useState} from 'react';
function Room() {

const [islit, setlit] =useState(true);

  return ( <div className={`room ${islit}`}>
   
      the room is {islit? 'lit' : 'dark'}
      <br/>
      <br/>

    <button onClick={()=>{setlit("lit")}}>on</button> 
    <br/>
    <br/>
    <button onClick={()=>{setlit("dark")}}>off</button>
    
    
    
   
  </div> );
}

export default Room;
