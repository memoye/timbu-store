import { Button } from "@/components/ui/Button";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { featuredWeddingWears } from "@/lib/dummyData";

export function WeddingWearsSection() {
  const { title, desc, images } = featuredWeddingWears;

  return (
    <section className="bindL my-12 py-12 pr-4 md:pr-24 lg:pr-0">
      <div className="flex flex-col items-center gap-4 text-secondary lg:flex-row">
        <div className="flex-1 max-lg:mx-auto max-lg:text-center xl:max-w-[331px]">
          <h2
            className="mb-2 max-w-md text-balance text-4xl font-semibold leading-snug md:mx-auto lg:mx-0 lg:mb-4 lg:text-[55px]"
            title={title}
          >
            {title}
          </h2>

          <p className="mb-4 text-2xl font-semibold lg:text-3xl lg:font-normal">
            {desc}
          </p>

          <Button className="w-full" fill>
            See more
          </Button>
        </div>
        <ImageCarousel className="max-h-[573px] flex-[3]" images={images} />
      </div>
    </section>
  );
}
