import React from "react";
import { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  //!1. Kullanım
  /* burada useRef bize Queryselector gibi dom elementine ulaşmamızı sağlıyan bir hook */
  //!2. Kullanım
  /* ikinci olarak da bir object oluşturmamızı sağlar  */
  const [value, setValue] = useState(0);
  // console.log(value);
  const inputRef = useRef(); //initial değer de verebilirsin.
  const divRef = useRef();
  const valueRef = useRef(0); //const value = {"current":0} ile aynı işlev ancak valueRef in referansı savit olduğu için performans sağlıyor.
  console.log(valueRef);

  useEffect(() => {
    /* document.querySelector("input").focus(); //classic focuslanama */
    inputRef.current.focus(); //burda .current dom elementine ulaşıyoruz.
    inputRef.current.parentNode.style.backgroundColor = "yellow"; // üst dive ulaşma
  }, []);

  const ChangeBGColor = () => {
    // divRef.current.style.backgroundColor = "orange";
    /* const colors = [
      "orange",
      "pink",
      "red",
      "purple",
      "cyan",
      "crimson",
      "rgb(175,175,175)",
      "#00ff00",
    ];
    const random = Math.trunc(Math.random()* colors.length);
    divRef.current.style.backgroundColor = colors[random]; */
    
    divRef.current.style.backgroundColor = inputRef.current.value;//inputtan aldığımız değere göre background değiştirme
  };

  const increase = () => {
    setValue(value + 1);
    valueRef.current += 1;
  }


  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input /* type="color" */ ref={inputRef} placeholder="Enter text..." />
      <button onClick={ChangeBGColor}>ChangeBGColor</button>
      <h3>{valueRef.current}</h3>
      <button onClick={increase}>INCREASE</button>
    
    </div>
  );
};

export default UseRefComponent;
