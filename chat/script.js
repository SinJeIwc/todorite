const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");
const addButton = document.querySelector(".send_btn");
const ellipsisIcon = document.getElementById("ellipsisIcon");
const deleteAllButton = document.getElementById("deleteAllButton");

let startMessages = {
    'Adil': [{sender: "Adil", text: "Привет"}, {sender: "me", text: "Пока"}],
    'Daniyar': [{sender: "Daniyar", text: "Я лучший"}, {sender: "me", text: "Нет"}, {sender: "me", text: "Я лучший"}],
    'Dim Agai': [{sender: "me", text: "Hello, we made site for you"}, 
        {sender: "Dim Agai", text: "Hi, good. I wanna see this site. Can you send repository! I will check it."}, 
        {sender: "me", text: "Here is a link to our repository: https://github.com/SinJeIwc/todorite/tree/main"},
        {sender: "Dim Agai", text: "Wow. What a cool project. Amazing, you guys are great! Keep up the good work! Absolute"},
        {sender: "me", text: "Thank you. We worked very hard on the project. We are glad that you liked it."}],
};

localStorage.setItem("chats", JSON.stringify(startMessages));
console.log("Данные сохранены!");

let chats = JSON.parse(localStorage.getItem("chats")) || {}; // Загружаем чаты из localStorage //


// Текущий контакт
let currentContact = null;

// Загружаем контакты
document.addEventListener("DOMContentLoaded", function () {
    const contactButtons = document.querySelectorAll(".contact");
    contactButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const contactName = this.querySelector(".contact_name").innerText;
            currentContact = contactName;
            displayMessages(contactName);
        });
    });

    addButton.addEventListener("click", addMessage);
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addMessage();
        }
    });

    deleteAllButton.addEventListener("click", deleteAllMessages);
});

// Функция для сохранения сообщений в localStorage
function saveMessage(contact, sender, text) {
    if (!chats[contact]) chats[contact] = []; // Создаём массив, если его нет
    chats[contact].push({ sender, text }); // Добавляем сообщение
    localStorage.setItem("chats", JSON.stringify(chats)); // Обновляем localStorage
}

// Функция загрузки сообщений
function loadMessages(contact) {
    return chats[contact] || [];
}

// Функция отображения сообщений
function displayMessages(contact) {
    messageList.innerHTML = ""; // Очищаем старые сообщения
    const messages = loadMessages(contact);
    messages.forEach((item) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = item.sender === "me" ? "my-message_container" : "contact-message_container";
        messageDiv.innerHTML = `
            ${item.sender !== "me" ? `<img src="/images/${contact.toLowerCase()}.jpg" alt="">` : ""}
            <p>${item.text}</p>
            ${item.sender === "me" ? `<img src="/images/we.jpg" alt="">` : ""}
        `;
        messageList.appendChild(messageDiv);
    });
}

// Функция добавления нового сообщения
function addMessage() {
    if (!currentContact) {
        alert("Select contact!");
        return;
    }

    const newMessage = messageInput.value.trim();
    if (newMessage !== "") {
        saveMessage(currentContact, "me", newMessage);
        messageInput.value = "";
        displayMessages(currentContact);
    }
    
    scrollToBottom()
}

function scrollToBottom() {
    const chatContainer = document.getElementById("messageList");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document.addEventListener("click", function () {
    deleteAllMessages.classList.remove("active");
});

function deleteAllMessages() {
    if (!currentContact) return;
    chats[currentContact] = []; 
    localStorage.setItem("chats", JSON.stringify(chats)); 
    displayMessages(currentContact);
}

document.addEventListener("DOMContentLoaded", function () {
    const contacts = document.querySelectorAll(".contacts_container button");
    const currentUserName = document.querySelector(".current_user_name p");
    const currentUserImage = document.querySelector(".current_user_logo img");

    contacts.forEach(contact => {
        contact.addEventListener("click", function () {
            // Получаем имя и фото контакта
            const contactName = this.querySelector(".contact_name").innerText;
            const contactImage = this.querySelector(".contact_image img").src;

            // Обновляем текущего пользователя
            currentUserName.innerText = contactName;
            currentUserImage.src = contactImage;
        });
    });
});

ellipsisIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up
    deleteAllButton.classList.toggle("active");
});