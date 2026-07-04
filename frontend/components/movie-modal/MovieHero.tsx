"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Film } from "@/types/film";

interface MovieHeroProps {
  film: Film;
}

export default function MovieHero({ film }: MovieHeroProps) {
  const formattedDate = new Date(film.release_date).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[500px] w-full flex-shrink-0 overflow-hidden">

      {/* Backdrop */}

      <Image
        src={`/${film.backdrop}`}
        alt={film.title}
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/45 to-black/20" />

      {/* Hero Content */}

      <div className="absolute inset-0 flex items-end">

        <div className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            items-center
            gap-5
            px-5
            pb-6
            sm:px-6
            sm:pb-8
            md:flex-row
            md:items-end
            md:gap-8
            lg:px-10
            lg:pb-12
            ">

          {/* Poster */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
            relative
            h-[160px]
            w-[110px]
            sm:h-[220px]
            sm:w-[145px]
            md:h-[260px]
            md:w-[175px]
            lg:h-[310px]
            lg:w-[205px]
            flex-shrink-0
            overflow-hidden
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            "
          >
            <Image
              src={`/${film.poster}`}
              alt={film.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Information */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >

            <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
              Featured Premiere
            </p>

            <h1 className="
                mt-3
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-light
                leading-tight
                text-white
                ">
              {film.title}
            </h1>

            <p className="
                mt-3
                max-w-2xl
                text-sm
                sm:text-base
                md:text-lg
                leading-6
                md:leading-8
                text-gray-300
                ">
              {film.logline}
            </p>

            {/* Metadata */}

            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-gray-400">

              <span>{film.genre}</span>

              <span className="text-[#C9A14A]/60">•</span>

              <span>{film.rating}</span>

              <span className="text-[#C9A14A]/60">•</span>

              <span>{film.duration} MIN</span>

              <span className="text-[#C9A14A]/60">•</span>

              <span>{formattedDate}</span>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#090909] to-transparent" />

    </div>
  );
}