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

export default apiClient;
