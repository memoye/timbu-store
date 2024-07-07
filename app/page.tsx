import { BrandsSection } from "./_components/BrandsSection";
import { HeroSection } from "./_components/HeroSection";
import { NewCollectionsSection } from "./_components/NewCollectionsSection";
import { ProductsSection } from "./_components/ProductsSection";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <BrandsSection />
      <NewCollectionsSection />
      <ProductsSection />
    </main>
  );
}
