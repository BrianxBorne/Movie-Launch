"use client";

import Image from "next/image";
import { Film } from "@/types/film";

interface MovieCardProps {
  film: Film;
  onClick: (film: Film) => void;
}

export default function MovieCard({
  film,
  onClick,
}: MovieCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(film)}
      className="group block w-full text-left"
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl">
        <Image
          src={`/${film.poster}`}
          alt={film.title}
          width={500}
          height={750}
          className="h-[520px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/45" />

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#C9A14A]">
            {film.genre}
          </p>

          <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-400">
            {film.logline}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.3em] text-white/80">
              Explore Film
            </span>

            <span className="text-2xl text-[#C9A14A] transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="mt-6">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#C9A14A]">
          {film.release_date}
        </p>

        <h3 className="mt-3 text-2xl font-light text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
          {film.title}
        </h3>

      </div>
    </button>
  );
}