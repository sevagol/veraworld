import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import { Button } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
export default function Home() {
return (
<Container maxW="7xl">
<Popover>
  <PopoverTrigger>
    <Button block size="lg" w='100%' >Добавить мечту</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <AddTodo/>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
<TodoList />
</Container>
);
}