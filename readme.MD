# Job Portal - Frontend

Welcome to the Job Portal frontend repository! This project is built using **React** and **Vite**, with **TailwindCSS** for styling. Below, you'll find all the information you need to get started with the project.

---

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- **Fast Development**: Built with Vite for lightning-fast development and hot module replacement (HMR).
- **Responsive Design**: TailwindCSS ensures a responsive and modern UI.
- **React Ecosystem**: Utilizes React for building dynamic and reusable components.
- **ESLint Integration**: Pre-configured ESLint for code quality and consistency.

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
- **Tools**:
  - ESLint (for linting)
  - PostCSS (for CSS processing)
  - Autoprefixer (for browser compatibility)

---

## **Getting Started**

### **Prerequisites**
Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn (package manager)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-portal-io.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd job-portal-io/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### **Running the Project**
- Start the development server:
  ```bash
  npm run dev
  ```
- Build the project for production:
  ```bash
  npm run build
  ```
- Preview the production build:
  ```bash
  npm run preview
  ```

---

## **Project Structure**
```
frontend/
├── public/               # Static assets
├── src/                  # Source code
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── ...               # Other components and utilities
├── .eslintrc.js          # ESLint configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies and scripts
```

---

## **Scripts**
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to check for code issues.
- **`npm run preview`**: Previews the production build locally.

---

## **Contributing**
We welcome contributions! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the Job Portal frontend! If you have any questions or feedback, feel free to open an issue or reach out to the maintainers. Happy coding! 🚀