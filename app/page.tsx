import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Introduction from "@/components/Introduction";
import HighlightReel from "@/components/HighlightReel";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-apex-black">
      <Navbar />
      <Hero />
      <StatsBar />
      <Introduction />
      <HighlightReel />
      <About />
      <Services />
      <FeaturedProject />
      <Contact />
      <Footer />
    </main>
  );
}
