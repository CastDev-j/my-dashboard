import { Metadata } from "next";
import React from "react";
import { getPokemons } from "./helpers/getPokemons";
import { BasicPokemonCard } from "./components/BasicPokemonCard";

export const metadata: Metadata = {
  title: "CastDev-j | Pokemons",
  description: "CastDev-j | Pokemons",
};

export default async function CounterPage() {
  const pokemons = await getPokemons(151, 0);

  //   throw new Error("Error: This is a test error");

  return (
    <>
      <section className="flex flex-col gap-4 animate-fade animate-duration-300 animate-ease-in">
        <div className="p-4 border-2 border-neutral-300 border-dashed rounded-lg">
          <h1 className="text-center text-2xl text-neutral-900">Pokemones</h1>
        </div>

        <article className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <BasicPokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </article>
      </section>
    </>
  );
}
