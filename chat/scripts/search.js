import {renderSearchedContacts} from './contact.js';

const inputElement = document.querySelector('.js-input');

inputElement.addEventListener('keydown', (event) => {
    let name = inputElement.value;
    renderSearchedContacts(name)
});