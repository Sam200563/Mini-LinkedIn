
# 💼 MiniLinkedIn – A Full Stack Community Platform

A mini LinkedIn-like platform where users can register, log in, create posts, and view profiles of other users. Built using the MERN stack.

---

## 🚀 Live Demo

- **Frontend (React + Vite)**: [https://your-frontend.netlify.app](https://mini-linked-in.netlify.app/)
- **Backend (Node + Express)**: [https://your-backend.onrender.com](https://mini-linkedin-j7id.onrender.com)


---

## 🧰 Tech Stack

### 🖥 Frontend:
- React.js
- Tailwind CSS
- React Router DOM
- Axios

### 🔧 Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (Authentication)
- bcrypt (Password hashing)
- dotenv, cors

---

## 👥 Demo/Test Users

You can use the following test users to log in:

| Name        | Email              | Password  |
|-------------|--------------------|-----------|
| Manali      | manali@gmail.co    | manali123  |
| Bob Verma   | bob@example.com    | test1234  |
| Manoj       | manoj@gmail.com    | manoj123  |
| Dave Kumar  | dave@example.com   | test1234  |

---

## 🔑 Features

- ✅ User registration and login (JWT protected)
- ✅ Public feed with all users’ posts
- ✅ User profile with name, email, bio, and posts
- ✅ Create text-only posts
- ✅ Protected routes using token-based auth
- ✅ Mobile responsive layout with Tailwind CSS

---

## 📦 Project Structure

MiniLinkedIn/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── pages/      # Route pages
│   │   ├── context/    # Auth context
│   │   ├── api/        # Axios instance
│   │   └── App.jsx
│   └── tailwind.config.js
├── server/             # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
└── README.md

---

## ⚙️ Setup Instructions (Local Development)

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/your-username/minilinkedin.git
cd minilinkedin
```

---

### 🔹 2. Backend Setup

```bash
cd server
npm install
```

#### Create a `.env` file in `/server`:
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the server with:
```bash
npm run dev
```

It runs on: `http://localhost:5000`

---

### 🔹 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

It runs on: `http://localhost:5173`

---

## 📬 API Endpoints Overview

### Auth
- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Login and get token
- `GET /api/auth/profile/:id` – Get user profile by ID (protected)

### Posts
- `POST /api/posts/` – Create post (protected)
- `GET /api/posts/` – Get all posts
- `GET /api/posts/user/:id` – Get posts by user ID

---

## ✅ How to Test

1. Register a new user or use one from the demo table above.
2. Login → Token is saved → Access feed and create posts.
3. Click on your name to go to your profile (and view your posts).
4. Log out and try with another user.
5. Test API using Postman if needed:
   - Send JWT as Bearer token in the `Authorization` header.


---

## 📌 Notes

- JWT token is stored in localStorage and attached in headers using Axios interceptors.
- MongoDB Atlas used for cloud DB.
- Deployed using Netlify (Frontend) + Render (Backend).
- Server take 50-60 seconds to restart as it is on the render free plan 

---

## 🧠 Author

**Name:** Sampada Manoj Ghadigaonkar  
**Role:** Full Stack Developer  
**LinkedIn:** [https://linkedin.com/in/your-profile](https://www.linkedin.com/in/sampada-ghadigaonkar/)  
**GitHub:** [https://github.com/your-username](https://github.com/Sam200563)

---

## ✅ Status:  
**100% Complete – All required features are working. Ready for submission.**
