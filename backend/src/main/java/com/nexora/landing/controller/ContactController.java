package com.nexora.landing.controller;

import com.nexora.landing.model.Contact;
import com.nexora.landing.repository.ContactRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://nexora-full-stack-basic-project-5ko.vercel.app"})
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    @Autowired
    private ContactRepository repo;

    @PostMapping("/submit")
    public Contact saveContact(@RequestBody Contact contact) {
        logSubmission("JSON (submit)", contact);
        return repo.save(contact);
    }

    @GetMapping("/contacts")
    public List<Contact> getAllContacts() {
        return repo.findAll();
    }

    /**
     * Backwards-compatible endpoint for JSON payloads pointing to /contact
     */
    @PostMapping(value = "/contact", consumes = "application/json")
    public ResponseEntity<String> submitContactJson(@RequestBody Contact contact) {
        logSubmission("JSON (contact)", contact);
        repo.save(contact);
        return ResponseEntity.ok("Form submitted successfully!");
    }

    /**
     * Backwards-compatible endpoint for Form URL-encoded payloads pointing to /contact
     */
    @PostMapping(value = "/contact", consumes = "application/x-www-form-urlencoded")
    public ResponseEntity<String> submitContactFormEncoded(@ModelAttribute Contact contact) {
        logSubmission("Form URL-encoded (contact)", contact);
        repo.save(contact);
        return ResponseEntity.ok("Form submitted successfully!");
    }

    /**
     * Backwards-compatible fallback endpoint for /contact
     */
    @PostMapping("/contact")
    public ResponseEntity<String> submitContactFallback(Contact contact) {
        logSubmission("Fallback (contact)", contact);
        repo.save(contact);
        return ResponseEntity.ok("Form submitted successfully!");
    }

    private void logSubmission(String type, Contact contact) {
        logger.info("========================================");
        logger.info("New Contact Submission Received ({})", type);
        logger.info("Name:    {}", contact.getName());
        logger.info("Email:   {}", contact.getEmail());
        logger.info("Message: {}", contact.getMessage());
        logger.info("========================================");
        
        System.out.println("Console Out -> Submitted Name: " + contact.getName());
        System.out.println("Console Out -> Submitted Email: " + contact.getEmail());
        System.out.println("Console Out -> Submitted Message: " + contact.getMessage());
    }
}
