/**
 * EXAMPLE: How the Contact Form Works with Firebase
 * 
 * This file shows a simple example of how data flows from the form to Firestore.
 * You don't need to use this file - it's just for learning!
 */

// ==========================================
// EXAMPLE 1: What happens when user fills the form
// ==========================================

// User types in the form:
const userInput = {
  name: "Full Name",
  email: "email@example.com", 
  subject: "Lets Connect",
  message: "We are interested in your services."
};

// This data is stored in React state (formData)


// ==========================================
// EXAMPLE 2: What happens when user clicks "Send Message"
// ==========================================

// 1. The form prevents default submission
// 2. The handleSubmit function is called
// 3. It calls saveContactForm(formData)

// 4. saveContactForm sends data to Firestore like this:
const dataToFirestore = {
  name: "Full Name",
  email: "email@example.com", 
  subject: "Lets Connect", 
  message: "I need help building a website",
  createdAt: "2026-01-27T10:30:00Z" // Automatically added by Firebase
};

// 5. Firebase saves it and returns success or error


// ==========================================
// EXAMPLE 3: What the data looks like in Firestore
// ==========================================

// In your Firebase console, you'll see:
/*
Collection: contacts
  ├── Document ID: abc123xyz (auto-generated)
  │   ├── name: "John Doe"
  │   ├── email: "john@example.com"
  │   ├── subject: "Website Project"
  │   ├── message: "I need help building a website"
  │   └── createdAt: January 27, 2026 at 10:30:00 AM
  │
  ├── Document ID: def456uvw (auto-generated)
  │   ├── name: "Jane Smith"
  │   ├── email: "jane@example.com"
  │   └── ...
*/


// ==========================================
// EXAMPLE 4: Simple Step-by-Step Flow
// ==========================================

/*
STEP 1: User types in form
  ↓
STEP 2: User clicks "Send Message"
  ↓
STEP 3: Contact.tsx calls saveContactForm()
  ↓
STEP 4: contactService.ts sends data to Firebase
  ↓
STEP 5: Firebase saves to 'contacts' collection
  ↓
STEP 6: Success message shown to user
  ↓
STEP 7: Form is cleared and ready for next submission
*/


// ==========================================
// EXAMPLE 5: Testing the saveContactForm function
// ==========================================

// If you want to test manually, you can do this in browser console:

import { saveContactForm } from './lib/contactService';

// Test data
const testFormData = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Subject",
  message: "This is a test message"
};

// Call the function
saveContactForm(testFormData)
  .then(result => {
    console.log(result); // { success: true, message: "..." }
  })
  .catch(error => {
    console.error(error);
  });


// ==========================================
// That's it! Super simple! 🎉
// ==========================================
