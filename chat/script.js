let right_container = JSON.parse(localStorage.getItem("right_container")) || [];
const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");
const addButton = document.querySelector(".send_btn");
const ellipsisIcon = document.getElementById("ellipsisIcon");
const deleteAllButton = document.getElementById("deleteAllButton"); // Select the "Delete All" button

// Load messages when the page loads
document.addEventListener("DOMContentLoaded", function () {
    addButton.addEventListener("click", addMessage);
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addMessage();
        }
    });
    deleteAllButton.addEventListener("click", deleteAllMessages); // Add event listener for "Delete All"
    displayMessages();
});

// Toggle visibility of the "Delete All" button
ellipsisIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up
    deleteAllButton.classList.toggle("active");
});

// Function to add a new message
function addMessage() {
    const newMessage = messageInput.value.trim();
    if (newMessage !== "") {
        right_container.push({
            text: newMessage,
        });
        saveToLocalStorage();
        messageInput.value = "";
        displayMessages();
    }
}

// Function to display messages
function displayMessages() {
    messageList.innerHTML = ""; // Clear existing dynamic messages
    right_container.forEach((item) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = "my-message_container";
        messageDiv.innerHTML = `
            <p>${item.text}</p>
            <img src="/images/we.jpg" alt="">
        `;
        messageList.appendChild(messageDiv);
    });
}

// Hide the "Delete All" button when clicking outside
document.addEventListener("click", function () {
    deleteAllButton.classList.remove("active");
});

// Handle the "Delete All" functionality
deleteAllButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up
    const confirmDelete = confirm("Are you sure you want to delete all messages?");
    if (confirmDelete) {
        right_container = []; // Clear the array
        saveToLocalStorage(); // Update localStorage
        displayMessages(); // Refresh the displayed messages
    }
    deleteAllButton.classList.remove("active"); // Hide the button after deletion
});

// Function to save messages to localStorage
function saveToLocalStorage() {
    localStorage.setItem("right_container", JSON.stringify(right_container));
}