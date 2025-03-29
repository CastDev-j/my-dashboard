import { FC } from "react";
import { getPokemon } from "../helpers/getPokemon";
import Image from "next/image";

interface PokemonContentProps {
  id: number;
}

export const PokemonContent: FC<PokemonContentProps> = async ({ id }) => {
  const { pokemonDetails } = await getPokemon(Number(id));

  const { abilities, name, sprites, height, weight, types, stats, moves } =
    pokemonDetails;

  return (
    <div className="p-4 bg-white rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image Section */}
        <div className="col-span-2 flex justify-center items-center">
          <Image
            src={
              sprites.other?.["official-artwork"]?.front_default ??
              sprites.front_default
            }
            alt={name}
            width={200}
            height={200}
            unoptimized
            priority={true}
            style={{
              width: "200px",
              height: "auto",
            }}
          />
        </div>

        {/* Basic Info Section */}
        <div className="col-span-1 p-6 flex flex-col bg-neutral-50 rounded-lg">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <h1 className="text-2xl font-bold text-neutral-800 mt-2">
            Pokemon ID: {id}
          </h1>
          <p className="text-neutral-600 mt-2">
            <strong>Height:</strong> {height} | <strong>Weight:</strong>{" "}
            {weight}
          </p>
        </div>

        {/* Abilities */}
        <div className="col-span-1 p-6 flex flex-col bg-neutral-50 rounded-lg">
          <h2 className="text-lg font-semibold text-neutral-800">Abilities</h2>
          <ul className="list-disc list-inside text-neutral-600">
            {abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>

        {/* Types */}
        <div className="col-span-1 p-6 flex flex-col bg-neutral-50 rounded-lg">
          <h2 className="text-lg font-semibold text-neutral-800">Types</h2>
          <ul className="list-disc list-inside text-neutral-600">
            {types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="col-span-1 p-6 flex flex-col bg-neutral-50 rounded-lg">
          <h2 className="text-lg font-semibold text-neutral-800">Stats</h2>
          <ul className="list-disc list-inside text-neutral-600">
            {stats.map((stat, index) => (
              <li key={index}>
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>

        {/* Moves */}
        <div className="col-span-2 p-6 flex flex-col bg-neutral-50 rounded-lg lg:col-span-3">
          <h2 className="text-lg font-semibold text-neutral-800">Moves</h2>
          <ul className="list-disc list-inside text-neutral-600 overflow-y-auto">
            {moves.slice(0, 10).map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 mt-2">
            Showing first 10 moves. Total moves: {moves.length}.
          </p>
        </div>
      </div>
    </div>
  );
};
