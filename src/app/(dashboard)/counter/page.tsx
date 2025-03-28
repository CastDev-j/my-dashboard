import { Counter } from "@/components/Counter";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CastDev-j | Contador",
  description: "CastDev-j | Contador",
};

export default function CounterPage() {
  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="p-4 border-2 border-neutral-300 border-dashed rounded-lg">
          <h1 className="text-center text-2xl text-neutral-900">Contador</h1>
        </div>

        <Counter initialValue={0} />
      </section>
    </>
  );
}
