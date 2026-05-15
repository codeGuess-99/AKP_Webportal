"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 text-lg font-medium text-text-muted md:flex">
        <Link
          href="/"
          className={`transition duration-300 hover:text-primary-light ${
            pathname === "/" ? "text-primary-light" : ""
          }`}
        >
          Home
        </Link>

        <Link
          href="/services"
          className={`transition duration-300 hover:text-primary-light ${
            pathname === "/services" ? "text-primary-light" : ""
          }`}
        >
          Services
        </Link>

        <Link
          href="/about"
          className={`transition duration-300 hover:text-primary-light ${
            pathname === "/about" ? "text-primary-light" : ""
          }`}
        >
          About
        </Link>

        <Link
          href="/contact"
          className={`transition duration-300 hover:text-primary-light ${
            pathname === "/contact" ? "text-primary-light" : ""
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="group relative z-50 grid h-11 w-11 place-items-center rounded-full border border-card-border bg-background-deep shadow-glow-soft transition duration-300 hover:border-card-border-hover hover:bg-background-surface md:hidden"
      >
        <span className="relative h-5 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-primary-light transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-primary-light transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-primary-light transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 top-14 z-40 w-[min(calc(100vw-3rem),22rem)] overflow-hidden rounded-[1.5rem] border border-card-border bg-background shadow-glow-lg transition duration-300 md:hidden ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-background-deep" />
        <div className="pointer-events-none absolute inset-0 border border-primary-light/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary-light/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-primary-dark/20 blur-3xl" />

        <nav className="relative z-10 flex flex-col p-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium transition duration-300 hover:bg-card-hover hover:text-primary-light ${
              pathname === "/"
                ? "bg-highlight-soft text-primary-light"
                : "text-text-muted"
            }`}
          >
            <span>Home</span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition duration-300 ${
                pathname === "/"
                  ? "bg-primary-light shadow-glow"
                  : "bg-card-border group-hover:bg-primary-light"
              }`}
            />
          </Link>

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium transition duration-300 hover:bg-card-hover hover:text-primary-light ${
              pathname === "/services"
                ? "bg-highlight-soft text-primary-light"
                : "text-text-muted"
            }`}
          >
            <span>Services</span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition duration-300 ${
                pathname === "/services"
                  ? "bg-primary-light shadow-glow"
                  : "bg-card-border group-hover:bg-primary-light"
              }`}
            />
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium transition duration-300 hover:bg-card-hover hover:text-primary-light ${
              pathname === "/about"
                ? "bg-highlight-soft text-primary-light"
                : "text-text-muted"
            }`}
          >
            <span>About</span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition duration-300 ${
                pathname === "/about"
                  ? "bg-primary-light shadow-glow"
                  : "bg-card-border group-hover:bg-primary-light"
              }`}
            />
          </Link>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium text-text-muted transition duration-300 hover:bg-card-hover hover:text-primary-light"
          >
            <span>Contact</span>
            <span className="h-1.5 w-1.5 rounded-full bg-card-border transition duration-300 group-hover:bg-primary-light" />
          </Link>

          <div className="mt-3 border-t border-card-border pt-3">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-full bg-button-primary px-5 py-3 text-sm font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavLinks;
