const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailField: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const throttler = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';
let values = {};

refs.feedbackForm.addEventListener(
  'input',
  throttler(feedbacFormkDataHandler, 500)
);

function feedbacFormkDataHandler(event) {
  values[event.target.name] = event.target.value;

  let storageValues = JSON.stringify(values);
  localStorage.setItem(STORAGE_KEY, storageValues);
}

window.addEventListener('load', getStorageDataHandler);

function getStorageDataHandler() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }

  let storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageData.email) {
    values.email = storageData.email;
    refs.emailField.value = storageData.email;
  }

  if (storageData.message) {
    values.message = storageData.message;
    refs.textarea.value = storageData.message;
  }
}

refs.feedbackForm.addEventListener('submit', formResetHandler);

function formResetHandler(event) {
  event.preventDefault();

  let storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageData) {
    console.log(storageData);
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  values = {};
}
