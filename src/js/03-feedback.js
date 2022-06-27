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

  console.log(currentDataUser);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData[input.name] = '';
  formData[textarea.name] = '';
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function pushToInput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const currentDataUser = JSON.parse(savedData);

  if (currentDataUser.email) {
    formData[input.name] = currentDataUser.email;
    input.value = currentDataUser.email;
  }
  if (currentDataUser.message) {
    formData[textarea.name] = currentDataUser.message;
    textarea.value = currentDataUser.message;
  }
}
