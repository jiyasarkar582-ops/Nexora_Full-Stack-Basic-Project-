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

    @DeleteMapping("/contacts/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            logger.info("Deleted contact with ID: {}", id);
            return ResponseEntity.ok().build();
        }
        logger.warn("Attempted to delete contact with ID {} but it does not exist", id);
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/contacts/seed")
    public ResponseEntity<String> seedContacts() {
        logger.info("Generating and saving 1,000 mock contact records...");
        
        // Use bulk operations or batching for speed
        java.util.List<Contact> mockContacts = new java.util.ArrayList<>();
        String[] mockNames = {"Alex Rivera", "Sophia Chen", "Marcus Vance", "Elena Rostova", "Liam O'Connor", "Aria Tanaka", "Mateo Silva", "Chloe Dupont", "Devon Cole", "Zahra Al-Farsi"};
        String[] mockDomains = {"gmail.com", "nexora.dev", "github.com", "google.com", "startup.io", "mit.edu", "stripe.com", "versatile.co"};
        String[] mockMessages = {
            "Excellent API ingestion speeds. Very impressed by the dashboard UI layout!",
            "Is there support for bulk webhook integrations in the current enterprise tier?",
            "Having issues configuring the CORS headers for local development. Any advice?",
            "We would love to schedule a custom integration call next Monday. Please reach out.",
            "Can we run this on-premise or is it strictly hosted on Nexora Cloud?",
            "Fantastic work on the dark theme aesthetics. The micro-animations look extremely premium.",
            "Is there a developer discount code available for university hackathons?",
            "Looking forward to reading more of your documentation. Submitting test inquiry."
        };

        java.util.Random random = new java.util.Random();
        for (int i = 1; i <= 1000; i++) {
            String name = mockNames[random.nextInt(mockNames.length)] + " " + i;
            String email = name.toLowerCase().replace(" ", ".") + "@" + mockDomains[random.nextInt(mockDomains.length)];
            String message = mockMessages[random.nextInt(mockMessages.length)] + " (Mock inquiry index: " + i + ")";
            mockContacts.add(new Contact(name, email, message));
        }

        repo.saveAll(mockContacts);
        logger.info("Successfully seeded 1,000 mock contact records.");
        return ResponseEntity.ok("Successfully seeded 1,000 mock contacts!");
    }

    @DeleteMapping("/contacts/clear")
    public ResponseEntity<Void> clearAllContacts() {
        logger.info("Request received to clear all contacts from database...");
        repo.deleteAll();
        logger.info("Cleared all contacts from database.");
        return ResponseEntity.ok().build();
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
