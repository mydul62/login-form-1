const toggleLine =document.getElementById('toggle-line');
const inputBlock = document.getElementById('input-block ')
const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');
const nameField = document.getElementById('input-name-field');


signIn.addEventListener('click',()=>{
  signIn.classList.remove('disable');
  signUp.classList.add('disable')
  nameField.classList.add('hidden')
})
signUp.addEventListener('click',()=>{
  signUp.classList.remove('disable');
  signIn.classList.add('disable')
  nameField.classList.remove('hidden')
})