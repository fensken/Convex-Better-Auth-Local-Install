"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm mt-auto">
      <p>
        Made with ❤️ by{" "}
        <Link
          target="_blank"
          href="https://www.shardulgautam.com.np"
          className="hover:underline"
        >
          Shardul
        </Link>
      </p>
      <p className="mt-2">
        <Link
          target="_blank"
          href="https://github.com/fensken"
          className="mx-2 hover:underline"
        >
          GitHub
        </Link>
        |
        <Link
          target="_blank"
          href="https://www.youtube.com/@fensken"
          className="mx-2 hover:underline"
        >
          YouTube
        </Link>
        |
        <Link
          target="_blank"
          href="https://shardulgautam.com.np"
          className="mx-2 hover:underline"
        >
          Website
        </Link>
      </p>
    </footer>
  );
}
