import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firebaseDB } from "../config/firebase_config";

const COLLECTION = "libros";

export const saveBook = async (libro) => {
  const col = collection(firebaseDB, COLLECTION);
  await addDoc(col, libro);
};

export const getAllBooks = async () => {
  const col = collection(firebaseDB, COLLECTION);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => doc.data());
};
