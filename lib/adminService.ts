// Admin Service
// Reusable Firestore functions for the admin dashboard

import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  query,
  orderBy,
  Unsubscribe,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ContactEntry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Timestamp | null;
  source?: string;
}

export interface ChatEntry {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: Timestamp | null;
}

// ─── Role Verification ────────────────────────────────────────────────────────

/**
 * Checks whether a given UID has role === "admin" in Firestore users/{uid}.
 */
export async function verifyAdminRole(uid: string): Promise<boolean> {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (!userDoc.exists()) {
      console.log(`verifyAdminRole: Document users/${uid} does not exist.`);
      return false;
    }
    const role = userDoc.data()?.role;
    console.log(`verifyAdminRole: Found role = ${role} for uid = ${uid}`);
    return role === 'admin';
  } catch (error) {
    console.error(`verifyAdminRole error for uid ${uid}:`, error);
    return false;
  }
}

// ─── Real-time Listeners ──────────────────────────────────────────────────────

/**
 * Subscribes to the "contacts" collection in real-time (newest first).
 * Returns an unsubscribe function to clean up the listener.
 */
export function subscribeToContacts(
  onData: (entries: ContactEntry[]) => void,
  onError: (err: Error) => void
): Unsubscribe {
  const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snap) => {
      const entries: ContactEntry[] = snap.docs.map((d) => ({
        id: d.id,
        name: d.data().name ?? '',
        email: d.data().email ?? '',
        subject: d.data().subject ?? '',
        message: d.data().message ?? '',
        createdAt: d.data().createdAt ?? null,
        source: d.data().source,
      }));
      onData(entries);
    },
    onError
  );
}

/**
 * Subscribes to the "chatMessages" collection in real-time (newest first).
 * Returns an unsubscribe function to clean up the listener.
 */
export function subscribeToChatMessages(
  onData: (entries: ChatEntry[]) => void,
  onError: (err: Error) => void
): Unsubscribe {
  const q = query(collection(db, 'chatMessages'), orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snap) => {
      const entries: ChatEntry[] = snap.docs.map((d) => ({
        id: d.id,
        name: d.data().name ?? '',
        email: d.data().email ?? '',
        subject: d.data().subject,
        message: d.data().message ?? '',
        createdAt: d.data().createdAt ?? null,
      }));
      onData(entries);
    },
    onError
  );
}

// ─── Delete ───────────────────────────────────────────────────────────────────

/**
 * Deletes a document from the given collection by ID.
 */
export async function deleteEntry(
  collectionName: string,
  id: string
): Promise<void> {
  await deleteDoc(doc(db, collectionName, id));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Formats a Firestore Timestamp into a human-readable string.
 */
export function formatTimestamp(ts: Timestamp | null): string {
  if (!ts) return '—';
  try {
    return ts.toDate().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '—';
  }
}
