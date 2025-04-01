import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/features/todos/counterSlice";
import pokemonReducer from "@/lib/features/todos/pokemonSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { counter: counterReducer, pokemon: pokemonReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
