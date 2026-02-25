

# 🔗 Link Management App (MERN + Docker)

A full-stack **Link Management Application** built using the **MERN stack**, designed to allow users to register, manage profiles, and organize links efficiently.
The project is fully **Dockerized** to demonstrate containerization, service isolation, and environment-based deployment.

---

## 🚀 Tech Stack

### Frontend

* React (Vite)
* HTML, CSS, JavaScript
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

### DevOps / Tools

* Docker
* Docker Compose
* NGINX (for frontend production build)

---

## 📂 Project Structure

```
link-management-app/
│
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── src/
│
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── src/
│   ├── .env
│
├── docker-compose.yml
├── .env
└── README.md
```

---

# 🧪 Running the Project WITHOUT Docker (Local Development)

### ✅ Prerequisites

* Node.js (v18+)
* MongoDB (Local or Atlas)
* npm

---

### 🔹 Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:3000
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

### 🔹 Environment Variables (Backend)

Create `backend/.env`:

```env
PORT=3000
MONGODB_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret>
```

---

# 🐳 Running the Project WITH Docker (Recommended)

This setup runs:

* Frontend (NGINX container)
* Backend (Node.js container)
* MongoDB (Container + Volume)

All services start with **one command**.

---

## ✅ Prerequisites

* Docker
* Docker Compose

---

## 🔹 Root Environment File (Docker)

Create `.env` in project root:

```env
PORT=3000
MONGO_URI=mongodb://mongo:27017/linkapp
SECRET_KEY=your_secret_key
NODE_ENV=production
```

---

## 🔹 Start Application (Docker)

From project root:

```bash
docker compose up --build
```

---

## 🌐 Access the App

| Service  | URL                                            |
| -------- | ---------------------------------------------- |
| Frontend | [http://localhost:5173](http://localhost:5173) |
| Backend  | [http://localhost:3000](http://localhost:3000) |
| MongoDB  | Internal (Docker network)                      |

---

## 🧠 Docker Architecture

```
Browser
   |
Frontend (NGINX Container)
   |
Backend (Node.js Container)
   |
MongoDB (Docker Container + Volume)
```

* Containers communicate using **Docker service names**
* MongoDB data persists using Docker volumes
* Frontend uses a **production-ready multi-stage build**

---

## 🔐 Security & Best Practices

* `.dockerignore` used to reduce image size
* Secrets injected via environment variables
* No secrets committed to repository
* MongoDB uses Docker volume for persistence

---

## 📌 Key Learnings

* Dockerizing a MERN application
* Multi-stage Docker builds
* Container-to-container communication
* Environment-based configuration
* Debugging Docker + NGINX routing issues

---

## 📈 Future Improvements

* NGINX reverse proxy for API routing
* CI/CD pipeline (GitHub Actions)
* Production deployment (AWS / EC2 / ECS)
* Monitoring & logging

---

## 🧾 Resume Highlight

> Dockerized a MERN-based Link Management Application using Docker Compose, enabling isolated services, persistent MongoDB storage, and production-ready container builds.

---

## 👤 Author

**Sujeet Kumar**

* GitHub: [https://github.com/Suzit05](https://github.com/Suzit05)
* LinkedIn: [www.linkedin.com/in/sujeet05kp](http://www.linkedin.com/in/sujeet05kp)

---