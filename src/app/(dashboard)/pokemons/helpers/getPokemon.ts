import { PokemonDetails } from "@/interfaces/pokemons/PokemonDetails";
import { notFound } from "next/navigation";

export const getPokemon = async (q: number | string) => {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`, {
      // cache: "force-cache", // hace que la peticion no se vuelva a hacer si ya existe en cache
      next: {
        revalidate: 60 * 60 * 24 * 30, // 30 dias
      },
    }).then<PokemonDetails>((res) => res.json());

    return {
      pokemonDetails: result,
    };
  } catch (error) {
    console.assert(error);
    notFound();
  }
};
