import { useState } from "react";
import "./index.css";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("hotpink");
  const [redColor, setRedColor] = useState("grey");
  const [blueColor, setBlueColor] = useState("grey");
  const [greenColor, setGreenColor] = useState("grey");
  const changeRed = () => {
    setCurrentColor("red");
    setRedColor("red");
  };
  const changeBlue = () => {
    setCurrentColor("blue");
    setBlueColor("blue");
   
  };
  const changeGreen = () => {
    setCurrentColor("green");
    setGreenColor("green");
    
    
};


console.log(currentColor);
  return (
    <>
      <div className={currentColor}>ColorPicker</div>
      <button className={redColor} onClick={changeRed}>Red</button>
      <button className={blueColor} onClick={changeBlue}>Blue</button>
      <button className={greenColor}onClick={changeGreen}>Green</button>
      <div currentcolor={currentColor}></div>i want to change the background
      the color of the button i tried to pass it as props
    </>
  );
};

export default ColorPicker;
