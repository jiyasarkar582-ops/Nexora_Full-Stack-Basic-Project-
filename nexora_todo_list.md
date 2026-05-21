# Nexora Project Todo List

This todo list outlines the exact development steps to build **Nexora**, a developer-first SaaS landing page with a connected full-stack contact form. 

Following the provided PRD, design specifications, and modern tech stack (React 19 + Vite + Tailwind CSS on the frontend; Spring Boot 3.x + Java 21 + Maven on the backend), the project has been broken down into **atomic, sequential tasks**. Each task must be completed before moving to the next.

---

## Phase 1: Environment & Project Initialization

- [ ] **Task 1: Generate Backend Project Template**
  - **Description**: Use Spring Initializr (`https://start.spring.io`) to configure a new Maven project using Java 21, Spring Boot 3.x, and the `Spring Web` dependency.
  - **Deliverable**: A downloaded, unzipped backend project directory (or structured under `/backend` folder).

- [ ] **Task 2: Initialize Frontend Project**
  - **Description**: In the project root, initialize a new frontend workspace using Vite with React and TypeScript (or JavaScript) by running `npm create vite@latest frontend -- --template react-ts` (or `react`).
  - **Deliverable**: A `/frontend` project folder containing the standard Vite template.

- [ ] **Task 3: Configure Tailwind CSS**
  - **Description**: Install Tailwind CSS, PostCSS, and Autoprefixer in the `/frontend` directory. Run the initialization script to generate `tailwind.config.js` and `postcss.config.js`.
  - **Deliverable**: Configuration files created, and Tailwind directives added to the main CSS stylesheet.

- [ ] **Task 4: Initialize Git Repository**
  - **Description**: Initialize git in the root folder, create a combined `.gitignore` file that ignores the backend build files (`/target`, `.idea`, `.settings`) and frontend dependencies (`/node_modules`, `/dist`), and commit the skeleton.
  - **Deliverable**: Initialized Git repo with clean separation of folders.

---

## Phase 2: Backend Development

- [ ] **Task 5: Create Form Submission DTO**
  - **Description**: In the backend Java package, create a class named `ContactRequest` (or DTO) with three private fields: `name` (String), `email` (String), and `message` (String), along with their getters, setters, and constructors.
  - **Deliverable**: `ContactRequest.java` file.

- [ ] **Task 6: Create REST Controller Class**
  - **Description**: Create a `@RestController` class named `ContactController` under the controllers package.
  - **Deliverable**: `ContactController.java` stub with the class-level annotations.

- [ ] **Task 7: Create POST Endpoint for Contact Form**
  - **Description**: Implement a `@PostMapping("/contact")` method in `ContactController`. It should accept the `ContactRequest` DTO (either as `@RequestBody` for JSON format, or as form-data parameters) and return a plain-text response string: `"Form submitted successfully!"`.
  - **Deliverable**: `/contact` endpoint added and returning `200 OK` with the success text.

- [ ] **Task 8: Add Console Logging to Controller**
  - **Description**: Add code inside the POST handler using `System.out.println` (or standard SLF4J Logger) to log the values of `name`, `email`, and `message` to the server console upon submission.
  - **Deliverable**: Logs visible in the system console when endpoint is requested.

- [ ] **Task 9: Configure CORS (Cross-Origin Resource Sharing)**
  - **Description**: Annotate `ContactController` with `@CrossOrigin(origins = "http://localhost:5173")` (or the default React/Vite development origin) to prevent web browsers from blocking requests from the client.
  - **Deliverable**: CORS configuration applied to the endpoint.

- [ ] **Task 10: Verify Backend Endpoint Independently**
  - **Description**: Start the Spring Boot application (running on default port `8080`). Use `curl` or Postman to send a POST request with test data to `http://localhost:8080/contact` and verify it prints data to the backend console and returns `"Form submitted successfully!"`.
  - **Deliverable**: Verified working backend application.

---

## Phase 3: Frontend Styling & Layout Foundations

- [ ] **Task 11: Configure Tailwind Design Tokens**
  - **Description**: Edit the `tailwind.config.js` to match Nexora's visual design. Add custom background color `#0B1120`, gradient accents (Indigo `#6366F1`, Violet `#8B5CF6`, Cyan `#06B6D4`), Inter or Plus Jakarta Sans font, and custom shadows.
  - **Deliverable**: `tailwind.config.js` updated with design system tokens.

- [ ] **Task 12: Configure Global Typography & Base Styles**
  - **Description**: Open the global stylesheet (e.g. `src/index.css`) and import the Inter font from Google Fonts. Define the main background color and text styling for the site body (dark Navy `#0B1120` first, text `#F9FAFB`).
  - **Deliverable**: Main stylesheet updated with background color and typography settings.

