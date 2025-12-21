"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Something went wrong 😢
      </h1>

      <p className="max-w-md text-gray-600">
        An unexpected error occurred. Please try again or come back later.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-black px-6 py-2 text-white transition hover:bg-gray-800"
        >
          Try Again
        </button>

        <a
          href="/"
          className="rounded-lg border border-black px-6 py-2 transition hover:bg-black hover:text-white"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
