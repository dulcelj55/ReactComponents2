import {useState} from 'react'
import "./index.css"



const ImageCarousel = () => {
const [images, setImages]= useState(["src/assets/Images/curious.jpeg","src/assets/Images/muzzle.jpeg","src/assets/Images/silly.jpeg","src/assets/Images/smile.jpeg","src/assets/Images/sweetbug.jpeg" ])
const [currentIndex, setCurrentIndex]= useState(0)
const nextHandle =(e)=>{
e.preventDefault() 
if (currentIndex=== images.length-1){
    setCurrentIndex(0)
}else{
    setCurrentIndex(currentIndex +1)
}
}
const preHandle =(e)=>{
    e.preventDefault() 
    if (currentIndex== 0){
        setCurrentIndex(images.length-1)
    }else{
        setCurrentIndex(currentIndex -1)
    }}
  

  return (
    <>
    <div>ImageCarousel</div>
    <br/>
    <button onClick={preHandle}>Previous</button>
    <button onClick={nextHandle}>Next</button>
    <img className="pictures" src={images[currentIndex]}/>
    <br/>
   

</>
  )
}

export default ImageCarousel