import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
    } from "@chakra-ui/react";
    import React, { useEffect } from "react";
    import useAuth from "../hooks/useAuth";
    import { collection, onSnapshot, query, where } from "firebase/firestore";
    import { db } from "../firebase";
    import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
    import { Stack } from "@chakra-ui/react";
    import { deleteFilm, toggleFilmStatus } from "../api/films";
    const RandFilm = () => {
    const [films, setFilms] = React.useState([]);
    const {  user } = useAuth();
    const toast = useToast();
    function random_item(films)
{
  
return films[Math.floor(Math.random()*films.length)];
     
}
    const refreshData = () => {
    if (!user) {
    setFilms([]);
    return;
    }
    const q = query(collection(db, "films"), where("user", "==", user.uid));
    onSnapshot(q, (querySnapchot) => {
    let ar = [];
    querySnapchot.docs.forEach((doc) => {
    ar.push({ id: doc.id, ...doc.data() });
    });
    setFilms(ar);
    });
    };
    useEffect(() => {
    refreshData();
    }, [user]);
    const handleFilmDelete = async (id) => {
    if (confirm("Are you sure you wanna delete this film?")) {
    deleteFilm(id);
    toast({ title: "Film deleted successfully", status: "success" });
    }
    };
    const handleToggle = async (id, status) => {
    const newStatus = status == "Глянули" ? "Не смотрели" : "Глянули";
    await toggleFilmStatus({ docId: id, status: newStatus });
    toast({
    title: `Film marked ${newStatus}`,
    status: newStatus == "Глянули" ? "success" : "warning",
    });
    };
    const item = random_item(films)
    return (
        <Stack direction='row'>
        <Badge>Default</Badge>
        <Badge colorScheme='green'>{random_item(films).title}</Badge>
        <Badge colorScheme='red'>Removed</Badge>
        <Badge colorScheme='purple'>New</Badge>
      </Stack>
    );
    };
    export default RandFilm;
