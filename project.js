function generateQuestion() {
  const questions = [
    {
      question: 'Hewan hewan apa yang cuman dua huruf',
      answer: 'udang'
    },
    {
      question: 'Pemain bola yang beratnya cuman 3 kg',
      answer: 'Bambang tabung gas'
    },
    {
      question: 'Kenapa matahari tenggelam',
      answer: 'Karena ga bisa berenang'
    },
    {
      question: 'Ikan ikan apa yang berhenti',
      answer: 'Ikan paus'
    },
    {
      question: 'Burung burung apa yang suka nolak',
      answer: 'Burung gakgak'
    }
  ]
  
  const randomIndex = Math.floor(Math.random() * 4) 
  const selectedQuestion = questions[randomIndex]
  console.log(selectedQuestion)
  
  const questionElement = document.getElementById('question')
  
  questionElement.innerText = selectedQuestion.question

  return selectedQuestion
}

let selectedQuestion = generateQuestion()


const answerButton = document.getElementById('checkAnswer')

answerButton.addEventListener('click', function () {
  console.log('menekan periksa jawaban')

  const answerElement = document.getElementById('answer')

  console.log(answerElement.value)

  if (answerElement.value.toLowerCase() === selectedQuestion.answer.toLowerCase()) {
    alert('Jawaban anda benar')
  } else {
    alert('Anda kurang beruntung silahkan coba lagi')
  }
})

const newQuestionButton = document.getElementById('newQuestion')

newQuestionButton.addEventListener('click', function () {
  selectedQuestion = generateQuestion()
})
