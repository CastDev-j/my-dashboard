import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  id: string;
  name: string;
  isFavorite: boolean;
}

const initialState: { [id: string]: Pokemon } = {
  "1": { id: "1", isFavorite: true, name: "bulbasaur" },
  "2": { id: "2", isFavorite: true, name: "ivysaur" },
  // Agrega más Pokémon aquí
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    toggleFavorite: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const pokemonId = action.payload.id;
      const pokemonName = action.payload.name;
      if (state[pokemonId]) {
        state[pokemonId].isFavorite = !state[pokemonId].isFavorite;
      } else {
        state[pokemonId] = {
          id: pokemonId,
          isFavorite: true,
          name: pokemonName,
        };
      }
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
