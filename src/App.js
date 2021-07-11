import React, { useState } from 'react';
import { lookupTable } from "./data"

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(1);
  const [lang, setLang] = useState(lookupTable["language"]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);


  const handleAnswerOptionClick = (e) => { 
		const nextQuestion = currentQuestion + 1;
    if (currentQuestion === 0) {
      setLang(e.target.innerText)
    }
    e.preventDefault();
    setSelectedAnswer([
      ...selectedAnswer, {answer: e.target.innerText}
    ])
    if (nextQuestion < lookupTable["questions"].length+1) {
			setCurrentQuestion(nextQuestion);
		} 
  }

  const foundQuestion = lookupTable["questions"].find(q => q.id === currentQuestion)
  const questionText = foundQuestion && foundQuestion["question"][lang]
  const foundAnswers = foundQuestion? foundQuestion["answers"][lang] : []

  return (
    <div className='app'>
				<>
					<div className='question-section'>
						<div className='question-text'>{questionText}</div>
					</div>
					<div className='answer-section'>
						{foundAnswers.map((answerOption) => (
							<button onClick={(e) => handleAnswerOptionClick(e)}>{answerOption}</button>
						))}
					</div>
				</> 
    </div>
  )
  
}