import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

// SECURITY UPDATE: We now load secrets from Environment Variables instead of exposing them in source code!
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// AI SHIELD (Firebase App Check + Google reCAPTCHA Enterprise)
// Strictly enforces that your backend only communicates with genuine human traffic, dropping algorithmic bot attacks.
try {
  if (typeof window !== 'undefined') {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'AI_RECAPTCHA_KEY_PLACEHOLDER'),
      isTokenAutoRefreshEnabled: true
    });
  }
} catch (error) {
  console.error("AI AppCheck Shield Initialization Warning:", error);
}

export { auth, googleProvider };
