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
    import { deleteFilm, toggleFilmStatus } from "../api/films";
    const FilmsList = () => {
    const [films, setFilms] = React.useState([]);
    const {  user } = useAuth();
    const toast = useToast();
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
    return (
    <Box mt={5}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
    {films &&
    films.map((film) => (
    <Box
    p={3}
    boxShadow="2xl"
    shadow={"dark-lg"}
    transition="0.2s"
    _hover={{ boxShadow: "sm" }}
    >
    <Heading as="h3" fontSize={"xl"}>
    {film.title}{" "}
    <Badge
    color="red.500"
    bg="inherit"
    transition={"0.2s"}
    _hover={{
    bg: "inherit",
    transform: "scale(1.2)",
    }}
    float="right"
    size="xs"
    onClick={() => handleFilmDelete(film.id)}
    >
    <FaTrash />
    </Badge>
    <Badge
    color={film.status == "Не смотрели" ? "gray.500" : "green.500"}
    bg="inherit"
    transition={"0.2s"}
    _hover={{
    bg: "inherit",
    transform: "scale(1.2)",
    }}
    float="right"
    size="xs"
    onClick={() => handleToggle(film.id, film.status)}
    >
    {film.status == "Не смотрели" ? <FaToggleOff /> : <FaToggleOn />}
    </Badge>
    <Badge
    float="right"
    opacity="0.8"
    bg={film.status == "Не смотрели" ? "yellow.500" : "green.500"}
    >
    {film.status}
    </Badge>
    </Heading>
    <Text>{film.author}</Text>
    <Text>{film.description}</Text>
    </Box>
    ))}
    </SimpleGrid>
    </Box>
    );
    };
    export default FilmsList;