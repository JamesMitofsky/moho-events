// firebase library
import { collection, getDocs, query, where } from "firebase/firestore";
// local db config
import { db } from "../services/cloudFirestore";

export default async function returnUserRole(uidInquiry: string) {
  if (!uidInquiry) return false;

  const q = query(collection(db, "userRoles"), where("uid", "==", uidInquiry));

  try {
    const querySnapshot = await getDocs(q);
    const response = querySnapshot.docs[0].data();

    return response ? response.role : false;
  } catch {
    console.warn("Not authorized to request user auth status");
  }
}
