import { PokemonDetails } from "@/interfaces/pokemons/PokemonDetails";
import { notFound } from "next/navigation";

export const getPokemon = async (id: number) => {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache", //Todo cambiar despues
    }).then<PokemonDetails>((res) => res.json());

    return {
      pokemonDetails: result,
    };
  } catch (error) {
    console.assert(error);
    notFound();
  }
};
