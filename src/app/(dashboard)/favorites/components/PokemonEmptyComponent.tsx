import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";

export const PokemonEmptyComponent = () => {
  return (
    <div className="flex flex-col items-center gap-6 animate-fade animate-duration-300 animate-ease-in p-6 border-2 border-dashed border-neutral-300 rounded-lg">
      <FaBoxOpen className="text-6xl text-neutral-400" />

      <div className="text-center">
        <h1 className="text-2xl font-semibold text-neutral-500">
          No hay pokemones favoritos
        </h1>
        <p className="text-neutral-400 mt-2">
          Parece que aún no has agregado ningún Pokémon a tus favoritos.
        </p>
      </div>

      <Link
        href="/pokemons"
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Agregar Favoritos
      </Link>
    </div>
  );
};
