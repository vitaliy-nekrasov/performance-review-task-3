"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    try {
      router.push(`/search/${city}`);
      await new Promise((resolve) => setTimeout(resolve, 500));
    } finally {
      if (!city) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-semibold mb-6">Search for a City</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border-2 border-gray-300 rounded-lg p-2 text-lg"
        />
        <button
          onClick={handleSearch}
          className={`bg-[#e85a4f] text-white px-4 py-2 rounded-lg text-lg hover:bg-[#d44b3e] transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
    </div>
  );
}
