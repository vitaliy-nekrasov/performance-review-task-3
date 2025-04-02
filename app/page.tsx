import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Link
        href="/popular-cities"
        className="text-2xl font-medium hover:text-[#e85a4f] transition-all"
      >
        Popular cities
      </Link>
    </div>
  );
}