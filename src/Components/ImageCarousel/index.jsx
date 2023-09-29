import {useState} from 'react'


const ImageCarousel = () => {
const [images, setImages]= useState(["../../assets/Images/curious.jpeg","../../assets/Images/muzzle.jpeg","../../assets/Images/silly.jpeg","../../assets/Images/smile.jpeg","../../assets/Images/sweetbug.jpeg" ])
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
    <img src={images[currentIndex]}/>
    <button onClick={preHandle}>Previous</button>
    <button onClick={nextHandle}>Next</button>

</>
  )
}

export default ImageCarousel