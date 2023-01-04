import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Link from "next/link";
export default function Home() {
return (
<Container maxW="7xl">
<Auth />
<Link href="/todo">Планы</Link>
</Container>
);
}