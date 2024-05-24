import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center my-5">
        <h1 className="text-5xl font-sans">Test Store</h1>
      </div>
      <div className="flex justify-evenly">
        <h1>
          <Link href="/Products/baseballCaps">Baseball Caps</Link>
        </h1>
        <h1>
          <Link href="/Products/t-shirts">T-Shirts</Link>
        </h1>
      </div>
    </div>
  );
}
