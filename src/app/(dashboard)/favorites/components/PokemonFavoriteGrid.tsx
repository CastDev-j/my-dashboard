"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BasicPokemonCard } from "../../pokemons/components/BasicPokemonCard";
import { PokemonEmptyComponent } from "./PokemonEmptyComponent";
import { RootState } from "@/lib/store";

export const PokemonFavoriteGrid = () => {
  const pokemonsSaved = useSelector((state: RootState) => state.pokemon);

  const temporalFavorites = Object.values(pokemonsSaved).filter(
    (pokemon) => pokemon.isFavorite === true
  );

  const [pokemonsLoaded] = useState(temporalFavorites);

  return (
    <>
      <article className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {pokemonsLoaded.length > 0 &&
          pokemonsLoaded.map((pokemon) => (
            <BasicPokemonCard
              key={pokemon.id}
              {...pokemon}
              id={Number(pokemon.id)}
            />
          ))}
      </article>

      {pokemonsLoaded.length <= 0 && <PokemonEmptyComponent />}
    </>
  );
};
