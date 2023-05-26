import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "moho-auth.firebaseapp.com",
  databaseURL:
    "https://moho-auth-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moho-auth",
  storageBucket: "moho-auth.appspot.com",
  messagingSenderId: "1034566431316",
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: "G-DMC57PQQ3S",
};

// Initialize Firebase, creating instances accessible to login functions in this file
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// export async function signInUser(
//   email: string,
//   password: string
// ): Promise<{ user: any }> {
//   const user = await signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//       return user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

//   return { user };
// }

export async function signInWithGoogle() {
  // signInWithRedirect(auth, provider);
  const userCred = await signInWithPopup(auth, provider);
  return userCred;
}
