"use client";

import { useEffect, useState } from "react";
import { Film } from "@/types/film";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import MovieModal from "./MovieModal";

interface HeroProps {
  film: Film;
  films?: Film[];
}

export default function Hero({ film, films = [] }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const currentFilm = films.length > 0 ? films[index] : film;

  const backgrounds =
    films.length > 0
      ? films.map((f) => f.backdrop)
      : [film.backdrop];

  useEffect(() => {
    if (backgrounds.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFilm.id}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1.12,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1.03,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 2.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Image
              src={`/${currentFilm.backdrop}`}
              alt={currentFilm.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            key={currentFilm.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="max-w-2xl text-center"
          >
            {/* Label */}
            <p className="uppercase tracking-[0.45em] text-[10px] font-medium text-[#C9A14A]">
              Now Premiering
            </p>

            {/* Title */}
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] text-white">
              {currentFilm.title}
            </h1>

            {/* Logline */}
            <p className="mt-6 mx-auto max-w-xl text-base md:text-lg leading-8 text-gray-300">
              {currentFilm.logline}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setSelectedFilm(currentFilm)}
                className="px-6 py-3 rounded-sm bg-[#C9A14A] text-black text-sm uppercase tracking-[0.35em] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-0.5"
              >
                Explore Film
              </button>

              <a
                href="#launches"
                className="px-6 py-3 rounded-sm border border-white/20 text-sm uppercase tracking-[0.35em] text-white transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5"
              >
                View Launches
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Movie Modal */}
      <MovieModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />
    </>
  );
}