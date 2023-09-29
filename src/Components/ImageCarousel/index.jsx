import {useState} from 'react'
import "../../assets/Images/curious.jpeg"
import"../../assets/Images/muzzle.jpeg"
import"../../assets/Images/silly.jpeg"
import"../../assets/Images/smile.jpeg"
import"../../assets/Images/sweetbug.jpeg" 

const ImageCarousel = () => {
const [images, setImages]= useState(["../../assets/Images/curious.jpeg","../../assets/Images/muzzle.jpeg","../../assets/Images/silly.jpeg","../../assets/Images/smile.jpeg","../../assets/Images/sweetbug.jpeg" ])
const [currentIndex, setCurrentIndex]= useState(0)
const preHandle =(e)=>{
e.prevent.Default 
if (currentIndex== images.length-1){
    setCurrentIndex(0)
}else{
    setCurrentIndex(currentIndex +1)
}
}
const nextHandle =(e)=>{
    e.prevent.Default 
    if (currentIndex== 0){
        setCurrentIndex(array.length-1)
    }else{
        setCurrentIndex(currentIndex -1)
    }
    (setCurrentIndex(currentIndex +1) )
}

  return (
    <>
    <div>ImageCarousel</div>
    <img src={images[currentIndex]}/>
    <button onClick={preHandle}>Previous</button>
    <button onClick={nextHandle}>Next</button>

</>
  )
}

export default ImageCarousel