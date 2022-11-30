import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
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

// Initialize Firebase, creating instances accessible to login functions in this file
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

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

export function signInWithGoogle() {
  console.log("about to run auth change checker");
  signInWithRedirect(auth, provider);
}

export function verifyUser() {
  // getRedirectResult(auth)
  //   .then((result) => {
  //     if (!result) return;
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     if (!credential) return;
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
}

export function onAuthStateChange() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      console.log(user);
    } else {
      // User is signed out
      // ...
      console.log("no user found");
    }
  });
}
