import Link from "next/link";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bindX mt-12 flex items-start justify-between gap-8 bg-custom-white p-4 py-12 text-secondary max-lg:flex-col md:p-12 lg:py-24">
      <div className="max-w-[383px] space-y-6">
        <Logo className="!px-0" />
        <p className="text-base lg:text-xl">
          We are the best when it comes to fashion. We&apos;ve got you covered,
          any day and any time
        </p>
        <form className="flex items-stretch -space-x-2">
          <input
            type="email"
            id="email"
            required
            name="email"
            className="bg-muted px-4 text-secondary outline-transparent placeholder:text-muted-foreground"
            placeholder="Enter email address"
          />
          <Button type="submit" className="font-medium" size="md" fill>
            Submit
          </Button>
        </form>
      </div>

      <div className="flex w-full max-w-[632px] flex-1 items-start justify-between">
        <div>
          <h4 className="mb-5 text-base font-semibold text-black lg:text-xl">
            Products
          </h4>

          <ul className="flex flex-col items-start justify-between gap-2 lg:gap-4">
            {["T-shirt", "Jacket", "Short", "Hat"].map((fi) => (
              <li key={fi} className="">
                <Link
                  className="text-xs hover:underline md:text-sm lg:text-xl"
                  href={"#"}
                >
                  {fi}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-base font-semibold text-black lg:text-xl">
            Categories
          </h4>

          <ul className="flex flex-col items-start justify-between gap-2 lg:gap-4">
            {["Men", "Women", "Kids", "Gift"].map((fi) => (
              <li key={fi} className="">
                <Link
                  className="text-xs hover:underline md:text-sm lg:text-xl"
                  href={"#"}
                >
                  {fi}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-base font-semibold text-black lg:text-xl">
            Social Media
          </h4>

          <ul className="flex flex-col items-start justify-between gap-2 lg:gap-4">
            {["Instagram", "Facebook", "Youtube", "X (Twitter)"].map((fi) => (
              <li key={fi} className="">
                <Link
                  className="text-xs hover:underline md:text-sm lg:text-xl"
                  href={"#"}
                >
                  {fi}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
