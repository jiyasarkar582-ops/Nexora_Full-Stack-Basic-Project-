**PRODUCT REQUIREMENTS DOCUMENT**

Landing Page \+ Contact Form

*Java Full Stack Web Development Internship  –  Task 1*

| Project Name | Landing Page with Contact Form – Full Stack |
| :---- | :---- |
| **Version** | 1.0 |
| **Date** | May 2025 |
| **Organization** | Maincrafts Technology |
| **Status** | Draft – Ready for Development |
| **Author** | Intern – Java Full Stack Track |

# **1\. Project Overview**

This document defines the requirements, architecture, and deliverables for Task 1 of the Maincrafts Technology Java Full Stack Web Development Internship. The objective is to build and connect a frontend landing page with a Java Spring Boot backend, implementing a complete end-to-end contact form submission flow.

## **1.1 Purpose**

The project serves as the intern's first full-stack exercise, demonstrating how a browser-based frontend can collect user input and transmit it to a backend server for processing. No database persistence is required at this stage.

## **1.2 Goals**

* Build a modern, visually polished HTML/CSS landing page

* Implement a working contact form with Name, Email, and Message fields

* Set up a Spring Boot project from scratch using Spring Initializr

* Create a REST Controller that receives and processes form POST submissions

* Print submitted form data to the server console to verify end-to-end connectivity

* Understand and experience the full-stack request-response cycle

## **1.3 Scope**

**In Scope:**

* Static frontend: HTML \+ CSS landing page

* Contact form with client-side required-field validation

* Spring Boot backend with a single POST endpoint (/contact)

* Console logging of submitted form data

* CORS configuration to allow frontend-backend communication

**Out of Scope:**

* Database storage or persistence (planned for later tasks)

* User authentication or sessions

* Email notification on form submission

* Deployment to a cloud environment

* Automated testing suites

# **2\. Stakeholders**

| Role | Name / Party | Responsibility |
| :---- | :---- | :---- |
| Intern (Developer) | Java Full Stack Track | Design, develop, and test the full-stack application |
| Internship Supervisor | Maincrafts Technology HR / Tech Lead | Review deliverables and provide feedback |
| End User (Visitor) | Website Visitor | Interacts with the landing page and submits the form |

# **3\. Functional Requirements**

## **3.1 Frontend Requirements**

| ID | Requirement | Priority | Owner |
| :---- | :---- | :---: | :---- |
| **FR-01** | The page must include a navigation bar with the project/brand name and links (e.g., Home, About, Contact). | **Must Have** | Intern |
| **FR-02** | A hero section must be present with a headline, subheadline, and a call-to-action button. | **Must Have** | Intern |
| **FR-03** | An About or Features section must describe the project or service. | **Should Have** | Intern |
| **FR-04** | A Contact section must include a form with: Name (text, required), Email (email type, required), Message (textarea), and a Submit button. | **Must Have** | Intern |
| **FR-05** | The form must use the POST method and target the backend endpoint /contact. | **Must Have** | Intern |
| **FR-06** | A footer must be included with copyright information. | **Should Have** | Intern |
| **FR-07** | The page must be responsive and usable on desktop screen sizes. | **Must Have** | Intern |
| **FR-08** | CSS must be authored by the intern (no CSS framework required, but Bootstrap is acceptable). | **Must Have** | Intern |

## **3.2 Backend Requirements**

| ID | Requirement | Priority | Owner |
| :---- | :---- | :---: | :---- |
| **BR-01** | A Spring Boot project must be created using Spring Initializr with the Spring Web dependency. | **Must Have** | Intern |
| **BR-02** | A @RestController class named ContactController must be created. | **Must Have** | Intern |
| **BR-03** | A @PostMapping("/contact") method must accept name, email, and message as @RequestParam parameters. | **Must Have** | Intern |
| **BR-04** | The controller must print the received values to the console using System.out.println(). | **Must Have** | Intern |
| **BR-05** | The controller must return a plain-text success message: "Form submitted successfully\!" | **Must Have** | Intern |
| **BR-06** | CORS must be configured (via @CrossOrigin or global config) to allow requests from the frontend origin. | **Must Have** | Intern |
| **BR-07** | The Spring Boot application must start without errors on the default port 8080\. | **Must Have** | Intern |

# **4\. Non-Functional Requirements**

| Category | Requirement |
| :---- | :---- |
| **Code Quality** | Code must be clean, well-indented, and include comments explaining key sections. |
| **Usability** | The landing page must have a modern, professional aesthetic with readable font sizes and adequate spacing. |
| **Performance** | The Spring Boot application must respond to a form POST request within 2 seconds under normal local conditions. |
| **Maintainability** | The project structure must follow Spring Boot conventions (src/main/java, src/main/resources) to allow easy extension in future tasks. |

# **5\. System Architecture**

