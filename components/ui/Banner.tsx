type BannerProps = {
  text?: string;
};

export function Banner({
  text = "Join the moving trend!!! we are offering a massive promo for your wears this festive season...",
}: BannerProps) {
  return (
    <div className="group/Banner color-secondary relative z-50 hidden flex-nowrap items-center overflow-hidden py-2 text-lg lg:flex xl:text-2xl xl:font-semibold">
      <div className="flex w-full items-center justify-end whitespace-nowrap transition-all group-hover/Banner:animate-none xl:animate-infinite-scroll-lr">
        <p className="mx-6 flex-shrink-0">{text}</p>
      </div>

      <div
        className="animate-scroll-left flex animate-infinite-scroll-lr whitespace-nowrap group-hover/Banner:hidden group-hover/Banner:animate-none max-xl:hidden"
        aria-hidden
      >
        <p className="mx-6 flex-shrink-0">{text}</p>
      </div>

      <div
        className="animate-scroll-left flex animate-infinite-scroll-lr whitespace-nowrap group-hover/Banner:hidden group-hover/Banner:animate-none max-xl:hidden"
        aria-hidden
      >
        <p className="mx-6 flex-shrink-0">{text}</p>
      </div>
    </div>
  );
}
