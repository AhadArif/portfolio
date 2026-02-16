// Chat Service
// This file handles saving chat messages to Firestore

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

// Interface defining the structure of chat message data
export interface ChatMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Saves chat message to Firestore
 * @param messageData - The chat message data (name, email, message)
 * @returns Promise with success/error message
 */
export async function saveChatMessage(messageData: ChatMessage) {
  try {
    // Reference to the 'contacts' collection in Firestore (reusing existing collection)
    const chatCollection = collection(db, 'contacts');
    
    // Add a new document to the collection
    const docRef = await addDoc(chatCollection, {
      name: messageData.name,
      email: messageData.email,
      subject: messageData.subject,
      message: messageData.message,
      createdAt: serverTimestamp(), // Automatically adds the current timestamp
    });

    console.log('Chat message saved successfully! Document ID:', docRef.id);
    return { success: true, message: 'Message sent successfully!' };
    
  } catch (error) {
    console.error('Error saving chat message:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    };
  }
}
