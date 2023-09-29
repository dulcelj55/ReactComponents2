import { useState } from "react";
import "./index.css";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("hotpink");
  const changeRed = () => {
    setCurrentColor("red");
  };
  const changeBlue = () => {
    setCurrentColor("blue");
   
  };
  const changeGreen = () => {
    setCurrentColor("green");
    
    
};


console.log(currentColor);
  return (
    <>
      <div className={currentColor}>ColorPicker</div>
      <button  onClick={changeRed}>Red</button>
      <button onClick={changeBlue}>Blue</button>
      <button onClick={changeGreen}>Green</button>
      <div currentcolor={currentColor}></div>i want to change the background
      the color of the button i tried to pass it as props
    </>
  );
};

export default ColorPicker;
