import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";
const addSalary = async ({ userId, title, spent, who }) => {
try {
await addDoc(collection(db, "salarys"), {
user: userId,
title: title,
salary: salary,
who: who,
createdAt: new Date().getTime(),
});
} catch (err) {}
};
const deleteSalary = async (docId) => {
try {
const salaryRef = doc(db, "salarys", docId);
await deleteDoc(salaryRef);
} catch (err) {
console.log(err);
}
};
export { addSalary, deleteSalary };