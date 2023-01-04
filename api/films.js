import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";
const addFilm = async ({ userId, title, author, description, status }) => {
try {
await addDoc(collection(db, "films"), {
user: userId,
title: title,
author:author,
description: description,
status: status,
createdAt: new Date().getTime(),
});
} catch (err) {}
};
const toggleFilmStatus = async ({ docId, status }) => {
try {
const filmRef = doc(db, "films", docId);
await updateDoc(filmRef, {
status,
});
} catch (err) {
console.log(err);
}
};
const deleteFilm = async (docId) => {
try {
const filmRef = doc(db, "films", docId);
await deleteDoc(filmRef);
} catch (err) {
console.log(err);
}
};
export { addFilm, toggleFilmStatus, deleteFilm };