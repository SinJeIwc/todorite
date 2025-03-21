# Todorite Backend

<img src="img/logo.jpg" width="300">

## Технологии
Написан на **Koa**, работает под управлением **PM2**.  

- **Backend:** Node.js, Koa, PM2
- **Сервер:** Nginx
- **SSL:** Let's Encrypt (для HTTPS)

## Функциональность

- Регистрация и аутентификация пользователей
- Проверка токена
- Поддержка REST API
- Валидация по Joi
- MVC разделение

## Структура
```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authChecker.js
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── chatRoutes.js
│   │   ├── infoRoutes.js
│   │   └── userRoutes.js
│   ├── services/
│   │   ├── authServices.js
│   │   ├── chatServices.js
│   │   ├── infoServices.js
│   │   └── userServices.js
│   ├── utils/
│   │   ├── config.js
│   │   └── knex.js
├── index.js
package.json
package-lock.json
```

## Таблицы
```
+-------------------------------+
|             Users             |
+-------------------------------+
| PK id                         |
| name                          |
| email (unique)                |
| password                      |
+---------------+---------------+
                │
                │
                │
+---------------▼--------------+
|          Tokens              |
+------------------------------+
| user_id (FK → Users.id)      |
| token                        |
+------------------------------+

+------------------------------+
|       Users_profile          |
+------------------------------+
| user_id (FK → Users.id)      |
| profile_logo                 |
+------------------------------+

+-------------------------------+
|           Chats               |
+-------------------------------+
| PK id                         |
| user1_id (FK → Users.id)      |
| user2_id (FK → Users.id)      |
+---------------+---------------+
                │
                │
                │
+---------------▼--------------+
|          Messages            |
+------------------------------+
| PK id                        |
| chat_id (FK → Chats.id)      |
| text                         |
| user_id (FK → Users.id)      |
+------------------------------+
```

## API
<a href='https://cyber-blossom-574.notion.site/Todorite-API-1b96c9c3655580ba9cc0db5ee3f119ac'>Todorite Backend API</a>
