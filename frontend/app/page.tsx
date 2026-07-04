import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import UpcomingLaunches from "@/components/sections/UpcomingLaunches";
import About from "@/components/sections/About";
import Newsletter from "@/components/sections/Newsletter";

import { getFilms } from "@/lib/api";

export default async function Home() {
  const films = await getFilms();

  return (
    <>
      <Navbar />

      <Hero film={films[0]} films={films} />

      <UpcomingLaunches films={films} />

      <About />

      <Newsletter />

      <Footer />
    </>
  );
}