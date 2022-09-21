import { addDoc, collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../config/firebase_config";

const COLLECTION = "articulos";

export const saveArticle = async (articulos) => {
  const col = collection(firebaseDB, COLLECTION);
  await addDoc(col, articulos);
};

export const getAllArticles = async () => {
  const col = collection(firebaseDB, COLLECTION);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => doc.data());
};
