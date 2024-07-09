import { CartBtn } from "../features/CartBtn";
import { SearchBar } from "../features/SearchBar";
import { UserBtn } from "../features/UserBtn";
import { WishlistBtn } from "../features/WishlistBtn";
import { Banner } from "./Banner";
import { Nav } from "./Nav";

export function Header() {
  return (
    <>
      <Banner />
      <header className="bindX flex-center-between sticky top-0 z-[50] h-16 bg-custom-white shadow-md shadow-secondary/20">
        <Nav />

        <div className="flex items-center gap-1 xl:gap-8">
          <SearchBar />
          <div className="flex items-center gap-4">
            <CartBtn />
            <div className="hidden lg:inline-block">
              <UserBtn />
            </div>
          </div>
          <div className="lg:hidden">
            <UserBtn />
          </div>
        </div>
      </header>
    </>
  );
}
