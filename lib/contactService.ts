// Contact Form Service
// This file handles saving contact form data to Firestore

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

// Interface defining the structure of contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Saves contact form data to Firestore
 * @param formData - The contact form data (name, email, subject, message)
 * @returns Promise with success/error message
 */
export async function saveContactForm(formData: ContactFormData) {
  try {
    // Reference to the 'contacts' collection in Firestore
    const contactsCollection = collection(db, 'contacts');
    
    // Add a new document to the collection
    const docRef = await addDoc(contactsCollection, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(), // Automatically adds the current timestamp
    });

    console.log('Contact form saved successfully! Document ID:', docRef.id);
    return { success: true, message: 'Message sent successfully!' };
    
  } catch (error) {
    console.error('Error saving contact form:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    };
  }
}
