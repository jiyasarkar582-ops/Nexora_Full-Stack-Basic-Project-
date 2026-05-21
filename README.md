# Nexora - Developer-First SaaS Landing Page

Nexora is a premium, developer-first SaaS landing page built as a modern full-stack web application. It integrates a sleek React 19 + Vite frontend using Tailwind CSS v4 with a robust Spring Boot 3.x backend form processor.

---

## 🚀 Key Features

- **Premium Green-Carbon Theme**: A sophisticated, non-AI-generic dark theme built on neutral carbon grays (`#08090A`), with emerald, mint, and teal accents.
- **Interactive UI Components**:
  - Responsive **Hero Section** with code tab switchers and a custom SVG analytics chart.
  - Monochrome **Logo Cloud** for trusted tools.
  - Bento Grid **Features Section** styled with glassmorphism overlays and interactive hover lifts.
  - Accrued **Testimonials** showcasing developer feedback.
  - Fully interactive accordion-style **FAQs**.
  - High-fidelity **Contact Form** featuring inline regex validation (name, email, message length), loading spinner states, and a custom toast notification on success.
- **Spring Boot Form Processing**:
  - A Java REST Controller mapping submissions under `http://localhost:8080/contact`.
  - Supports standard `application/json` (Axios) and `application/x-www-form-urlencoded` payloads.
  - Pre-configured CORS mapping explicitly allowing requests originating from `http://localhost:5173`.
  - Prints parsed form contents to the system console terminal for easy logging and inspection.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Custom Radial Glow Effects
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Framework**: Spring Boot 3.x (Java 21+)
- **Build System**: Maven
- **Server**: Embedded Tomcat (defaulting to Port 8080)

---

## 📂 Project Structure

```text
├── backend/                       # Spring Boot Application
│   ├── src/main/java/com/nexora/landing/
│   │   ├── controller/            # ContactController (REST endpoint mapping)
│   │   ├── dto/                   # ContactRequest (DTO payload structure)
│   │   └── LandingApplication.java# App bootstrapper
│   └── pom.xml                    # Maven dependencies
├── frontend/                      # React 19 Frontend
│   ├── src/
│   │   ├── components/            # UI components (Hero, Navbar, Form, Features, etc.)
│   │   ├── services/              # API Axios client configuration (api.ts)
│   │   ├── App.tsx                # Page Assembly
│   │   └── index.css              # Global styles & Tailwind config
│   ├── tailwind.config.js
│   └── package.json               # Node packages and build scripts
└── README.md                      # Project documentation
```

---

## 💻 Local Setup & Quick Start

### 1. Prerequisites
- **Java JDK 21** or higher.
- **Node.js** (v18+) & **npm** (v9+).

### 2. Start the Backend Server
Navigate to the backend directory and run the Maven wrapper command to start the Spring Boot server (which listens on port `8080`):
```bash
cd backend
./mvnw spring-boot:run
```

### 3. Start the Frontend Dev Server
Navigate to the frontend directory, install dependencies, and launch the Vite development server (which listens on port `5173`):
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the page.

---

## 📡 API Reference

### Submit Contact Form

- **Endpoint**: `/contact`
- **Method**: `POST`
- **Supported Content-Types**:
  - `application/json`
  - `application/x-www-form-urlencoded`

#### Request Payload (JSON)
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "message": "We would love to integrate your form engine into our dashboard!"
}
```

#### Response (Success)
- **Status Code**: `200 OK`
- **Response Body**: `Form submitted successfully!`
