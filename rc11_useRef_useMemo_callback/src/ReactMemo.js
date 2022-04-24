import React from 'react';
import Header from './components/Header';
import {useState} from "react";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";

const ReactMemo = () => {

  const [count, setCount] = React.useState(0); //useState import edilmeden böyle kullanabilirsin
  const [img, setImg] = useState();


  const increase = () => {
    setCount(count + 1 );
  };

  console.log(count);

  return (
    <div>
      <Header img = {img}/>
      <h1> Count: {count}</h1>
      <button onClick={increase}>INCREASE</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
    </div>
  )
}

export default ReactMemo
