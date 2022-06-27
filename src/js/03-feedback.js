import throttle from 'lodash.throttle';

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
pushToInput();

function onFormSubmit(event) {
  event.preventDefault();
  const savedData = localStorage.getItem(STORAGE_KEY);
  const currentDataUser = JSON.parse(savedData);

  if (!input.value || !textarea.value) {
    return alert('Заполните все поля');
  }
  // console.log(formData);

  localStorage.clear();
  event.currentTarget.reset();

  console.log(currentDataUser);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function pushToInput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const currentDataUser = JSON.parse(savedData);

  if (!currentDataUser) {
    return;
  }
  input.value = currentDataUser.email;
  textarea.value = currentDataUser.message;
}
