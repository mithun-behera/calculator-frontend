# 🧮 Calculator Pro V1

<div align="center">

# 🧮 Calculator Pro V1

### A Modern Full Stack Calculator Application built with Spring Boot & React.js

![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?logo=springboot&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-success)
![License](https://img.shields.io/badge/License-MIT-green)

**A responsive Full Stack Calculator Application demonstrating Spring Boot REST APIs, React.js, Axios integration, keyboard support, local storage, and input validation.**

</div>

---

# 📑 Table of Contents

- Project Overview
- Features
- Technologies Used
- Architecture
- Folder Structure
- Screenshots
- Installation
- API Documentation
- Validation Features
- Future Enhancements
- Author
- License

---

# 📖 Project Overview

Calculator Pro V1 is a **Full Stack Web Application** developed using **Spring Boot** and **React.js**.

The application performs arithmetic calculations by communicating with a Spring Boot REST API from a React frontend using Axios.

This project demonstrates:

- Full Stack Development
- REST API Development
- Frontend–Backend Integration
- React Component Architecture
- State Management
- Input Validation
- Responsive UI Design

---

# ✨ Features

## 🖥️ Backend

- REST API Development
- Spring Boot
- Layered Architecture
- DTO Pattern
- Request Validation
- Global Exception Handling
- Generic API Response
- Swagger/OpenAPI Documentation
- CORS Configuration

---

## 🎨 Frontend

- React.js
- Vite
- Bootstrap
- React Bootstrap
- Axios Integration
- Responsive Design
- Dark Mode
- Keyboard Support
- Local Storage
- Calculation History

---

## 🧮 Calculator Functions

- Addition
- Subtraction
- Multiplication
- Division
- Modulus (%)
- Decimal Numbers
- AC (Clear)
- Backspace
- Keyboard Shortcuts

---

# ✅ Input Validation

The calculator prevents invalid input such as:

- Consecutive operators (`5++6`)
- Incomplete expressions (`10+`)
- Multiple decimal points (`5..2`)
- Invalid starting operators (`+`, `×`, `÷`, `%`)
- Division by zero

---

# 🛠️ Technologies Used

## Backend

- Java 21
- Spring Boot
- Spring Validation
- Spring Web
- Maven
- Swagger/OpenAPI

## Frontend

- React.js
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Bootstrap
- React Bootstrap
- Axios

---

# 🏗️ System Architecture

```text
                 React Frontend
                       │
                  Axios HTTP
                       │
                REST API Request
                       │
                Spring Boot API
                       │
                 Service Layer
                       │
                Business Logic
                       │
               JSON Response
                       │
                 React Display
```

---

# 📂 Project Structure

```text
Calculator-Pro/
│
├── calculator-backend/
│   │
│   ├── src/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── dto/
│   │   ├── exception/
│   │   ├── response/
│   │   └── config/
│   │
│   ├── pom.xml
│   └── README.md
│
├── calculator-frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

# 📸 Screenshots

## 🏠 Home Page

> Add screenshot here

---

## 🌙 Dark Mode

> Add screenshot here

---

## 📜 Calculation History

> Add screenshot here

---

## ⌨️ Keyboard Support

> Add screenshot here

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/yourusername/calculator-pro.git
```

---

## Backend Setup

```bash
cd calculator-backend
```

Run the application

```bash
mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

## Frontend Setup

```bash
cd calculator-frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🔌 API Documentation

## POST

```
/api/calculate
```

### Request

```json
{
    "num1": 25,
    "num2": 10,
    "operator": "+"
}
```

### Response

```json
{
    "success": true,
    "message": "Calculation Successful",
    "data": {
        "result": 35
    }
}
```

---

# ⌨️ Keyboard Shortcuts

| Key | Action |
|------|--------|
| 0-9 | Numbers |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| . | Decimal |
| Enter | Calculate |
| Backspace | Delete |
| Escape | Clear |

---

# 📊 Project Progress

| Module | Status |
|---------|--------|
| Spring Boot Backend | ✅ Complete |
| React Frontend | ✅ Complete |
| REST API | ✅ Complete |
| API Integration | ✅ Complete |
| Calculator Functions | ✅ Complete |
| Keyboard Support | ✅ Complete |
| Input Validation | ✅ Complete |
| Local Storage | ✅ Complete |
| History | ✅ Complete |
| Responsive UI | ✅ Complete |
| Dark Mode | ✅ Complete |

---

# 🚀 Live Demo

### Frontend

```
Coming Soon
```

### Backend

```
Coming Soon
```

---

# 🔮 Future Enhancements

- Scientific Calculator
- Multiple Expression Support
- User Authentication
- Database Integration
- Export History as PDF
- Themes
- Animations
- PWA Support

---

# 👨‍💻 Author

## Mithun Behera

**Java Full Stack Developer**

### GitHub

```
https://github.com/your-github-username
```

### LinkedIn

```
https://linkedin.com/in/your-linkedin-id
```

### Portfolio

```
https://your-portfolio-link
```

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork the repository and create a pull request.

---

# ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects.

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

### ⭐ Thank You for Visiting ⭐

Made with ❤️ using **Spring Boot** and **React.js**

</div>