- [ ] **Task 13: Install Icons and Animation Libraries**
  - **Description**: Install `lucide-react` for premium icon support. If using micro-animations, install `framer-motion` package inside the `/frontend` directory.
  - **Deliverable**: Packages listed in `package.json` and node modules updated.

---

## Phase 4: Frontend UI Components

- [ ] **Task 14: Build Navbar Component**
  - **Description**: Create a responsive `Navbar` component. It should have a transparent background initially, transition to a backdrop blur (`backdrop-blur-md bg-white/5`) with a thin bottom border on scroll, standard nav links (Home, About, Contact), and a CTA button on the far right.
  - **Deliverable**: `Navbar.jsx` / `Navbar.tsx` component.

- [ ] **Task 15: Build Hero Section Component**
  - **Description**: Create a `Hero` component featuring a premium developer SaaS layout: left-side bold headline, supporting text, CTA buttons, and a right-side glassmorphic dashboard preview container overlaying a radial gradient glow.
  - **Deliverable**: `Hero.jsx` / `Hero.tsx` component.

- [ ] **Task 16: Build Trusted Logos Section (Logo Cloud)**
  - **Description**: Create a section displaying a row of minimal, low-opacity company logos ("Trusted by...") that align with a premium tech startup feel.
  - **Deliverable**: `LogoCloud` component.

- [ ] **Task 17: Build Features Section (Bento Grid)**
  - **Description**: Create a `Features` section displaying key features in a bento-grid style using cards with thin borders (`border-white/10`), semi-transparent background (`bg-white/5`), and subtle hover lift animations.
  - **Deliverable**: `Features.jsx` / `Features.tsx` component.

- [ ] **Task 18: Build Testimonials and FAQ Sections**
  - **Description**: Add a clean multi-column layout for client testimonials and an accordion-style FAQ section.
  - **Deliverable**: Testimonials and FAQ elements rendering correctly.

- [ ] **Task 19: Build Footer Component**
  - **Description**: Create a simple footer with copyright information, social links, and links to terms/privacy.
  - **Deliverable**: `Footer` component rendering at the bottom of the page.

---

## Phase 5: Contact Form Development

- [ ] **Task 20: Build Contact Form Component Layout**
  - **Description**: Create a `ContactForm` component using a rounded-2xl glass card. It must contain the input fields: Name (text input), Email (email input), and Message (textarea), structured in a clean form layout with a styled Indigo/Violet submit button.
  - **Deliverable**: `ContactForm` UI component matching styling rules (focus rings, large padding, rounded-xl elements).

- [ ] **Task 21: Implement Form State Management**
  - **Description**: Set up React `useState` hooks to track values for form inputs (`name`, `email`, `message`) and validation errors.
  - **Deliverable**: React states binding correctly to form input values.

- [ ] **Task 22: Implement Client-Side Form Validation**
  - **Description**: Implement validations ensuring Name and Email are filled out, Email has a valid format, and Message has a minimum length before allowing submission. Display visual inline error indicators.
  - **Deliverable**: Validation logic blocking invalid form submissions.

- [ ] **Task 23: Add Toast Notification UI**
  - **Description**: Create a custom toast notification component (or state-controlled banner) to display the API response message `"Form submitted successfully!"` with a positive success color scheme (e.g. green borders/text).
  - **Deliverable**: Inline/pop-up success banner component.

---

## Phase 6: Frontend-Backend Integration

- [ ] **Task 24: Configure Axios Client**
  - **Description**: Install `axios` in the frontend directory. Create a service file `api.js` defining a base client pointing to `http://localhost:8080`.
  - **Deliverable**: HTTP request module configured and ready.

- [ ] **Task 25: Connect Form Submit to API Endpoint**
  - **Description**: Update the form submission handler to trigger an Axios POST request with the form values to `/contact`. Handle states for sending (`loading`), success (showing toast), and fallback errors.
  - **Deliverable**: Form submission sending data to the server dynamically without refreshing the page.

---

## Phase 7: Verification and Polish

- [ ] **Task 26: Perform End-to-End System Test**
  - **Description**: Start the backend Spring Boot server on port `8080` and the frontend Vite server on port `5173`. Submit a valid form through the browser.
  - **Deliverable**: Success toast visible on UI, form reset, and accurate data printed in the Spring Boot terminal.

- [ ] **Task 27: Mobile Responsiveness Verification**
  - **Description**: Test the landing page using browser responsive viewports (mobile, tablet, desktop) to ensure sections grid-collapse and navbar collapses properly.
  - **Deliverable**: Clean responsive presentation.

- [ ] **Task 28: Final Code Cleanup & Documentation**
  - **Description**: Clean up comments, remove temporary logs, and document backend properties/frontend environment variables.
  - **Deliverable**: Clean, production-ready codebase.
