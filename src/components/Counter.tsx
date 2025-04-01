"use client";

import { decrement, increment, reset } from "@/lib/features/todos/counterSlice";
import { RootState } from "@/lib/store";
import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterComponent: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-neutral-300 border-dashed">
      <p className="text-6xl font-bold text-neutral-800 mb-6">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-neutral-800 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-opacity-75 transform transition-transform duration-300 hover:scale-105"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-neutral-100 text-neutral-600 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-opacity-75 transform transition-transform duration-300 hover:scale-105"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-white text-neutral-900 font-semibold border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-100 focus:ring-opacity-75 transform transition-transform duration-300 hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export const Counter = memo(CounterComponent);
