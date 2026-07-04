"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    setMessage(data.message);

    if (res.ok) setEmail("");
  }

  return (
    <section
      id="newsletter"
      className="py-32 bg-[#090909]"
    >
      <div className="max-w-xl mx-auto px-8 text-center">

        <h2 className="text-5xl mb-6">
          Stay in the Loop
        </h2>

        <p className="text-gray-400 mb-10">
          Be the first to hear about upcoming premieres.
        </p>

        <form
          onSubmit={subscribe}
          className="space-y-5"
        >

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 bg-black border border-white/10 rounded-lg"
          />

          <button
            className="w-full bg-[#C9A14A] text-black py-4 rounded-lg"
          >
            Subscribe
          </button>

        </form>

        <p className="mt-6 text-[#C9A14A]">
          {message}
        </p>

      </div>
    </section>
  );
}