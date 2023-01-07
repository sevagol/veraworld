import RandFilm from "../components/RandFilm";
import { Portal, Box } from "@chakra-ui/react";
import AddBudjet from "../components/AddBudjet";
import AddSalary from "../components/AddSalary";

export default function Home() {
return (
<Box maxW="7xl">
   <AddBudjet/>
   <AddSalary/>
</Box>
);
}
