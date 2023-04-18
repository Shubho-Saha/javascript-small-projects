
const form = document.getElementById('form');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const passConfirm = document.getElementById('password-confirmation');
const terms = document.getElementById('terms');
const errors = document.querySelector('.errors')
const errorList = document.querySelector('.errors-list')


form.addEventListener('submit', e => {
  
  clearErrors();

  const errorMsg = []

  if (userName.value.length < 6) {
    errorMsg.push('username must be at least 6 characters long')
  }
  if (password.value.length < 10) {
    errorMsg.push('Password must be 10 characters long')
  }
  if (password.value !== passConfirm.value) {
    errorMsg.push('Password must match')
  }
  if (!terms.checked) {
    errorMsg.push('You must accept the terms')
  }

  if (errorMsg.length > 0) {
    e.preventDefault();
    showErrors(errorMsg)
  }

})



function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0])
  }

  errors.classList.remove('show');
}


function showErrors(errorMessages) {
  errorMessages.forEach(msg => {
    let errElement = document.createElement('li');
    errElement.innerText = `${msg}`
    errorList.appendChild(errElement);
  })
  errors.classList.add('show')

}
