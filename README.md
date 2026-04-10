# 🚀 Fullstack Auth System (React + Node.js)

A modern, production-ready authentication system featuring professional UI/UX, including toast notifications, loading states, smooth animations, and a secure backend authentication flow.

---

## ✨ Features

### 🔐 Authentication
- **User Registration:** Secure signup with backend validation.
- **User Login:** Credential verification with secure authentication flow.
- **Security:** Password hashing using `bcrypt`.
- **Protected Routes:** Access control for authenticated users.

---

### 🎨 Frontend UX
- **Toast Notifications:** Real-time success and error feedback using React Toastify.
- **Loading States:** Button spinners and disabled states during API requests.
- **Animations:** Smooth UI transitions using Framer Motion.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

---

## 🧱 Tech Stack

### Frontend
- React.js
- Axios (API calls)
- React Toastify (Notifications)
- Framer Motion (Animations)
- CSS3 (Modern styling)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Cookies & Sessions Authentication
- bcrypt (Password hashing)

---

## 📁 Project Structure

```text
project/
│
├── frontend/
│   ├── src/
│   │   ├── api/            # Axios instance & API calls
│   │   ├── components/     # Login, Register, UI components
│   │   ├── styles/         # CSS files
│   │   ├── App.js          # Routing & ToastContainer
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── routes/             # Auth routes (login/register)
│   ├── controllers/        # Business logic
│   ├── models/             # MongoDB User schema
│   ├── middleware/        # Auth middleware (JWT verification)
│   ├── server.js          # Entry point
│   └── package.json
│
└── README.md



