"use client";

import { toggleFavorite } from "@/lib/features/todos/pokemonSlice";
import { RootState } from "@/lib/store";
import React, { FC, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface FavoritePokemonButtonProps {
  id: number;
  name: string;
}

export const FavoritePokemonButton: FC<FavoritePokemonButtonProps> = ({
  id,
  name,
}) => {
  const pokemonFinded = useSelector((state: RootState) => state.pokemon[id]);

  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(pokemonFinded?.isFavorite);

  const handleClick = () => {
    setFavorite(!favorite);
    dispatch(toggleFavorite({ id: id.toString(), name: name }));
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
        favorite
          ? "bg-red-100 hover:bg-red-200"
          : "bg-neutral-100 hover:bg-neutral-200"
      }`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      {favorite ? (
        <MdFavorite className="text-red-500 w-8 h-8" />
      ) : (
        <MdFavoriteBorder className="text-neutral-500 w-8 h-8" />
      )}
    </button>
  );
};
