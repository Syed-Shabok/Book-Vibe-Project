# 📚 Books Vibe - A Book Management App

<p align="left">
  <a href="https://book-vibes-project.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-success?style=for-the-badge">
  </a>
</p>

**Books Vibe** is a modern React web application designed for book enthusiasts to explore literature, track their reading progress, and curate personal collections. With a clean UI and intuitive navigation, managing your "Read List" and "Wishlist" has become much easier.

---

## 📖 Project Overview
Books Vibe serves as a personal digital library assistant. It allows users to browse a curated collection of books, view detailed information such as ratings and categories, and organize them into specific lists. The application focuses on high-quality user experience, utilizing global state management to ensure seamless updates across the platform without redundant data entries.

---

## 🛠 Main Technologies
This project leverages the latest tools in the React ecosystem for performance and scalability:
- **React 19:** Utilizing the latest features for efficient component rendering.
- **React Router v7:** Advanced routing with Data APIs for a smooth navigation experience.
- **Context API:** Global state management for handling user lists (Read/Wishlist) across the app.
- **Tailwind CSS & daisyUI:** For a modern, responsive, and customizable design system.
- **Vite:** Next-generation frontend tooling for a lightning-fast development experience.

---

## ✨ Main Features
### 📚 Book Management
- Browse a dynamic collection of books
- View detailed book information including rating, publisher, and tags
- Prevent duplicate additions in Read List and Wishlist

### ❤️ Read List & Wishlist System
- Separate management for **Read List** and **Wishlist**
- Persistent global state using Context API
- Easy switching between lists using tabs

### 🔃 Sorting System (NEW)
- Sort books by:
  - ⭐ Rating
  - 📅 Year of Publishing
  - 📄 Number of Pages
- Dynamic UI updates without page reload

### 📊 Data Visualization (NEW)
- Visual representation of book data using charts
- Displays **number of pages for books in the Read List**
- Helps users quickly understand reading volume

### 🧭 Navigation & UI
- Fully responsive navbar
- Active route highlighting using NavLink
- Mobile-friendly dropdown menu
- Modern card-based UI layout

### 🔔 User Experience
- Toast notifications for all actions (add/remove)
- Empty state UI for lists
- Smooth transitions and hover effects

---

## 📦 Project Dependencies
The application uses the following libraries to enhance functionality:

| Dependency | Purpose |
| :--- | :--- |
| `react-router-dom` | Client-side routing and navigation |
| `react-tabs` | Accessible and clean tab organization |
| `react-toastify` | Beautiful, non-blocking user notifications |
| recharts | Data visualization and charts |
| `react-icons` | Comprehensive library for UI iconography |
| `clsx` & `tailwind-merge` | Utility for dynamic CSS class management |


---

## 🚀 Local Installation Guide
Follow these steps to get the project running on your machine:

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/books-vibe-project.git](https://github.com/your-username/books-vibe-project.git)

1. **Navigate to the Project Folder:**
    
    ```jsx
    cd books-vibe-project
    ```
    
2. **Install Dependencies:**
    
    ```jsx
    npm install
    ```
    
3. **Start the Development Server:**
    
    ```jsx
    npm run dev
    ```
    
    *The app will be running at `http://localhost:5173`.*
    
