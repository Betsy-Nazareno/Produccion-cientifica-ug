import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseDB } from "../config/firebase_config";
import { COLLECTIONS } from "../constants";

export const loginUser = async (email, password) => {
  const queryData = query(
    collection(firebaseDB, COLLECTIONS.USUARIOS),
    where("email", "==", email),
    where("password", "==", password)
  );
  const response = await getDocs(queryData);
  if (response.empty) {
    return;
  }
  const [doc] = response.docs || [];
  return doc.data();
};
