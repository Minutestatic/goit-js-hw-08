import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onSaveInput, 500));
form.addEventListener('submit', onSubmit);
const userInput = {};

function onSaveInput(evt) {
  userInput.email = evt.currentTarget.email.value;
  userInput.message = evt.currentTarget.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userInput));
}

function checkStorageStatus() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedData) {
    form.email.value = savedData.email;
    form.message.value = savedData.message;
  }
}
checkStorageStatus();

function onSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

  console.log({
    email: userInput.email,
    message: userInput.message,
  });
}
