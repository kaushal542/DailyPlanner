# 📝 BlogShelf – Daily Task Planner

BlogShelf is a simple task management app built with **React + TailwindCSS** and **MockAPI** as the backend.  
It supports full **CRUD operations**:  
- ➕ Add new tasks  
- 📋 View all tasks  
- ✏️ Edit tasks  
- 🗑 Delete tasks  

---

##  Live Demo  
Check out the live app here:  
**[Daily Planner Live](https://daily-planner-8api.vercel.app/)**

---

## 🚀 Features
- Modern UI using **TailwindCSS**  
- **Axios** for API requests  
- Tasks stored on [MockAPI](https://mockapi.io/)  
- Full **Create, Read, Update, Delete** flow  
- Clean component structure:  
  - `AddBlog` → Add tasks  
  - `DisplayShelf` → Show tasks  
  - `UpdateShelf` → Update tasks  
  - `App` → Main layout  

---

## 📂 Project Structure
```
src/
├── AddBlog.jsx        # Form to add new task
├── DisplayShelf.jsx   # Shows all tasks with edit/delete
├── UpdateShelf.jsx    # Update existing task
├── App.jsx            # Main app with navigation
├── main.jsx           # Entry point with React Router setup
├── index.css          # Tailwind styles
```

---

## ⚡ Tech Stack
- **React 18**
- **Vite** (bundler)
- **TailwindCSS**
- **Axios**
- **MockAPI** (REST API for tasks)

---

## 🛠 Setup & Installation

### 1. Clone repository
```bash
git clone https://github.com/your-username/blog-shelf.git
cd blog-shelf
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
App runs on [http://localhost:5173](http://localhost:5173)

---

## 🔗 API Endpoint
All tasks are stored in MockAPI:  
```
https://6880ebc1f1dcae717b63f952.mockapi.io/DailyPlanner
```

Each task has fields:
```json
{
  "id": "1",
  "title": "My Task",
  "date": "2025-08-26",
  "description": "This is a sample task"
}
```

---

## 👨‍💻 Author
- Developed by **Kaushal Dikondwar**  
