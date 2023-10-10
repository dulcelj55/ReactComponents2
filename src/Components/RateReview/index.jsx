import {useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import './index.css'

const RateReview = () => {
const [rating, setRating]= useState(0)
const [isSubmitted, setIsSubmitted] = useState(false)
const [star, setStar] = useState (false)
console.log (rating)
const change1Handle= ()=>{
   
    setRating(1)
    setStar(true)
    }
const change2Handle= ()=>{
    
        setRating(2)
        setStar(true)
        }
const change3Handle= ()=>{
   
        setRating(3)
        setStar(true)
        }
const change4Handle= ()=>{
   
        setRating(4)
        setStar(true)
        }
const change5Handle= ()=>{
   
    
        setRating(5)
        setStar(true)
        }
const submitReview= ()=>{
   
    if (rating >= 1){
setIsSubmitted(true)
    }
}

  return (
    <>
    <div>RateReview</div>
    <div className="stars">
    <StarRateIcon onClick={change1Handle}className={`star-icon ${rating>0 ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change2Handle}className={`star-icon ${rating>1 ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change3Handle}className={`star-icon ${rating>2 ?"color-yellow" : ""}`}/>
    <StarRateIcon onClick={change4Handle}className={`star-icon ${rating>3 ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change5Handle}className={`star-icon ${rating>4 ? "color-yellow" : ""}`}/>

<button onClick={submitReview} >Submit</button>
<div> {isSubmitted === true ? "Thank you for your feedback": ""}</div>
    </div>
    </>
  )
}

export default RateReview