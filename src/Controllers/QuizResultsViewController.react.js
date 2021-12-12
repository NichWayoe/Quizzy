import QuizResultsView from'../Views/QuizResultsView.react'

export default function QuizResultsViewController(props) {
   const {answers, userAnswers, numberOfQuestions} = props;
   let score = 0;
   console.log(userAnswers)
   console.log(answers)
   for (let i=1; i <=  numberOfQuestions; i++) {
       console.log(userAnswers[i])
       if  (userAnswers[i] == answers[i]) {
           score += 1
           console.log("dsdsds")
       }
   }
    return <QuizResultsView score={score} numberOfQuestions={numberOfQuestions}/> 
}