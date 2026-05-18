import Image from "next/image";
import NavLinks from "./Navlinks";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border bg-background-overlay px-6 py-2 shadow-glow-soft backdrop-blur-xl sm:px-10 lg:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary-light/25 blur-xl transition duration-300 group-hover:bg-primary-light/40" />

            <Image
              src="/Aureon-systems-icon-v2.png"
              alt="logo"
              width={70}
              height={70}
              priority
              className="relative z-10 drop-shadow-[0_0_18px_rgba(69,193,244,0.28)]"
            />
          </div>

          <div>
            <p className="text-metal-readable text-lg font-bold leading-none">
              Aureon Systems LLC
            </p>
            <p className="mt-1 text-xs font-medium text-primary-light">
              Tailor | Automate | Scale
            </p>
          </div>
        </Link>

        <NavLinks />

        <Link
          href="/contact"
          className="hidden rounded-full border border-card-border bg-card-soft px-5 py-2.5 text-sm font-semibold text-primary-light shadow-glow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-card-border-hover hover:bg-button-primary hover:text-button-text hover:shadow-button sm:inline-flex"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}

export default Header;
