import React from 'react'
import {useState} from "react"

const NewsTicker = (props) => {

const [currentNewsIndex, setCurrentNewsIndex]= useState(0)

const nextNewsItem =(e)=>{
   e.preventDefault
   setCurrentNewsIndex(currentNewsIndex +1)
    if (currentNewsIndex==props.news.length-1){
        setCurrentNewsIndex(0)
    }
}

  return (
    <>
    <div> NewsTicker</div>
    <div> {props.news[currentNewsIndex]}</div>
    <button onClick={nextNewsItem}>Next</button>
    
    </>

  )
}

export default NewsTicker