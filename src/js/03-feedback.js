import throttle from 'lodash.throttle';

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
pushToInput();

function onFormSubmit(event) {
  event.preventDefault();

  if (!input.value || !textarea.value) {
    alert('Заполните все поля');
  } else {
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData[input.name] = '';
    formData[textarea.name] = '';
  }
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  // console.log(formData)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function pushToInput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const currentDatsUser = JSON.parse(savedData);
  if (!currentDatsUser) {
    return;
  }
  input.value = currentDatsUser.email;
  textarea.value = currentDatsUser.message;
}
