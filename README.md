# Nexora - Developer-First SaaS Landing Page

Nexora is a premium, developer-first SaaS landing page built as a modern full-stack web application. It integrates a sleek React 19 + Vite frontend using Tailwind CSS v4 with a robust Spring Boot 3.x backend form processor and a database-backed Contact Management Dashboard.

---

## 🚀 Key Features

- **Premium Green-Carbon Theme**: A sophisticated, non-AI-generic dark theme built on neutral carbon grays (`#08090A`), with emerald, mint, and teal accents.
- **Contact Form & Validation**:
  - High-fidelity **Contact Form** featuring inline regex validation (name, email, message length), loading spinner states, and a custom toast notification on success.
- **Contact Management Dashboard**:
  - A secure developer dashboard (accessed via `http://localhost:5173/#contacts` or navigation links) to view and manage inquiries.
  - Features real-time search query filtering, metrics summaries (Total Submissions, Connection Status, Submissions Today), data copy-to-clipboard options, and a CSV exporter.
  - Individual contact deleting.
  - Offline mode: Falls back seamlessly to browser `localStorage` if the database is offline.
  - **Load Testing (1,000 Users)**: A seed button that generates and loads 1,000 mock entries in under a second.
- **Standalone Admin Page**:
  - An isolated `contacts.html` page (located at `/public/contacts.html` and served at `http://localhost:5173/contacts.html`) that uses the standard native `fetch` API to query the backend database and display contacts in a styled table.
- **Spring Boot REST Engine**:
  - REST endpoints mapping database submissions.
  - Supports standard `application/json` (Axios) and `application/x-www-form-urlencoded` payloads.
  - Pre-configured CORS mapping explicitly allowing requests originating from `http://localhost:5173`.

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
- **ORM / Database**: Spring Data JPA + Hibernate + MySQL
- **Build System**: Maven
- **Server**: Embedded Tomcat (defaulting to Port 8080)

---

## 📂 Project Structure

```text
├── backend/                       # Spring Boot Application
│   ├── src/main/java/com/nexora/landing/
│   │   ├── controller/            # ContactController (GET, POST, DELETE REST endpoints)
│   │   ├── dto/                   # ContactRequest (DTO payload structure)
│   │   ├── model/                 # Contact (JPA Database Entity model)
│   │   ├── repository/            # ContactRepository (Data JPA Access Layer)
│   │   └── LandingApplication.java# App bootstrapper
│   └── pom.xml                    # Maven dependencies
├── frontend/                      # React 19 Frontend
│   ├── public/
│   │   └── contacts.html          # Standalone contacts table using native fetch
│   ├── src/
│   │   ├── components/            # UI components (Hero, Navbar, Form, ContactsDashboard, etc.)
│   │   ├── services/              # API Axios client configuration & services (api.ts)
│   │   ├── App.tsx                # Page Assembly & Hash Router
│   │   └── index.css              # Global styles & Tailwind config
│   ├── package.json               # Node packages and build scripts
│   └── vite.config.ts
└── README.md                      # Project documentation
```

---

## 💻 Local Setup & Quick Start

### 1. Prerequisites
- **Java JDK 21** or higher.
- **MySQL Server** (listening on default port `3306` with database `contactdb` created).
- **Node.js** (v18+) & **npm** (v9+).

### 2. Start the Backend Server
Navigate to the backend directory and run the Maven wrapper command to start the Spring Boot server (listening on port `8080`):
```bash
cd backend
./mvnw spring-boot:run
```

### 3. Start the Frontend Dev Server
Navigate to the frontend directory, install dependencies, and launch the Vite development server (listening on port `5173`):
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API Reference

### 1. Submit Contact Form
- **Endpoint**: `/contact` or `/submit`
- **Method**: `POST`
- **Request Body**: JSON object containing `name`, `email`, and `message`.
- **Response**: `200 OK`

### 2. Get All Contacts
- **Endpoint**: `/contacts`
- **Method**: `GET`
- **Response**: List of all submissions as JSON.

### 3. Delete Contact
- **Endpoint**: `/contacts/{id}`
- **Method**: `DELETE`
- **Response**: `200 OK` (success) or `404 Not Found`.

### 4. Seed 1,000 Mock Contacts (Load Testing)
- **Endpoint**: `/contacts/seed`
- **Method**: `POST`
- **Response**: `200 OK`

### 5. Clear All Contacts
- **Endpoint**: `/contacts/clear`
- **Method**: `DELETE`
- **Response**: `200 OK`
