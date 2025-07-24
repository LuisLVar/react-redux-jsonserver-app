# React + Redux Learning Project

This is a full-featured educational React application built with **Create React App**, featuring **React Router**, **Redux**, **Redux Thunk**, **form validation**, **animations**, and integration with a mock REST API via **json-server**.

> 📆 Developed as part of a step-by-step learning experience in modern React (Jan–Feb 2021).

---

## 🚀 Features

- **React Router** – Single Page Application navigation
- **Redux & Redux Thunk** – Global state management and async actions
- **Controlled / Uncontrolled Forms** – With validation and error handling
- **Reactstrap + Bootstrap** – Responsive UI components
- **Animations** – Using `react-transition-group`
- **json-server** – Simulated REST API backend
- **Error handling** – For failed network requests
- **Presentational vs Container components** – Pattern separation

---

## 📁 Project Structure

```

React/
├── public/             # Static HTML and assets
├── src/
│   ├── components/     # React components (containers + UI)
│   ├── redux/          # Actions, reducers, and store config
│   ├── shared/         # Static data or utilities
│   └── App.js          # Main component with routes
├── json-server/        # Mock API with db.json
├── package.json        # Dependencies and scripts
└── README.md

````

---

## 🧪 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
````

### 2. Start the app

```bash
npm start
# Runs on http://localhost:3000
```

### 3. Start the mock API (optional)

```bash
npx json-server --watch json-server/db.json --port 3001
```

---

## 📚 Learning Objectives Covered

| Topic                                 | Implemented? |
| ------------------------------------- | ------------ |
| Functional & class components         | ✅            |
| Props & state                         | ✅            |
| React Router (SPA)                    | ✅            |
| Redux architecture                    | ✅            |
| Redux Thunk (async)                   | ✅            |
| Form validation                       | ✅            |
| Controlled vs uncontrolled forms      | ✅            |
| fetch API with error handling         | ✅            |
| Animations (`react-transition-group`) | ✅            |
| Bootstrap + FontAwesome UI            | ✅            |

---

## 🧩 Example Screens

* **Navigation** bar with routing
* **Form submission** with error feedback
* **Animated components** on mount/unmount
* **Comments** fetched and posted via JSON API

---

## 📝 License

Open-source and educational.
Feel free to modify and extend for your own learning.

