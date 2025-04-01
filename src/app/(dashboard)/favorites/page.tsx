
import React from "react";
import { PokemonFavoriteGrid } from "./components/PokemonFavoriteGrid";

export const metadata = {
  title: "CastDev-j | Pokemons | Favorites",
  description: "Pokemones Favoritos",
};

export default function FavoritesPage() {


  return (
    <>
      <div className="flex flex-col gap-4 animate-fade animate-duration-300 animate-ease-in">
        <div className="p-4 border-2 border-neutral-300 border-dashed rounded-lg">
          <h1 className="text-center text-2xl text-neutral-900">
            Pokemones Favoritos
          </h1>
        </div>

        <PokemonFavoriteGrid />

      </div>
    </>
  );
}
