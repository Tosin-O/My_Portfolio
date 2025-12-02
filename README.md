# **Personal Portfolio – Obisanya Oluwatosin**

A modern, high-performance **personal portfolio website** built with **React**, **Tailwind CSS**, and **Vite**.
This project features a responsive UI, smooth scroll animations, and a clean, modern aesthetic to showcase skills, experience, and projects.

---

## 🚀 **Features**

* **Responsive Design** – Fully optimized for mobile, tablet, and desktop.
* **Smooth Animations** – Sections fade in on scroll using the Intersection Observer API.
* **Typing Effect** – Dynamic hero text animation for an engaging introduction.
* **Modern UI** – Tailwind-powered gradients, glassmorphism, and custom utility classes.
* **Dark Theme** – Built around Tailwind's **slate-950** for a sleek, professional look.
* **Direct Contact** – “Mailto” button for instant email communication.
* **High-Quality Icons** – Powered by `lucide-react`.

---

## 🛠️ **Tech Stack**

| Category               | Tool         |
| ---------------------- | ------------ |
| **Frontend Framework** | React        |
| **Build Tool**         | Vite         |
| **Styling**            | Tailwind CSS |
| **Icons**              | Lucide React |

---

## 📦 **Prerequisites**

Before getting started, ensure you have the following installed:

* **Node.js** (v16+)
* **npm** (comes with Node.js)

---

## ⚡ **Installation & Setup**

```bash
# Clone the repository
git clone https://github.com/your-username/tosin-portfolio.git

# Enter the project folder
cd tosin-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Now open your browser and visit:

```
http://localhost:5173
```

---

## 🔧 **Customization**

All editable content is located inside `src/App.jsx`.

### **1. Update Personal Info**

Inside the `Hero` and `Navbar` components:

* Replace **"Obisanya Oluwatosin"** with your name.
* Update the logo’s initial `"T"` if needed.

### **2. Modify Data Sections**

Scroll to the

```jsx
/* --- DATA --- */
```

section in `App.jsx` to customize:

* **SKILLS** → Add/remove skill objects
* **EXPERIENCES** → Update job history
* **PROJECTS** → Edit titles, descriptions, and replace image URLs with your own screenshots

### **3. Update Contact Email**

In the `Contact` component, update the mailto link:

```html
href="mailto:your-email@gmail.com?subject=Project%20Inquiry..."
```

---

## 🚀 **Deployment**

### **Deploy on Vercel (Recommended)**

1. Push your project to a GitHub repository.
2. Visit **Vercel** and sign in.
3. Click **“Add New” → “Project”**.
4. Import your GitHub repo.
5. Vercel will auto-detect Vite → click **Deploy**.

---

## 📄 **License**

This project is **open-source** and available under the **MIT License**.



Just tell me!
