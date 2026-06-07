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
  const response = await apiClient.post<any>("/submit", data);
  if (response.data && response.data.name) {
    return `Thank you ${response.data.name}, your inquiry has been saved!`;
  }
  return "Form submitted successfully!";
};

export default apiClient;
