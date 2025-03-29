import { PokemonsResponse } from "@/interfaces/pokemons/Pokemon";
import { SimplePokemon } from "@/interfaces/pokemons/SimplePokemon";
import { substractIdFromUrl } from "./substractIdFromUrl";

export const getPokemons = async (limit = 20, offset = 0) => {
  const { results } = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then<PokemonsResponse>((res) => res.json());

  const simpleResults = results.map((pokemon) => {
    return {
      id: substractIdFromUrl(pokemon.url),
      name: pokemon.name,
    } as SimplePokemon;
  });

  return simpleResults;
};
