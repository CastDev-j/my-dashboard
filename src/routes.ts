import { IconType } from "react-icons";
import { ImFileEmpty } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { SlCalculator } from "react-icons/sl";
import { TbPokeball } from "react-icons/tb";

interface Route {
  path: string;
  name: string;
  Icon: IconType;
  description: string;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Inicio",
    Icon: IoHomeOutline,
    description: "Página principal del panel de control",
  },
  {
    path: "/counter",
    name: "Contador",
    Icon: SlCalculator,
    description: "Página para realizar cálculos o contar",
  },
  {
    path: "/pokemons",
    name: "Pokemones",
    Icon: TbPokeball,
    description: "Página para ver pokemons",
  },
  {
    path: "#example2",
    name: "Example",
    Icon: ImFileEmpty,
    description: "Ejemplo de página número 2",
  },
  {
    path: "/#example3",
    name: "Example",
    Icon: ImFileEmpty,
    description: "Ejemplo de página número 3",
  },
];

export default routes;
