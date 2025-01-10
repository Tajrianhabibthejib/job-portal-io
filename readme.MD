# Job Portal - Full Stack Application

Welcome to the Job Portal repository! This project is a full-stack application built with **React** and **Vite** for the frontend, and **Express.js** with **MongoDB** for the backend. The frontend is styled using **TailwindCSS**, and the application includes features like user registration, authentication, and job listings. Below, you'll find all the information you need to get started with the project.

---

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
  - [Frontend Structure](#frontend-structure)
  - [Backend Structure](#backend-structure)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- **User Registration**: Users can register with a unique username, email, and password.
- **Authentication**: JSON Web Tokens (JWT) are used for secure user authentication.
- **Job Listings**: Display a list of available jobs with details.
- **Responsive Design**: TailwindCSS ensures a responsive and modern UI.
- **Fast Development**: Built with Vite for lightning-fast development and hot module replacement (HMR).
- **Validation**: Express-validator is used for server-side validation of user inputs.
- **Database**: MongoDB is used for storing user data.

---

## **Technologies Used**

- **Frontend**:
  - React
  - Vite
  - TailwindCSS
  - Axios (for API calls)
  - React Router DOM (for routing)
- **Backend**:
  - Express.js
  - MongoDB (via Mongoose)
  - JSON Web Tokens (JWT) for authentication
  - Bcrypt for password hashing
  - Express-validator for input validation
- **Tools**:
  - ESLint (for linting)
  - PostCSS (for CSS processing)
  - Autoprefixer (for browser compatibility)
  - Nodemon (for backend development)

---

## **Getting Started**

### **Prerequisites**

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn (package manager)
- MongoDB (either locally or a cloud instance like MongoDB Atlas)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-portal-io.git
   ```
2. Navigate to the project directory:
   ```bash
   cd job-portal-io
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

### **Running the Project**

1. **Start the Backend Server**:

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create a `.env` file in the `backend` directory and add the following environment variables:
     ```env
     MONGODB_URI=mongodb://localhost:27017/job-portal
     JWT_SECRET=your_jwt_secret_key
     PORT=3000
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
   - The backend server will run on `http://localhost:3000`.

2. **Start the Frontend Development Server**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```
   - The frontend will be available at `http://localhost:5173`.

---

## **Project Structure**

### **Frontend Structure**

```
frontend/
├── public/               # Static assets
├── src/                  # Source code
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components
│   ├── components/       # Reusable components
│   └── ...               # Other utilities
├── .eslintrc.js          # ESLint configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies and scripts
```

### \*\*
