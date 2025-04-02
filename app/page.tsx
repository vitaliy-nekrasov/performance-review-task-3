import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/popular-cities"
        className="text-2xl font-medium hover:text-[#e85a4f] transition-all"
      >
        Popular cities
      </Link>
      <Link
        href="/search"
        className="text-2xl font-medium hover:text-[#e85a4f] transition-all"
      >
        Search for a City
      </Link>
    </div>
  );
}