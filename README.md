# Real Estate Website with Admin Panel

## 📌 Overview

This project is a full-stack Real Estate website built using the MERN stack. It includes a dynamic frontend and an admin panel that allows real-time editing of website content such as hero section, amenities, and FAQs.

The main goal of this project was to build a simple content management system (CMS) where the admin can update text content and see changes reflected instantly on the website.

---

## 🚀 Live Demo

* Frontend: https://real-estate-task-p1my6kpon-nitzzs-projects.vercel.app/
* Backend: https://real-estate-ywk5.onrender.com

---

## 🔑 Admin Login

Email: [admin@gmail.com](mailto:admin@gmail.com)
Password: 1234

---

## ✨ Features

* Dynamic content fetched from backend (MongoDB)
* Admin panel to update all website sections
* Real-time updates after saving changes
* Amenities & FAQ management (Add / Edit / Delete)
* Responsive UI using Tailwind CSS
* Clean and structured component-based frontend

---

## 🛠 Tech Stack

**Frontend:**

* React.js (Vite)
* Tailwind CSS
* Axios

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (Mongoose)

**Deployment:**

* Frontend: Vercel
* Backend: Render

---

## 📂 Project Structure

real_estate/
├── real-estate-frontend/
└── real-estate-backend/

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/real_estate.git
cd real_estate
```

### 2. Setup Backend

```bash
cd real-estate-backend
npm install
```

Create a `.env` file and add:

```bash
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd real-estate-frontend
npm install
```

Create `.env` file:

```bash
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

---

## 🧪 How It Works

1. User visits homepage and views content fetched from backend
2. Admin logs in using fixed credentials
3. Admin edits content (hero, about, amenities, FAQ)
4. Data is updated in MongoDB via API
5. Changes reflect instantly on the frontend

---

## 📌 Notes

* Images are static and stored in the public folder
* Only text content is dynamically managed via admin panel
* This project focuses on backend integration and content management

---

## 👨‍💻 Author

Nitesh Kadam
GitHub: https://github.com/DataByNitesh
