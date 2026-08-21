import HeroCarousel from "../components/HeroCarousel";
import CategorySection from "../components/CategorySection";
import TrendingSymptoms from "../components/TrendingSymptoms";
import PopularFoods from "../components/PopularFoods";
import LatestArticles from "../components/LatestArticles";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroCarousel />

      <CategorySection />

      <TrendingSymptoms />

      <PopularFoods />

      <LatestArticles />
    </main>
  );
}