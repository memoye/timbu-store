import { BrandsSection } from "./_components/BrandsSection";
import { HeroSection } from "./_components/HeroSection";
import { NewCollectionsSection } from "./_components/NewCollectionsSection";
import { TrendingCollectionsSection } from "./_components/TrendingCollectionsSection";
import { WeddingWearsSection } from "./_components/WeddingWearsSection";
import { FlashSaleSection } from "./_components/FlashSaleSection";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <BrandsSection />
      <NewCollectionsSection />
      <WeddingWearsSection />
      <TrendingCollectionsSection />
      <FlashSaleSection />
    </main>
  );
}
