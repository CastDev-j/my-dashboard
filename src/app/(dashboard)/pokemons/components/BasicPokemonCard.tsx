import Image from "next/image";
import React, { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FavoritePokemonButton } from "./FavoritePokemonButton";

interface BasicPokemonCardProps {
  id: number;
  name: string;
}

export const BasicPokemonCard: FC<BasicPokemonCardProps> = ({ id, name }) => {
  return (
    <section className="flex flex-col items-center w-full min-h-40 p-4 border-2 gap-8 border-neutral-300 border-dashed rounded-lg">
      <div className="flex justify-between w-full">
        <div className="">
          <Link
            href={`pokemons/${name}`}
            className="p-3 size-12 flex justify-center items-center rounded-lg cursor-pointer text-start text-xl bg-neutral-100 text-neutral-400 font-semibold gap-2 transition-colors hover:text-neutral-800 active:text-neutral-800"
          >
            <FaExternalLinkAlt className="" />
          </Link>
        </div>

        <div className="flex size-12 flex-col items-center text-center gap-1 text-lg font-normal text-neutral-500 p-1 border-2 border-neutral-300 border-dashed rounded-lg">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
            alt={name}
            width={48}
            height={48}
            unoptimized
            priority={true}
            style={{
              width: "48px",
              height: "auto",
            }}
          />
        </div>
      </div>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        width={96}
        height={96}
        priority={true}
        unoptimized
        style={{
          width: "96px",
          height: "auto",
        }}
      />

      <div className="flex justify-center items-center text-lg w-full">
        <FavoritePokemonButton id={id} name={name} />
      </div>
    </section>
  );
};
