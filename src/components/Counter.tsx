"use client";

import React, { FC, memo, useCallback, useEffect, useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const CounterComponent: FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    setCount(initialValue);
  }, [initialValue]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count, setCount]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue, setCount]);

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-neutral-300 border-dashed">
      <p className="text-6xl font-bold text-neutral-800 mb-6">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-neutral-800 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-opacity-75 transform transition-transform duration-300 hover:scale-105"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-neutral-100 text-neutral-600 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-opacity-75 transform transition-transform duration-300 hover:scale-105"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-white text-neutral-900 font-semibold border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-100 focus:ring-opacity-75 transform transition-transform duration-300 hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export const Counter = memo(CounterComponent);
