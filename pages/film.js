import { Container } from "@chakra-ui/react";
import AddFilm from "../components/AddFilm";
import FilmsList from "../components/FilmsList";
export default function Home() {
return (
<Container maxW="7xl">
<AddFilm/>
<FilmsList />
</Container>
);
}