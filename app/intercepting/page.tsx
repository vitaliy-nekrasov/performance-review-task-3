import Link from "next/link";

export const metadata = {
  title: "Intercepting Page | WeatherApp",
  description: "Intercepting Page",
  keywords: "Intercepting Page, Intercepting",
};

export default function InterceptingPage() {
  return (
    <>
      <h1 className="text-4xl mb-5 text-center">
        Now you on the origin Intercepting Page
      </h1>
      <Link
        href="/"
        className="text-2xl font-medium hover:text-[#e85a4f] transition-all"
      >
        Go to the Home page
      </Link>
    </>
  );
}
