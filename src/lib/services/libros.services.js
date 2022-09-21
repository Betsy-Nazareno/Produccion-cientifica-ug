import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseDB } from "../config/firebase_config";

const COLLECTION = "libros";

export const saveBook = async (libro) => {
  const col = collection(firebaseDB, COLLECTION);
  await addDoc(col, libro);
};

export const getAllBooks = async () => {
  const col = collection(firebaseDB, COLLECTION);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getBookById = async (id) => {
  if (id) {
    const docRef = doc(firebaseDB, COLLECTION, id);
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.data();
  }
};
