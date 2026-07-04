"use client";

import { useState } from "react";
import { Film } from "@/types/film";
import MovieCard from "../MovieCard";
import MovieModal from "../MovieModal";

interface UpcomingLaunchesProps {
  films: Film[];
}

export default function UpcomingLaunches({
  films,
}: UpcomingLaunchesProps) {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  return (
    <>
      <section
        id="launches"
        className="bg-[#090909] py-32"
      >
        <div className="max-w-7xl mx-auto px-8">

          {/* Section Heading */}

          <p className="uppercase tracking-[0.4em] text-[#C9A14A] text-sm">
            Upcoming Launches
          </p>

          <h2 className="mt-4 mb-20 text-5xl md:text-6xl font-light tracking-tight">
            The Next Premieres
          </h2>

          {/* Movie Grid */}

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

            {films.map((film) => (
              <MovieCard
                key={film.id}
                film={film}
                onClick={setSelectedFilm}
              />
            ))}

          </div>
        </div>
      </section>

      {/* Movie Overlay */}

      <MovieModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />
    </>
  );
}