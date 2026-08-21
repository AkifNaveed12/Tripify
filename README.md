# ✈️ Tripify — Travel & Tour Website

> A modern, responsive travel and tour agency website built with React, Tailwind CSS, and modern frontend technologies.

Tripify is a responsive travel and tourism website designed to provide visitors with an engaging way to explore destinations, discover tour packages, understand the agency's services, and get in touch with the travel team.

The project focuses on clean UI design, responsive layouts, smooth animations, reusable React components, and an immersive travel-oriented visual experience.

---

## Demo Video  




https://github.com/user-attachments/assets/71608d75-069a-4587-bcb8-c76df7764857


## 🌍 Live Preview

🔗 **Live Website:** Coming Soon

---

## 📌 Project Overview

Tripify is a frontend travel agency website created to simulate a modern travel and tour company's online presence.

The website includes:

- A full-screen travel hero section
- Responsive navigation
- About section
- Travel services showcase
- Popular tour packages
- Why choose us / features section
- Video-based travel CTA section
- Newsletter subscription area
- Contact information
- Social media links
- Responsive mobile navigation
- Scroll animations
- Destination-focused imagery and videos

The goal of the project was to create a visually appealing travel website while practicing real-world React development, component organization, responsive Tailwind CSS layouts, animations, and frontend project structure.

---

## ✨ Features

### 🏠 Hero Section

A visually immersive landing section featuring:

- Full-screen destination imagery
- Travel-focused headline
- Supporting introduction
- Primary "Book Now" CTA
- Responsive typography
- Dark image overlay for better readability

---

### 🧭 Responsive Navigation

The navigation system provides:

- Desktop navigation menu
- Mobile navigation menu
- Full-screen mobile menu
- Smooth scrolling between sections
- Scroll-based header background effect
- Responsive layout
- Mobile scroll locking while the menu is open

Navigation sections include:

- Home
- About
- Services
- Packages
- Contact

---

### 🌎 About Us

The About section introduces the travel agency through:

- Destination imagery
- Company introduction
- Travel-focused content
- Best Destination highlight
- Affordable Price highlight
- Responsive two-column layout
- Scroll animations

---

### 🗺️ Travel Services

The Services section presents different travel experiences through a responsive visual grid.

It includes:

- Destination cards
- Destination names
- Countries
- Responsive asymmetric card layouts
- Image-based service cards
- Video-enabled featured destinations
- Hover and visual interactions
- Responsive grid/flex layouts

Selected featured destinations can use short looping videos while other destinations remain image-based.

---

### 🎒 Tour Packages

The Packages section displays available travel packages in a responsive card grid.

Each package includes:

- Destination/package name
- Package image
- Price per person
- Duration
- Number of travelers
- Package description
- "View Tour Detail" CTA

The layout automatically adapts between:

- Single-column mobile layout
- Three-column desktop layout

---

### ⭐ Why Travel With Us

The Features section communicates the agency's core benefits.

Current highlights include:

- Professional Tour Guide
- Certified Travel Agency
- 24/7 Premium Support

Each feature includes:

- Dedicated icon
- Title
- Supporting description
- Responsive card design
- Hover interaction

---

### 🎥 Travel CTA

A visually focused call-to-action section encourages visitors to start planning their next journey.

The section supports:

- Background travel imagery
- Optional looping travel video
- Video poster/fallback image
- Dark overlay
- Responsive typography
- Animated content

The video is configured for:

- Autoplay
- Muted playback
- Continuous looping
- Inline mobile playback

---

### 📩 Newsletter & Footer

The footer provides:

- Newsletter subscription area
- Company information
- Email contact
- Phone contact
- Quick navigation links
- Travel services
- Social media links
- Copyright information

---

## 📱 Responsive Design

Tripify is designed to work across different screen sizes.

### Desktop

- Multi-column layouts
- Expanded navigation
- Large typography
- Wide destination cards
- Three-column package grid

### Tablet

- Adaptive spacing
- Flexible card layouts
- Responsive typography
- Adjusted navigation

### Mobile

- Full-screen mobile navigation
- Single-column package layout
- Responsive service cards
- Stacked content sections
- Mobile-friendly CTA buttons
- Responsive images and videos

---

## 🎨 UI & Design

The interface follows a travel-focused visual style with:

- Clean layouts
- Large destination imagery
- Strong typography
- Orange accent colors
- Dark overlays
- Rounded cards
- Spacious sections
- Responsive spacing
- Visual hierarchy

The design prioritizes the destination imagery while keeping important information easy to scan.

---

## ⚡ Animations

Tripify uses **AOS (Animate On Scroll)** for scroll-based animations.

Animations are applied to major content elements including:

- Hero content
- About section
- Services
- Packages
- Features
- CTA
- Footer content

Animations are configured with customizable:

- Duration
- Delay
- Animation type
- Repeat behavior

---

## 🛠️ Tech Stack

### Frontend

- **React.js**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **HTML5**
- **CSS3**

### Libraries

- **React Icons** — Icons throughout the interface
- **React Scroll** — Smooth navigation between sections
- **AOS** — Scroll-based animations

### Build Tool

- **Vite**

### Development Tools

- **Git**
- **GitHub**
- **Visual Studio Code**

---
### 🧩 Component Architecture

The application is divided into independent React sections.


App
│
├── Header
│
├── Hero
│
├── About
│
├── Services
│
├── Packages
│
├── Features
│
├── CtaOne
│
└── Footer

Each major website section is implemented as its own React component.

This makes the application easier to:

Maintain
Debug
Reuse
Modify
Scale

### Data-Driven Components


Tour packages and features are managed through reusable data structures instead of hardcoding every card individually.

For example:

`export const tourpackages = [
    {
        name: "Thailand Temples & Beach Getaway",
        about: "...",
        btn: "View Tour Detail",
        price: "$299",
        days: "4D/3N",
        pax: "7",
        image: pakg1
    }
];`

### 🚀 Getting Started

Follow the steps below to run Tripify locally.

1. Clone the repository
git clone <repository-url>
2. Navigate into the project
cd Tripify-travel-and-tour-website

Then enter the React application:

cd TripifyWebsite
3. Install dependencies
npm install
4. Start the development server
npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173

Open the URL in your browser.

### 👨‍💻 Author

Akif Naveed

Software Engineering Student
Frontend & AI Engineering Enthusiast

Areas of Interest
Artificial Intelligence
AI Engineering
Software Engineering
Web Development
Machine Learning
Generative AI

## 📂 Project Structure

```text
Tripify-travel-and-tour-website/
│
├── TripifyWebsite/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.webp
│   │   │   ├── about1.webp
│   │   │   ├── about2.webp
│   │   │   ├── service1.webp
│   │   │   ├── service2.webp
│   │   │   ├── service3.webp
│   │   │   ├── service4.webp
│   │   │   ├── service5.webp
│   │   │   ├── service6.webp
│   │   │   ├── service3.mp4
│   │   │   ├── service6.mp4
│   │   │   ├── packages1.webp
│   │   │   ├── packages2.webp
│   │   │   ├── packages3.webp
│   │   │   ├── packages4.webp
│   │   │   ├── packages5.webp
│   │   │   ├── packages6.webp
│   │   │   ├── cta1.webp
│   │   │   └── cta1.mp4
│   │   │
│   │   ├── sections/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Packages.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── CtaOne.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── export.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitignore
└── README.md ```
---


The exact project structure may evolve as new features are added.
---
