import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";
const addBudjet = async ({ userId, title, spent, who }) => {
try {
await addDoc(collection(db, "budjets"), {
user: userId,
title: title,
spent: spent,
who: who,
createdAt: new Date().getTime(),
});
} catch (err) {}
};
const deleteBudjet = async (docId) => {
try {
const budjetRef = doc(db, "budjets", docId);
await deleteDoc(budjetRef);
} catch (err) {
console.log(err);
}
};
export { addBudjet, deleteBudjet };