import React from "react";
import Link from "next/link";

interface Link {
  id: number;
  href: string;
  menu: string;
}

const links: Link[] = [
  { id: 1, href: "/sign-in", menu: "Sign In" },
  { id: 2, href: "/sign-up", menu: "Sign Up" },
];

export default function Header() {
  return (
    <div className="py-3 px-12 bg-green-300 fixed top-0 w-full flex items-center justify-between ">
      <Link href="/">Home</Link>

      <ul
        className="flex justify-evenly items-center 
      "
      >
        {links.map(({ href, menu, id }) => (
          <li key={id} className="px-3">
            <Link href={href}>{menu}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
