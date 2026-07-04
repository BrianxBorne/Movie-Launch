"use client";

import { Film } from "@/types/film";
import TrailerPlayer from "./TrailerPlayer";

interface MovieDetailsProps {
  film: Film;
}

export default function MovieDetails({
  film,
}: MovieDetailsProps) {
  const formattedDate = new Date(film.release_date).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const castMembers = film.cast
    .split(",")
    .map((actor) => actor.trim());

  return (
    <div className="movie-scroll flex-1 overflow-y-auto">

      <div className="mx-auto max-w-7xl px-10 py-14">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">

          {/* LEFT COLUMN */}

          <div>

            {/* Synopsis */}

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Synopsis
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                {film.synopsis}
              </p>

            </section>

            {/* Trailer */}

            <div className="mt-20">

              <TrailerPlayer
                trailerUrl={film.trailer_url}
                title={film.title}
              />

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <aside className="space-y-12">

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Director
              </p>

              <p className="mt-4 text-lg text-gray-300">
                {film.director}
              </p>

            </section>

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Starring
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {castMembers.map((actor) => (
                  <span
                    key={actor}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#C9A14A]/40 hover:text-white"
                  >
                    {actor}
                  </span>
                ))}

              </div>

            </section>

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Genre
              </p>

              <p className="mt-4 text-gray-300">
                {film.genre}
              </p>

            </section>

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Runtime
              </p>

              <p className="mt-4 text-gray-300">
                {film.duration} Minutes
              </p>

            </section>

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Rating
              </p>

              <p className="mt-4 text-gray-300">
                {film.rating}
              </p>

            </section>

            <section>

              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
                Release Date
              </p>

              <p className="mt-4 text-gray-300">
                {formattedDate}
              </p>

            </section>

          </aside>

        </div>

      </div>

    </div>
  );
}