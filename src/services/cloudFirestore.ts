import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import firebase from "firebase/app";
import { auth } from "./firebase";

// get already initialized instance of firebase app
import { app } from "./firebase";

export const db = getFirestore(app);

export async function uploadEventData(data: any) {
  console.log(data);
  const authorIncluded = {
    ...data,
    eventCreationDetails: {
      createdBy: auth.currentUser?.displayName,
      creatorEmail: auth.currentUser?.email,
      uid: auth.currentUser?.uid,
      createdAt: serverTimestamp(),
    },
  };
  try {
    const docRef = await addDoc(collection(db, "eventsData"), authorIncluded);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
