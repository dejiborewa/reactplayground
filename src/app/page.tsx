"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://cat-fact.herokuapp.com/facts");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <button type="submit" style={{ display: "block" }}>
          Submit
        </button>
      </form>
    </main>
  );
}
