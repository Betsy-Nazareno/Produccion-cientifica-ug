import { addDoc, collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../config/firebase_config";

const COLLECTION = "capitulos";

export const saveChapter = async (capitulo) => {
  const col = collection(firebaseDB, COLLECTION);
  await addDoc(col, capitulo);
};

export const getAllChapters = async () => {
  const col = collection(firebaseDB, COLLECTION);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => doc.data());
};
