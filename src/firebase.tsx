import { initializeApp } from "firebase/app";
import { getFirestore, collection, deleteDoc, doc } from "firebase/firestore";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

export const auth = getAuth(app);

export const db = getFirestore();
export const users = collection(db, "users");

export const signIn = async () => {
  const provider = new GoogleAuthProvider();

  await signInWithRedirect(auth, provider);
}

export const signOut = async () => {
  await auth.signOut();

  window.location.reload();
}

export const deleteAccount = async () => {
  try {
    await deleteDoc(doc(users, auth.currentUser?.uid));
    await auth.currentUser?.delete();

    window.location.reload();
  } catch {
    alert("Please sign out, then sign in and try again.");
  }
}

// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);