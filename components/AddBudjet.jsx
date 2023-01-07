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
import { addBudjet } from "../api/budjet";
import { set } from "react-hook-form";
const AddBudjet = () => {
const [title, setTitle] = React.useState("");
const [who, setWho] = React.useState("");
const [spent, setSpent] = React.useState("");
const [isLoading, setIsLoading] = React.useState(false);
const toast = useToast();
const { isLoggedIn, user } = useAuth();
const handleBudjetCreate = async () => {
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
const budjets = {
title,
who,
spent,
userId: user.uid,
};
await addBudjets(budjets);
setIsLoading(false);
setTitle("");
setWho("")
setSpent("");
toast({ title: "Трата добавлена", status: "success" });
};
return (
<Box w="100%" margin={"0 auto"} display="block" mt={5}>
<Stack direction="column">
<Input
placeholder="Что за трата?"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<Input
placeholder="Кто потратил?"
value={who}
onChange={(e) => setWho(e.target.value)}
/>
<Textarea
placeholder="Cколько?"
value={spent}
onChange={(e) => setSpent(e.target.value)}
/>
<Button
onClick={() => handleBudjetCreate()}
disabled={title.length < 1 || description.length < 1 || isLoading}
variantColor="teal"
variant="solid"
>
Добавить
</Button>
</Stack>
</Box>
);
};
export default AddBudjet;