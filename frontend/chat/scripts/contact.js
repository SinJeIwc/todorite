import {users} from '../data/users.js';
import {chats} from '../data/chats.js';

const contacts = document.querySelector('.js-scroll');

// Render All Contacts
export function renderContacts() {
    let contactHTML = ''

    users.forEach((user) => {
        const userId = user.userId

        let matchedChat;
        chats.forEach((chat) => {
            if (userId === chat.userId) {
                matchedChat = chat;  
            }
        })
        
        contactHTML += `
            <button>
                <div class="contact">
                    <div class="contact_image">
                        <img src="${user.image}" alt="">
                    </div>
                    <div class="text-in-contact">
                        <p class="contact_name">${user.nickname}</p>
                        <p class="about_contact">${matchedChat.lastMessage}</p>
                    </div>
                </div>
            </button>
        `

    contacts.innerHTML = contactHTML
    });
};

// Render Searched Contacts
export function renderSearchedContacts(name) {
    let contactHTML = ''

    users.forEach((user) => {
        if (user.nickname.includes(name)) {
            const userId = user.userId

            let matchedChat;
            chats.forEach((chat) => {
                if (userId === chat.userId) {
                    matchedChat = chat;  
                }
            })
            
            contactHTML += `
                <button>
                    <div class="contact">
                        <div class="contact_image">
                            <img src="${user.image}" alt="">
                        </div>
                        <div class="text-in-contact">
                            <p class="contact_name">${user.nickname}</p>
                            <p class="about_contact">${matchedChat.lastMessage}</p>
                        </div>
                    </div>
                </button>
            `
    };
    contacts.innerHTML = contactHTML
    });
};