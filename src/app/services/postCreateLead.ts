import axios from "axios";

interface Contact {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  finace: boolean;
  trade: boolean;
}

interface LeadData {
  uuid: string;
  accesories?: string[];
  contact: Contact;
}

export const createLead = async (data: LeadData) => {
  try {
    const response = await axios.post("createlead", data);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
