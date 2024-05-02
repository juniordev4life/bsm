import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { Database } from 'firebase/database';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

export let db: Database;
export let app: FirebaseApp;
export let auth: Auth;

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  useEmulator: import.meta.env.VITE_FIREBASE_USE_EMULATOR === 'true',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_URL
};

export const initializeFirebase = () => {
 if (!browser) {
  throw new Error("Can't use the Firebase client on the server.");
 }
  if (!app) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getDatabase(app);

  if (firebaseConfig.useEmulator) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    connectDatabaseEmulator(db, '127.0.0.1', 9000);
  }
 }
};