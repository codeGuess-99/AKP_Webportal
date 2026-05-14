"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden items-center gap-8 text-lg font-medium text-text-muted md:flex">
      <Link
        href="/"
        className={` ${pathname === "/" ? "text-primary-light" : ""} transition duration-300 hover:text-primary-light`}
      >
        Home
      </Link>
      <Link
        href="/services"
        className={`${pathname === "/services" ? "text-primary-light" : ""} transition duration-300 hover:text-primary-light`}
      >
        Services
      </Link>
      <Link
        href="/#contact"
        className="transition duration-300 hover:text-primary-light"
      >
        Contact
      </Link>
      <Link
        href="/about"
        className={` ${pathname === "/about" ? "text-primary-light" : ""} transition duration-300 hover:text-primary-light`}
      >
        About
      </Link>
    </div>
  );
}

export default NavLinks;
