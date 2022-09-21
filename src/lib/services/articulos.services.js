import { addDoc, collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../config/firebase_config";

const COLLECTION = "articulos";

export const saveArticle = async (articulos) => {
  console.log(articulos);
  try {
    const col = collection(firebaseDB, COLLECTION);
    const response = await addDoc(col, articulos);
    console.log(response, "respuesta");
  } catch (e) {
    console.log(e);
  }
};

export const getAllArticles = async () => {
  const col = collection(firebaseDB, COLLECTION);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => doc.data());
};
