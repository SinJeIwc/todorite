# Todorite
<img src="img/chat.png" width=900>

## О проекте

**Todorite** — Web Messenger.  
Backend написан на **Koa**, работает под управлением **PM2**,  
Frontend реализован с помощью **React** и **Vite**.


## Технологии

- **Backend:** Node.js, Koa, PM2
- **Frontend:** React, Vite
- **Сервер:** Nginx
- **SSL:** Let's Encrypt (для HTTPS)

## Функциональность

- Регистрация и аутентификация пользователей
- Поддержка REST API для взаимодействия между клиентом и сервером
- Клиентская маршрутизация (страницы `/login`, `/register`, `/app` и т.д.)

## Структура проекта
```
todorite/
├── backend/
│   └── ...              (код серверной части)
├── frontend/
│   ├── public/
│   │   ├── img/
│   │   └── user_logos/
│   ├── src/
│   │   ├── LogAndReg/
│   │   │   ├── components/
│   │   │   ├── General.css
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── components/
│   │   │   ├── LeftContainer/
│   │   │   └── RightContainer/
│   │   ├── services/
│   │   │   ├── useChat.jsx
│   │   │   ├── useMessages.jsx
│   │   │   ├── useUser.jsx
│   │   │   └── useUsers.jsx
│   │   ├── utils/
│   │   │   └── getCookie.jsx
│   │   ├── Chat.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── index.html
│   ├── package.json
│   └── ...
```

