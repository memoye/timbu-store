import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="bindX text-secondary">
      <Link href="/" className="border-2 border-secondary p-2">
        &#x2190; Continue Shopping
      </Link>
    </main>
  );
}
