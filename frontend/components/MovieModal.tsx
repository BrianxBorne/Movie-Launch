"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Film } from "@/types/film";

import MovieHero from "./movie-modal/MovieHero";
import MovieDetails from "./movie-modal/MovieDetails";

interface MovieModalProps {
  film: Film | null;
  onClose: () => void;
}

export default function MovieModal({
  film,
  onClose,
}: MovieModalProps) {
  // Close using ESC
  useEffect(() => {
    if (!film) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [film, onClose]);

  // Lock page scrolling
  useEffect(() => {
    if (!film) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [film]);

  return (
    <AnimatePresence>
      {film && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-xl
            p-0
            sm:p-4
            lg:p-8
            "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: 20,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="
                relative
                flex
                h-[100dvh]
                sm:h-[95vh]
                lg:h-[92vh]
                w-full
                max-w-7xl
                flex-col
                overflow-hidden
                rounded-none
                sm:rounded-2xl
                lg:rounded-3xl
                bg-[#090909]
                shadow-[0_25px_120px_rgba(0,0,0,0.75)]
                "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition-all duration-300 hover:scale-110 hover:bg-[#C9A14A] hover:text-black"
            >
              ×
            </button>

            {/* Fixed Hero */}

            <MovieHero film={film} />

            {/* Scrollable Content */}

            <MovieDetails film={film} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}