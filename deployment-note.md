# ⚠️ Production Deployment Note (Terraform + EC2)

## 🚨 Important: Frontend API URL Configuration

This project uses **Vite**, which injects environment variables at **build time**.

During local development, the frontend communicates with the backend using:

```
http://localhost:3000
```

However, when deployed to AWS EC2 using Terraform, this configuration will cause API failures due to the browser attempting to access its own localhost instead of the EC2 backend container.

This results in:

* CORS Errors
* NetworkError when attempting to fetch resource
* Status Code: (null)
* Failed Login / Register Requests

---

## ✅ Required Step After Terraform Apply

Once the EC2 instance is created and the **Public IP** is available:

---

### 🔧 Step 1 — Update GitHub Secret

Navigate to:

```
GitHub Repository → Settings → Secrets → Actions
```

Update:

```
VITE_API_URL
```

Set value to:

```
http://<EC2_PUBLIC_IP>:3000
```

Example:

```
http://51.xx.xx.xx:3000
```

---

### 🔧 Step 2 — Trigger CI/CD Pipeline

Push any minor change to trigger GitHub Actions:

```
git commit --allow-empty -m "Trigger frontend rebuild with EC2 IP"
git push
```

This will:

* Rebuild frontend Docker image
* Inject updated backend API URL
* Push new image to AWS ECR

---

### 🔧 Step 3 — SSH into EC2 Instance

```
ssh -i ~/.ssh/<your-key>.pem ubuntu@<EC2_PUBLIC_IP>
```

---

### 🔧 Step 4 — Update Frontend Container

```
docker pull <ECR_FRONTEND_IMAGE>:latest
docker stop frontend
docker rm frontend
docker run -d -p 80:80 --name frontend <ECR_FRONTEND_IMAGE>:latest
```

---

## 🚀 Application will now correctly communicate with Backend APIs.

---

## 🧠 Note

This is a temporary production workaround.

In later phases, this will be replaced by:

* Nginx Reverse Proxy
* Domain-based routing
* Internal container networking
* Load Balancer integration

So that frontend communicates using:

```
/api/*
```

instead of public IP-based URLs.

---
