import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Spacer,
    Heading
  } from '@chakra-ui/react'



export default function Home() {
return (

<Container maxW="7xl">
<Flex>
    <Box p="2">
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem>
      <Link href='/film'>Фильмы</Link>
    </MenuItem>
    <MenuItem >
    <Link href='/todo'>Мечты</Link>
    </MenuItem>
  </MenuList>
</Menu>
</Box>
<Spacer/>
<Box>
    <Auth/>
    </Box>
    </Flex>
</Container>
)
}