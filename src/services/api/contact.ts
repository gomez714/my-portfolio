import { collection, addDoc } from "firebase/firestore";
import { db } from "@/Firebase";
import { ContactFormData } from "@/types/contact";

export const sendContactMessage = async (formData: ContactFormData) => {
  try {
    await addDoc(collection(db, "contact-message"), formData);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return { success: false, error };
  }
}; 