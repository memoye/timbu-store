import { BrandsSection } from "./_components/BrandsSection";
import { HeroSection } from "./_components/HeroSection";
import { NewCollectionsSection } from "./_components/NewCollectionsSection";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <BrandsSection />
      <NewCollectionsSection />
    </main>
  );
}
