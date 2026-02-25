

# 🔗 Cloud-Native Link Management Application

### Dockerized MERN App with CI/CD & Terraform-Based AWS Deployment

---

## 📌 Project Overview

This project is a **cloud-native full-stack Link Management Application** developed using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and deployed using modern **DevOps practices**.

The application allows users to create customizable profile pages containing multiple links and provides analytics such as:

* Unique views
* Click tracking
* Device type
* Geographic location
* Referral sources

The project has been containerized and deployed on AWS using Infrastructure as Code and CI/CD pipelines.

---

## ⚙️ Tech Stack

### 🧩 Application Stack

* MongoDB
* Express.js
* React.js (Vite)
* Node.js

### 🚀 DevOps & Cloud Tools

* Docker
* Docker Compose
* GitHub Actions (CI/CD)
* AWS EC2
* AWS Elastic Container Registry (ECR)
* Terraform (Infrastructure as Code)
* Nginx

---

## 🐳 Containerization

* Frontend, Backend, and MongoDB services were containerized using Docker.
* Multi-stage Docker builds were implemented for optimized production-ready frontend images.
* Docker Compose was used to enable internal networking and persistent storage for MongoDB.

---

## 🔄 CI/CD Pipeline

A CI/CD pipeline was implemented using **GitHub Actions** that:

1. Automatically triggers on every push to the `main` branch.
2. Builds Docker images for frontend and backend services.
3. Pushes the images to **AWS ECR**.
4. Prepares container images for automated deployment.

---

## ☁️ Cloud Deployment (AWS)

* Docker images are stored in **AWS Elastic Container Registry (ECR)**.
* AWS EC2 instance is provisioned using **Terraform**.
* IAM Roles are attached to EC2 to enable secure access to ECR without storing credentials.
* Security Groups are configured to allow:

  * SSH (Port 22)
  * HTTP (Port 80)
  * Backend API (Port 3000)

The EC2 instance pulls the latest Docker images from ECR and runs:

* MongoDB Container
* Backend API Container
* Frontend Nginx Container

---

## 🧱 Infrastructure as Code (Terraform)

Terraform is used to automate:

* EC2 Instance Provisioning
* Security Group Configuration
* IAM Role Attachment for ECR Access
* Key Pair Integration
* Application Deployment via User Data Scripts

This enables repeatable and version-controlled infrastructure setup aligned with DevOps best practices.

---

## 🛠️ Local Development Setup (Without Docker)

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Run Locally Using Docker

```bash
docker-compose up --build
```

---

## 📂 Environment Variables

Backend `.env`:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
SECRET_KEY=<your-secret-key>
```

Frontend `.env` (during deployment via CI/CD):

```
VITE_BACKEND_URL=http://<EC2_PUBLIC_IP>:3000
```

---

## 🚧 Upcoming DevOps Enhancements

* Nginx Reverse Proxy
* Internal Networking
* Load Balancer
* Kubernetes Deployment (AWS EKS)
* Monitoring & Logging (Prometheus + Grafana)

---

## 📸 Deployment Architecture

```
GitHub Push
   ↓
GitHub Actions CI/CD
   ↓
Docker Image Build
   ↓
Push to AWS ECR
   ↓
Terraform Provision EC2
   ↓
EC2 Pulls Images
   ↓
Mongo + Backend + Frontend Containers
   ↓
Application Live on AWS
```

---

## 👨‍💻 Author

**Sujeet Kumar**
DevOps & MERN Stack Developer

---


