
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', throttle(function() {
  saveFormState();
}, 500));

window.addEventListener('load', function() {
  loadFormState();
});

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  clearFormState();
  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
});

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormState() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData !== null) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
}

function clearFormState() {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
}
