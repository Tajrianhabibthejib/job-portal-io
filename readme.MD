# Job Portal IO - Full Stack Application

Welcome to **Job Portal IO**, a full-stack application designed to connect job seekers with opportunities in the React and React Native ecosystem. This project is built with **React** and **Vite** on the frontend, and **Express.js** with **MongoDB** on the backend. Below, you'll find everything you need to get started with the project.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
4. [Project Structure](#project-structure)
   - [Frontend Structure](#frontend-structure)
   - [Backend Structure](#backend-structure)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **User Registration & Login**: Secure user authentication with JWT.
- **Job Listings**: Create, view, and filter job postings.
- **Responsive Design**: Modern and mobile-friendly UI with TailwindCSS.
- **Validation**: Server-side validation for user inputs.
- **Fast Development**: Built with Vite for fast builds and hot module replacement.

---

## Technologies Used

### Frontend:

- **React**: Component-based UI library.
- **Vite**: Fast development server and build tool.
- **TailwindCSS**: Utility-first CSS framework.
- **React Router DOM**: For navigation and routing.
- **Axios**: For API requests.

### Backend:

- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling.
- **JWT**: Secure user authentication.
- **Bcrypt**: Password hashing.
- **Express Validator**: Input validation.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (package manager)
- **MongoDB** (local or cloud instance like MongoDB Atlas)

---

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/job-portal-io.git
   cd job-portal-io
   ```

2. **Install dependencies**:

   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory:
     ```env
     MONGO_URI=mongodb://localhost:27017/job-portal
     JWT_SECRET=your_jwt_secret_key
     PORT=3000
     ```

---

### Running the Project

1. **Start the Backend**:

   ```bash
   cd backend
   npm start
   ```

   The backend will run on `http://localhost:3000`.

2. **Start the Frontend**:
   ```bash
   cd ../frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

---

## Project Structure

### Frontend Structure

```
frontend/
├── public/               # Static assets
├── src/                  # Source code
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components (e.g., HomePage, LoginPage)
│   ├── components/       # Reusable components (e.g., Navbar, Footer)
│   ├── constants/        # Static data (e.g., filters)
│   └── assets/           # Images and other assets
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies and scripts
```

### Backend Structure

```
backend/
├── config/               # Configuration files (e.g., database connection)
├── controllers/          # Business logic for routes
├── middlewares/          # Middleware functions (e.g., authentication)
├── models/               # Mongoose schemas (e.g., User, Job)
├── routes/               # API route handlers
├── .env                  # Environment variables
├── index.js              # Entry point for the server
└── package.json          # Project dependencies and scripts
```

---

## API Endpoints

### User Routes

- **POST** `/api/user/register`: Register a new user.
- **POST** `/api/user/login`: Log in a user.
- **POST** `/api/user/logout`: Log out a user.

### Job Routes

- **POST** `/api/job/create`: Create a new job (requires authentication).
- **GET** `/api/job/salary/:salary/category/:category/country/:country`: Filter jobs by salary, category, and country.

### General Routes

- **GET** `/`: Check if the user is authenticated.
- **GET** `/get-jobs`: Fetch all jobs.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.
