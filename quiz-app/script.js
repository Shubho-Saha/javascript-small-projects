
const quizForm = document.getElementById('quiz-form');
const answerInputs = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question-item');
const alert = document.querySelector('#alert');


quizForm.addEventListener('submit', e => {
  e.preventDefault();
  const selectedAnswer = Array.from(answerInputs).filter(item => item.checked);

  questions.forEach(item => {
    item.classList.add('incorrect');
    item.classList.remove('correct');
  })

  selectedAnswer.forEach(item => {
    const parent = item.closest('.question-item');

    if (item.value === 'true') {
      parent.classList.add('correct');
      parent.classList.remove('incorrect')
    } else {
      parent.classList.add('incorrect');
      parent.classList.remove('correct');
    }
  })

  const falseAns = Array.from(questions).find(item => item.classList.contains('incorrect'));


  if (falseAns == null) {
    alert.classList.add('active')
    setTimeout(() => {
      alert.classList.remove('active')
    }, 2000);
  }


})

