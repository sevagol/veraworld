import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
export default function Home() {
return (
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
)
}
