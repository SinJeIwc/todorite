import {getUsersAndLogo} from '../models/userModel.js';

// Render All Contacts
export async function generateContacts() {
  const data = await getUsersAndLogo();
  const { users } = data;

  let contactHTML = '';

  users.forEach(({ id, name, profile_logo }) => {
    contactHTML += `
        <button>
            <div class="contact" data-user-id="${id}">
                <div class="contact_image">
                    <img src="${profile_logo}" alt="">
                </div>
                <div class="text-in-contact">
                    <p class="contact_name">${name}</p>
                 </div>
            </div>
        </button>
  `});
  
  return contactHTML;
};

