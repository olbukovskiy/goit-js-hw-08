const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailField: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const throttler = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';
let values = {};

refs.emailField.addEventListener(
  'input',
  throttler(feedbacEmailkDataHandler, 500)
);

refs.textarea.addEventListener(
  'input',
  throttler(feedbackTextareaDataHandler, 500)
);

function feedbacEmailkDataHandler(event) {
  values.email = event.target.value;
  let storageValues = JSON.stringify(values);
  localStorage.setItem(STORAGE_KEY, storageValues);
}

function feedbackTextareaDataHandler(event) {
  values.message = event.target.value;
  let storageValues = JSON.stringify(values);
  localStorage.setItem(STORAGE_KEY, storageValues);
}

window.addEventListener('load', getStorageDataHandler);

function getStorageDataHandler() {
  let storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageData?.email) {
    refs.emailField.value = storageData.email;
  }

  if (storageData?.message) {
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
