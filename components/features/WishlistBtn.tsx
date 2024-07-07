import Image from "next/image";

export const WishlistBtn = ({}) => {
  return (
    <button className="flex items-center gap-2" type="button">
      <Image
        src={"/heart_mobile.svg"}
        // className="size-5"
        width={24}
        height={24}
        alt="shopping cart"
      />
      {/* <span className="text-lg font-semibold text-secondary">Cart</span> */}
    </button>
  );
};
