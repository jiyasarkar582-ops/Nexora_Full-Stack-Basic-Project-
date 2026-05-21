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
  const response = await apiClient.post<string>("/contact", data);
  return response.data;
};

export default apiClient;
