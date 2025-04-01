import { Counter } from "@/components/Counter";
import React from "react";
export default function HomePage() {
  return (
    <>
      <section className="flex flex-col gap-4 animate-fade animate-duration-300 animate-ease-in">
        <div className="p-4 border-2 border-neutral-300 border-dashed rounded-lg animate-fade animate-duration-300 animate-ease-in">
          <h1 className="text-center text-2xl text-neutral-900">Inicio</h1>
        </div>

        <Counter />
      </section>
    </>
  );
}
