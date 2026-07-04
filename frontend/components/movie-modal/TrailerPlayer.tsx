"use client";

interface TrailerPlayerProps {
  trailerUrl: string;
  title: string;
}

export default function TrailerPlayer({
  trailerUrl,
  title,
}: TrailerPlayerProps) {
  // Convert normal YouTube links into embed links
  const embedUrl = trailerUrl.includes("watch?v=")
    ? trailerUrl.replace("watch?v=", "embed/")
    : trailerUrl;

  return (
    <section>

      <p className="text-xs uppercase tracking-[0.45em] text-[#C9A14A]">
        Official Trailer
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_15px_60px_rgba(0,0,0,0.45)]">

        <div className="aspect-video">

          <iframe
            src={embedUrl}
            title={`${title} Official Trailer`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
}