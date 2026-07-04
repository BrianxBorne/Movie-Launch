import { Film } from "@/types/film";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export async function getFilms(): Promise<Film[]> {
  const response = await fetch(`${API_URL}/films`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch films");
  }

  const data = await response.json();

  return data.data;
}

export async function getFilm(slug: string): Promise<Film> {
  const response = await fetch(`${API_URL}/films/${slug}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Film not found");
  }

  const data = await response.json();

  return data.data;
}