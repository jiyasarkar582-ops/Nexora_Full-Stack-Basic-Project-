import axios from "axios";

// Create a configured Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

/**
 * Submits the contact request payload to the backend server.
 * @param data - The contact data to send (name, email, message)
 * @returns The backend text response message
 */
export const submitContactForm = async (data: ContactData): Promise<string> => {
  try {
    const response = await apiClient.post<any>("/submit", data);
    if (response.data && response.data.name) {
      return `Thank you ${response.data.name}, your inquiry has been saved!`;
    }
    return "Form submitted successfully!";
  } catch (error) {
    console.warn("Backend server connection failed. Falling back to local offline storage.", error);
    
    // Save to localStorage as a fallback so the form works in demo mode
    try {
      const existing = localStorage.getItem("local_contacts") || "[]";
      const contacts = JSON.parse(existing);
      contacts.push({
        id: Date.now(),
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("local_contacts", JSON.stringify(contacts));
    } catch (storageError) {
      console.error("Local storage fallback failed:", storageError);
    }
    
    // Return a successful confirmation for local demo mode
    return `Thank you ${data.name}, your inquiry has been received (Demo Mode)!`;
  }
};

/**
 * Fetches all contact submissions from the backend database.
 * Falls back to local storage if backend is offline.
 */
export const getContacts = async (): Promise<Contact[]> => {
  try {
    const response = await apiClient.get<Contact[]>("/contacts");
    return response.data;
  } catch (error) {
    console.warn("Backend connection failed when fetching contacts. Loading from local storage.", error);
    try {
      const existing = localStorage.getItem("local_contacts") || "[]";
      return JSON.parse(existing);
    } catch (storageError) {
      console.error("Local storage read failed:", storageError);
      return [];
    }
  }
};

/**
 * Deletes a contact submission by ID.
 * Falls back to local storage if backend is offline.
 */
export const deleteContact = async (id: number): Promise<boolean> => {
  try {
    await apiClient.delete(`/contacts/${id}`);
    return true;
  } catch (error) {
    console.warn(`Backend connection failed when deleting contact ${id}. Removing from local storage.`, error);
    try {
      const existing = localStorage.getItem("local_contacts") || "[]";
      let contacts = JSON.parse(existing);
      contacts = contacts.filter((c: any) => c.id !== id);
      localStorage.setItem("local_contacts", JSON.stringify(contacts));
      return true;
    } catch (storageError) {
      console.error("Local storage deletion failed:", storageError);
      return false;
    }
  }
};

/**
 * Seeds 1,000 mock contact submissions into the database.
 * Falls back to local storage if backend is offline.
 */
export const seedContacts = async (): Promise<boolean> => {
  try {
    await apiClient.post("/contacts/seed");
    return true;
  } catch (error) {
    console.warn("Backend connection failed when seeding contacts. Generating 1000 mock contacts locally.", error);
    try {
      const mockNames = ["Alex Rivera", "Sophia Chen", "Marcus Vance", "Elena Rostova", "Liam O'Connor", "Aria Tanaka", "Mateo Silva", "Chloe Dupont", "Devon Cole", "Zahra Al-Farsi"];
      const mockDomains = ["gmail.com", "nexora.dev", "github.com", "google.com", "startup.io", "mit.edu", "stripe.com", "versatile.co"];
      const mockMessages = [
        "Excellent API ingestion speeds. Very impressed by the dashboard UI layout!",
        "Is there support for bulk webhook integrations in the current enterprise tier?",
        "Having issues configuring the CORS headers for local development. Any advice?",
        "We would love to schedule a custom integration call next Monday. Please reach out.",
        "Can we run this on-premise or is it strictly hosted on Nexora Cloud?",
        "Fantastic work on the dark theme aesthetics. The micro-animations look extremely premium.",
        "Is there a developer discount code available for university hackathons?",
        "Looking forward to reading more of your documentation. Submitting test inquiry."
      ];

      const localContacts: Contact[] = [];
      const now = Date.now();
      for (let i = 1; i <= 1000; i++) {
        const name = mockNames[Math.floor(Math.random() * mockNames.length)] + " " + i;
        const email = name.toLowerCase().replace(" ", ".") + "@" + mockDomains[Math.floor(Math.random() * mockDomains.length)];
        const message = mockMessages[Math.floor(Math.random() * mockMessages.length)] + " (Mock inquiry index: " + i + ")";
        localContacts.push({
          id: now + i,
          name,
          email,
          message,
          timestamp: new Date(now - i * 60000).toISOString()
        });
      }
      localStorage.setItem("local_contacts", JSON.stringify(localContacts));
      return true;
    } catch (storageError) {
      console.error("Local storage seeding failed:", storageError);
      return false;
    }
  }
};

/**
 * Clears all contact submissions.
 * Falls back to local storage if backend is offline.
 */
export const clearContacts = async (): Promise<boolean> => {
  try {
    await apiClient.delete("/contacts/clear");
    return true;
  } catch (error) {
    console.warn("Backend connection failed when clearing contacts. Clearing local storage.", error);
    try {
      localStorage.removeItem("local_contacts");
      return true;
    } catch (storageError) {
      console.error("Local storage clearing failed:", storageError);
      return false;
    }
  }
};

export default apiClient;
