import {useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';

const RateReview = () => {
const [rating, setRating]= useState(0)
const [isSubmitted, setIsSubmitted] = useState(false)
const [star, setStar] = useState (false)

const change1Handle= (e)=>{
    e.prevent.Default
    setRating(rating +1)
    setStar(true)
    }
const change2Handle= (e)=>{
    e.prevent.Default
        setRating(rating +2)
        setStar(true)
        }
const change3Handle= (e)=>{
    e.prevent.Default
        setRating(rating +3)
        setStar(true)
        }
const change4Handle= (e)=>{
    e.prevent.Default
        setRating(rating +4)
        setStar(true)
        }
const change5Handle= (e)=>{
    e.prevent.Default
        setRating(rating +5)
        setStar(true)
        }
const submitReview= (e)=>{
    e.prevent.Default
    if (rating >= 1){
setIsSubmitted(true)
    }
}

  return (
    <>
    <div>RateReview</div>
    <div className="stars">
    <StarRateIcon onClick={change1Handle}className={`star-icon ${star ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change2Handle}className={`star-icon ${star ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change3Handle}className={`star-icon ${star ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change4Handle}className={`star-icon ${star ? "color-yellow" : ""}`}/>
    <StarRateIcon onClick={change5Handle}className={`star-icon ${star ? "color-yellow" : ""}`}/>

<button onClick={submitReview} >Submit</button>
<div> {isSubmitted === true ? "Thank you for your feedback": ""}</div>
    </div>
    </>
  )
}

export default RateReview