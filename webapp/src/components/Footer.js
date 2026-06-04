import Link from "next/link";

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

            <Link
              href="/contact"
              className="transition duration-300 hover:text-primary-light"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-primary-light">
            Contact
          </p>

          <div className="flex flex-col gap-3 leading-6">
            <p>+1 919-914-1293</p>
            <p className="break-words">corporateservices@kazanc.app</p>
            <p>1121, Lowland Street, Apex, NC - 27523</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
