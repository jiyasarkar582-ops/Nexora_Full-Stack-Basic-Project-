package com.nexora.landing.controller;

import com.nexora.landing.dto.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    /**
     * Handles JSON payloads from standard React Axios calls (application/json)
     */
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> submitContactJson(@RequestBody ContactRequest request) {
        logSubmission("JSON", request);
        return ResponseEntity.ok("Form submitted successfully!");
    }

    /**
     * Handles standard form URL-encoded payloads (application/x-www-form-urlencoded)
     * mapping parameters directly to the ContactRequest object.
     */
    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<String> submitContactFormEncoded(@ModelAttribute ContactRequest request) {
        logSubmission("Form URL-encoded", request);
        return ResponseEntity.ok("Form submitted successfully!");
    }

    /**
     * Fallback endpoint if Content-Type is not specified or differs
     */
    @PostMapping
    public ResponseEntity<String> submitContactFallback(ContactRequest request) {
        logSubmission("Fallback/Param", request);
        return ResponseEntity.ok("Form submitted successfully!");
    }

    private void logSubmission(String type, ContactRequest request) {
        logger.info("========================================");
        logger.info("New Contact Submission Received ({})", type);
        logger.info("Name:    {}", request.getName());
        logger.info("Email:   {}", request.getEmail());
        logger.info("Message: {}", request.getMessage());
        logger.info("========================================");
        
        // Print to console using System.out.println as explicitly requested in PRD BR-04
        System.out.println("Console Out -> Submitted Name: " + request.getName());
        System.out.println("Console Out -> Submitted Email: " + request.getEmail());
        System.out.println("Console Out -> Submitted Message: " + request.getMessage());
    }
}
