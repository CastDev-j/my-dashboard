import { CounterResponse } from "@/interfaces/counter/CounterResponse";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const getApiCounter = async () => {
  const data = await fetch("http://localhost:3000/api/counter", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then<CounterResponse>((res) => res.json());

  return data.count || 0;
};

const initialState: CounterState = {
  value: await getApiCounter(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
