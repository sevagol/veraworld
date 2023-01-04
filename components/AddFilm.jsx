import React from "react";
import {
Box,
Input,
Button,
Textarea,
Stack,
Select,
useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addFilm } from "../api/films";
import { set } from "react-hook-form";
const AddFilm = () => {
const [title, setTitle] = React.useState("");
const [author, setAuthor] = React.useState("");
const [description, setDescription] = React.useState("");
const [status, setStatus] = React.useState("pending");
const [isLoading, setIsLoading] = React.useState(false);
const toast = useToast();
const { isLoggedIn, user } = useAuth();
const handleFilmCreate = async () => {
if (!isLoggedIn) {
toast({
title: "You must be logged in to create a todo",
status: "error",
duration: 9000,
isClosable: true,
});
return;
}
setIsLoading(true);
const films = {
title,
author,
description,
status,
userId: user.uid,
};
await addFilm(films);
setIsLoading(false);
setTitle("");
setAuthor("")
setDescription("");
setStatus("didn't watch");
toast({ title: "Film created successfully", status: "success" });
};
return (
<Box w="100%" margin={"0 auto"} display="block" mt={5}>
<Stack direction="column">
<Input
placeholder="Название фильма"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<Textarea
placeholder="Автор"
value={author}
onChange={(e) => setAuthor(e.target.value)}
/>
<Textarea
placeholder="О чем?"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
<Select value={status} onChange={(e) => setStatus(e.target.value)}>
<option
value={"Не смотрели"}
style={{ color: "yellow", fontWeight: "bold" }}
>
Не смотрели
</option>
<option
value={"Глянули"}
style={{ color: "green", fontWeight: "bold" }}
>
Глянули ✅
</option>
</Select>
<Button
onClick={() => handleFilmCreate()}
disabled={title.length < 1 || description.length < 1 || isLoading}
variantColor="teal"
variant="solid"
>
Add
</Button>
</Stack>
</Box>
);
};
export default AddFilm;