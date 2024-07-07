import Image from "next/image";

export function UserBtn() {
  return (
    <button type="button" className="rounded-full">
      <Image
        src={"/user.svg"}
        // className="size-5"
        width={39.42}
        height={39.42}
        alt="user profile"
      />
    </button>
  );
}
