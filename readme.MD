# Job Portal IO

Job Portal IO is a full-stack web application designed to connect job seekers with job providers. It features a React-based frontend and an Express.js backend, with MongoDB as the database.

## Features

### Frontend

- **React**: Built with React for a dynamic and responsive user interface.
- **Routing**: Uses `react-router-dom` for navigation between pages.
- **State Management**: Utilizes React hooks for state management.
- **Styling**: Styled with Tailwind CSS for a modern and responsive design.
- **Notifications**: Integrated with `react-toastify` for user notifications.
- **Components**:
  - `Navbar`: Navigation bar for easy access to pages.
  - `Hero`: Landing page section for showcasing the platform.
  - `JobList`: Displays a list of jobs.
  - `Footer`: Footer section with additional links.
  - `Select`: Dropdown component for filtering jobs.

### Backend

- **Express.js**: Backend framework for handling API requests.
- **Authentication**: JWT-based authentication with middleware for protected routes.
- **File Uploads**: Supports file uploads using Multer.
- **Validation**: Validates user input with `express-validator`.
- **Database**: MongoDB for storing user and job data.
- **API Endpoints**:
  - `/api/user/register`: Register a new user.
  - `/api/user/login`: Login an existing user.
  - `/api/user/logout`: Logout the user.
  - `/api/job/create`: Create a new job (protected route).
  - `/api/job/salary/:salary/category/:category/country/:country`: Filter jobs.

## Project Structure

### Frontend

```bash
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── JobList.jsx
│   │   ├── Navbar.jsx
│   │   └── Select.jsx
│   ├── constants/
│   │   └── Filter.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── CreateJobPage.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── JobsPage.jsx
│   │   ├── LoginUserPage.jsx
│   │   ├── ReadMorePage.jsx
│   │   └── RegisterUserPage.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       └── react.svg
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
### Backend

```
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── jobController.js
│   └── userController.js
├── middlewares/
│   ├── isAutheticated.js
│   ├── multer.js
│   └── userMiddleware.js
├── models/
│   ├── jobModel.js
│   └── userModel.js
├── routes/
│   ├── indexRouter.js
│   ├── jobRouter.js
│   └── userRouter.js
├── .env
├── index.js
└── package.json
```



## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps
1. Clone the repository:

```bash
   git clone https://github.com/your-repo/job-portal-io.git
   cd job-portal-io
   ```
2. Install dependencies for the backend:
```bash
  cd backend
  npm install
``` 
3. Set up environment variables in backend/.env:
```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=3000
```
4. Start the backend server:
```
  npm start
```
5. Install dependencies for the frontend:
```
  cd ../frontend
  npm install
```
6. Start the frontend development server:
```
  npm run dev
```
7. Open the application in your browser at http://localhost:5173.

## 🚀 Usage

- **Register**: Create a new account.
- **Login**: Access your account.
- **Create Job**: Post a new job listing (requires authentication).
- **Browse Jobs**: View and filter job listings.
- **Read More**: View detailed information about a specific job.

---

## 🛠️ Technologies Used

### 💻 Frontend
- React
- Tailwind CSS
- React Router
- React Toastify

### 🧠 Backend
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Multer

### 🧰 Build Tools
- Vite

---

## 📄 License

This project is licensed under the **MIT License**.



