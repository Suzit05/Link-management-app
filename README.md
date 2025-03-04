

# Link Management Platform
https://link-management-app.vercel.app

A modern and user-friendly platform for managing links, profiles, and appearances. Built with React, Node.js, and MongoDB.

## Table of Contents
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Demo Credentials](#demo-credentials)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### 1. **User Authentication**
   - Sign up, log in, and log out functionality.
   - JWT-based authentication for secure access.

### 2. **Profile Management**
   - Upload and remove profile images.
   - Customize profile title and bio.
   - Add and manage links and shop items.

### 3. **Appearance Customization**
   - Choose from multiple themes and layouts.
   - Customize button styles, colors, and fonts.
   - Preview changes in real-time.

### 4. **Link Management**
   - Add, edit, and delete links.
   - Organize links into categories (e.g., social media, shop).

### 5. **Analytics**
   - Track link clicks and engagement.
   - View detailed analytics for each link.

### 6. **Mobile Preview**
   - Real-time mobile preview of your profile and links.

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud-based)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/suzit05/link-management-app.git
cd link-management-app
```

### Step 2: Install Dependencies
#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd server
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the `server` directory and add the following:
```env
PORT= 3000
MONGODB_URI= mongodb+srv://newuser05:newuser05@cluster0.wx92t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
SECRET_KEY= cobrakai
```

### Step 4: Run the Application
#### Start the Backend
```bash
cd server
npm start
```

#### Start the Frontend
```bash
cd client
npm start
```

### Step 5: Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

---

## Demo Credentials

You can use the following credentials to test the platform:

- **Email**: `Ravi@gmail.com`
- **Password**: `22221111`

---

## Technologies Used

### Frontend
- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation and routing.
- **Axios**: For making API requests.
- **Toastify**: For displaying notifications.

### Backend
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing data.
- **JWT**: For user authentication and authorization.

### Styling
- **CSS**: Custom styles for components.
- **React Icons**: For icons used in the UI.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` to better suit your project. Let me know if you need further assistance! 🚀
