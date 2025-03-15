import {generateContacts} from '../views/contactView.js';

const contacts = document.querySelector('.js-scroll');

export async function renderContacts() {
  const contactHTML = await generateContacts();
  contacts.innerHTML = contactHTML;
};
