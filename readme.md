# 📌 Task Manager Backend

A **Node.js + Express** backend for a task tracking and team collaboration application.
Supports **user authentication, task management, team collaboration, comments, and file attachments**.

---

## ✨ Features

* 🔐 **Authentication & Authorization**

  * Register, login, logout
  * JWT-based auth with cookies
  * Secure password hashing with `bcryptjs`

* ✅ **Task Management**

  * Create, read, update, delete tasks
  * Assign tasks to team members
  * Mark tasks as complete
  * Filter/search tasks
  * Add comments & upload attachments

* 👥 **Team Collaboration**

  * Create and join teams/projects
  * Invite members by email
  * View team details

* ⚡ **Tech Stack**

  * Node.js, Express
  * MongoDB + Mongoose
  * JWT, bcryptjs

---

## 📂 Project Structure

```
task-manager-backend/
│
├── config/             # Database connection
│   └── db.js
│
├── controllers/        # Controllers (business logic)
│   ├── auth.controller.js
│   ├── task.controller.js
│   └── team.controller.js
│
├── middlewares/        # Middleware
│   └── auth.middleware.js
│
├── models/             # Mongoose models
│   ├── user.model.js
│   ├── task.model.js
│   └── team.model.js
│
├── routes/             # API routes
│   ├── auth.routes.js
│   ├── task.routes.js
│   └── team.routes.js
│
│
├── .env                # Environment variables
├── server.js           # Entry point
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/taskmaster.git
cd taskmaster
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=supersecretkey
```

### 4️⃣ Run the server

```bash
npm start
```

The server runs on: `http://localhost:5000`

---

## 🔑 API Endpoints

### 🔐 Auth

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → Login user
* `POST /api/auth/logout` → Logout user
* `GET /api/auth/profile` → Get current user profile

### ✅ Tasks

* `POST /api/tasks` → Create task
* `GET /api/tasks` → Get my tasks
* `PATCH /api/tasks/:id/status` → Update task status
* `POST /api/tasks/:id/comments` → Add comment to task

### 👥 Teams

* `POST /api/teams` → Create team
* `POST /api/teams/:id/join` → Join team
* `GET /api/teams` → Get my teams
* `GET /api/teams/:id` → Get team details
* `POST /api/teams/:id/add-member` → Add member by email

---

## 🛠️ Built With

* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---
