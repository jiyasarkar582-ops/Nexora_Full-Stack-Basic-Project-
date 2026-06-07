package com.nexora.landing.controller;

import tools.jackson.databind.ObjectMapper;
import com.nexora.landing.model.Contact;
import com.nexora.landing.repository.ContactRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ContactRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setup() {
        repository.deleteAll();
    }

    @Test
    public void testSubmitContactAndGetAll() throws Exception {
        Contact contact = new Contact("Jane Doe", "jane@example.com", "Hello from the tests!");

        // Submit form via POST /submit
        mockMvc.perform(post("/submit")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(contact)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.name", is("Jane Doe")))
                .andExpect(jsonPath("$.email", is("jane@example.com")))
                .andExpect(jsonPath("$.message", is("Hello from the tests!")));

        // Retrieve forms via GET /contacts
        mockMvc.perform(get("/contacts"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].name", is("Jane Doe")))
                .andExpect(jsonPath("$[0].email", is("jane@example.com")));
    }

    @Test
    public void testLegacyContactEndpoint() throws Exception {
        Contact contact = new Contact("Old Name", "old@example.com", "Testing backwards compatibility");

        // Submit via legacy POST /contact (JSON)
        mockMvc.perform(post("/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(contact)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is("Form submitted successfully!")));

        // Submit via legacy POST /contact (Form Url Encoded)
        mockMvc.perform(post("/contact")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("name", "Form Encoded Name")
                .param("email", "encoded@example.com")
                .param("message", "Testing encoded parameter submissions"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is("Form submitted successfully!")));

        // Retrieve and check all saved contacts
        mockMvc.perform(get("/contacts"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is("Old Name")))
                .andExpect(jsonPath("$[1].name", is("Form Encoded Name")));
    }
}
