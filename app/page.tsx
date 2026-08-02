import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroCarousel />
      <CategorySection />
      <Footer />
    </main>
  );
}