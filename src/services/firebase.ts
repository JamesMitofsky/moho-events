import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "moho-auth.firebaseapp.com",
  databaseURL:
    "https://moho-auth-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moho-auth",
  storageBucket: "moho-auth.appspot.com",
  messagingSenderId: "1034566431316",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-DMC57PQQ3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function signInUser(
  email: string,
  password: string
): Promise<{ user: any }> {
  const user = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return { user };
}

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  getRedirectResult(auth)
    .then((result) => {
      if (!result) return;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
