import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
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

export const addUser = async (usuario) => {
  const col = collection(firebaseDB, COLLECTIONS.USUARIOS);
  await addDoc(col, usuario);
};

export const getAllusers = async () => {
  const col = collection(firebaseDB, COLLECTIONS.USUARIOS);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const updateRole = async (id, role) => {
  const docRef = doc(firebaseDB, COLLECTIONS.USUARIOS, id);
  await updateDoc(docRef, { role });
};