## **5.1 High-Level Architecture**

The system follows a classic two-tier client-server architecture:

| Frontend (Client) | Protocol | Backend (Server) |
| :---: | :---: | :---: |
| HTML \+ CSS Browser renders page | **HTTP POST** to /contact on port 8080 | Spring Boot (Java) ContactController |

## **5.2 Technology Stack**

| Frontend | HTML5, CSS3 (Vanilla or Bootstrap) |
| :---- | :---- |
| **Backend Framework** | Java Spring Boot 3.x |
| **Build Tool** | Maven or Gradle (via Spring Initializr) |
| **Java Version** | Java 17 or 21 (LTS) |
| **Backend Port** | 8080 (default Spring Boot port) |
| **Dev Environment** | IntelliJ IDEA / VS Code \+ JDK |
| **Project Generator** | https://start.spring.io |

## **5.3 Project Structure**

Spring Boot project layout (Maven convention):

**src/**  main/  java/com/example/demo/  
  ContactController.java  
  DemoApplication.java  
  resources/  application.properties  
**pom.xml**

# **6\. User Stories**

* As a website visitor, I want to read a clean landing page so that I understand what the site is about.

* As a website visitor, I want to fill in a contact form with my name, email, and a message so that I can reach out to the organization.

* As a website visitor, I want to receive a confirmation message after submitting the form so that I know my submission was received.

* As a developer, I want the Spring Boot backend to log submitted form data to the console so that I can verify the data arrived correctly.

* As a developer, I want to run the Spring Boot application locally so that I can test the full-stack flow end-to-end.

# **7\. API Specification**

## **7.1 Contact Form Endpoint**

| Method | POST |
| :---- | :---- |
| **URL** | http://localhost:8080/contact |
| **Content-Type** | application/x-www-form-urlencoded |
| **Response Type** | text/plain |
| **Success Response** | 200 OK — "Form submitted successfully\!" |

### **Request Parameters**

| Parameter | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| name | String | Yes | Full name of the person contacting |
| email | String | Yes | Email address (valid format expected) |
| message | String | Yes | The message body from the user |

# **8\. Deliverables**

## **8.1 Frontend Deliverable**

* A single index.html file with embedded or linked CSS

* Page sections: Navigation, Hero, Features/About, Contact Form, Footer

* Form correctly submits to http://localhost:8080/contact via POST

## **8.2 Backend Deliverable**

* A fully functional Spring Boot project (zip or GitHub repository)

* ContactController.java with @PostMapping("/contact") handler

* Console log output of: Name, Email, and Message on each submission

* Application runs successfully with mvn spring-boot:run or via IDE

# **9\. Acceptance Criteria**

The task is considered complete when ALL of the following are verified:

1. Opening index.html in a browser displays a complete, styled landing page with navigation, hero section, and contact form.

2. All three form fields (Name, Email, Message) are visible and accept user input.

3. Required field validation prevents submission of an empty Name or Email.

4. Submitting the form with valid data sends an HTTP POST request to localhost:8080/contact.

5. The Spring Boot application receives the request and prints the submitted Name, Email, and Message to the terminal/console.

6. The browser displays the plain-text response: "Form submitted successfully\!"

7. The Spring Boot application starts without errors using standard run commands.

# **10\. Suggested Development Timeline**

| Phase | Activity | Notes |
| :---- | :---- | :---- |
| **Phase 1** | HTML/CSS Landing Page | Build the static frontend without backend integration first |
| **Phase 2** | Add Contact Form | Add the form section; verify it renders correctly in browser |
| **Phase 3** | Spring Boot Setup | Use Spring Initializr; add Spring Web dependency; run hello-world |
| **Phase 4** | Create Controller | Write ContactController with @PostMapping; test with Postman/curl |
| **Phase 5** | Connect Frontend | Update form action URL; verify end-to-end submission and console log |
| **Phase 6** | Polish & Submit | Clean up code, add comments, review acceptance criteria, submit |

# **11\. References & Resources**

## **11.1 Official Documentation**

* Spring Boot Official Docs: https://docs.spring.io/spring-boot/docs/current/reference/html/

* Spring Initializr (project generator): https://start.spring.io

* Baeldung Spring Boot Introduction: https://www.baeldung.com/spring-boot

## **11.2 Video Tutorials**

* Spring Boot Crash Course by Amigoscode (YouTube) – Beginner-friendly

* Spring Boot Form Handling Tutorial – Handling POST requests

## **11.3 Starter Tools**

* Bootstrap Templates: https://getbootstrap.com for optional frontend styling

* Postman (API testing): https://www.postman.com – Test the /contact endpoint independently

# **12\. Revision History**

| Version | Date | Author | Changes |
| :---- | :---- | :---- | :---- |
| 1.0 | May 2025 | Intern | Initial version created for Task 1 submission |

