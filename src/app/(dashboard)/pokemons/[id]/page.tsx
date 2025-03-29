import React from "react";
import { PokemonContent } from "../components/PokemonContent";
import { getPokemon } from "../helpers/getPokemon";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const { pokemonDetails } = await getPokemon(Number(id));

    return {
      title: `CastDev-J | Pokemon | ${pokemonDetails.name}`,
      description: `CastDev-J | Pokemon | ${pokemonDetails.name}`,
    };
  } catch (error) {
    console.assert(error);

    return {
      title: `CastDev-J | Pokemon`,
      description: `CastDev-J | Pokemon`,
    };
  }
}



export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <div className="flex flex-col gap-4 animate-fade animate-duration-300 animate-ease-in">
        <div className="text-lg font-medium text-neutral-700 flex items-center gap-2">
          <Link href="/pokemons" className="text-indigo-500 hover:underline">
            Pokemons
          </Link>
          <span className="text-neutral-500">/</span>
          <Link
            href={`/pokemons/${id}`}
            className="text-indigo-500 hover:underline"
          >
            {id}
          </Link>
        </div>

        <div className="p-4 border-2 border-neutral-300 border-dashed rounded-lg">
          <h1 className="text-center text-2xl text-neutral-900">Pokemon</h1>
        </div>

        <PokemonContent id={Number(id)} />
      </div>
    </>
  );
}
