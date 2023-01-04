import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
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
import AddFilm from "../components/AddFilm";

export default function Home() {
return (
<Container maxW="7xl">
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='/todo'>Планы</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/film'>Фильмы</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='/'>Домой</BreadcrumbLink>
  </BreadcrumbItem>
  <Auth />
</Breadcrumb>
<Popover>
  <PopoverTrigger>
    <Button>Добавить кинчик</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <AddFilm/>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
</Container>
)
}