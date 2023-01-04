import { Container } from "@chakra-ui/react";
import AddFilm from "../components/AddFilm";
import FilmsList from "../components/FilmsList";
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
    <Button block size="lg" w='100%' >Добавить кинчик</Button>
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
<FilmsList />
</Container>
);
}