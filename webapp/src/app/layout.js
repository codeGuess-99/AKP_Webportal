import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aureon Systems LLC",
  description:
    "Aureon Systems LLC builds tailored software, workflow automation, and scalable IT systems for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border bg-background-overlay px-6 py-2 shadow-glow-soft backdrop-blur-xl sm:px-10 lg:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary-light/25 blur-xl transition duration-300 group-hover:bg-primary-light/40" />

            <Image
              src="/akshayapatra-logo-v2.png"
              alt="AkshayaPatra logo"
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
        </a>

        <div className="hidden items-center gap-8 text-lg font-medium text-text-muted md:flex">
          <Link
            href="/"
            className="transition duration-300 hover:text-primary-light"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="transition duration-300 hover:text-primary-light"
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
            className="transition duration-300 hover:text-primary-light"
          >
            About
          </Link>
        </div>

        <a
          href="/#contact"
          className="hidden rounded-full border border-card-border bg-card-soft px-5 py-2.5 text-sm font-semibold text-primary-light shadow-glow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-card-border-hover hover:bg-button-primary hover:text-button-text hover:shadow-button sm:inline-flex"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-card-border bg-background-deep px-6 py-12 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-primary-dark/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-56 w-56 rounded-full bg-primary-light/10 blur-3xl" />
        <div className="absolute inset-0 space-grid opacity-20" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 text-sm text-text-muted md:grid-cols-3">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-primary-light">
            Aureon Systems LLC
          </p>

          <p className="text-text-faint">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-primary-light">
            Links
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="transition duration-300 hover:text-primary-light"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-primary-light"
            >
              Terms
            </a>

            <a
              href="#contact"
              className="transition duration-300 hover:text-primary-light"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-primary-light">
            Contact
          </p>

          <div className="flex flex-col gap-3 leading-6">
            <p>919-914-1293</p>
            <p className="break-words">corporateservices@kazanc.app</p>
            <p>1121, Lowland Street, Apex, NC - 27523</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
