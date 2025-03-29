"use client";

import React, { FC, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface FavoritePokemonButtonProps {
  id: number;
}

export const FavoritePokemonButton: FC<FavoritePokemonButtonProps> = ({
  id,
}) => {

  const {} = id;
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
        favorite
          ? "bg-red-100 hover:bg-red-200"
          : "bg-neutral-100 hover:bg-neutral-200"
      }`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      {favorite ? (
        <MdFavorite className="text-red-500 w-6 h-6" />
      ) : (
        <MdFavoriteBorder className="text-neutral-500 w-6 h-6" />
      )}
    </button>
  );
};
