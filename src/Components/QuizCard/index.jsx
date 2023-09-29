import {useState} from 'react'

const QuizCard = () => {
const [questions, setQuestions]= useState(["What is useState", "What are Props", "What are Components"])
const [currentQuestionIndex, setCurrentQuestionndex]= useState(0)
const [userAnswers, setUserAnswers]= useState([])

const nextQuestion =(e)=>{
    e.preventDefault()
    setCurrentQuestionndex(currentQuestionIndex +1)
}

const prevQuestion =(e)=>{
    e.preventDefault()
    setCurrentQuestionndex(currentQuestionIndex +1)
}
const recordAnswer =(e)=>{
    setUserAnswers()
}
  return (
    <div>
        <button onClick={prevQuestion}>Previous</button>
        <button onClick={nextQuestion}>Next</button>




    </div>
  )
}

export default QuizCard