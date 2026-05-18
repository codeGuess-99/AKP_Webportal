import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* <BackgroundFX /> */}

      <section className="relative isolate px-6 pt-28 pb-24 sm:px-10 lg:px-20">
        <Image
          src="/bg-blue-2.png"
          alt="Abstract technology background"
          fill
          priority
          className="-z-20 object-cover opacity-50 mix-blend-screen"
        />

        {/* <div className="absolute inset-0 -z-10 bg-background-overlay" />

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-dark/40 blur-3xl" />
          <div className="absolute right-0 top-60 h-[360px] w-[360px] rounded-full bg-primary-light/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-[280px] w-[280px] rounded-full bg-accent-cyan/15 blur-3xl" />
        </div> */}

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-5xl animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-card-border bg-highlight-soft px-4 py-2 text-sm font-medium text-primary-light shadow-glow-soft">
              Tailor | Automate | Scale
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-text-title sm:text-6xl lg:text-7xl">
              Tailored IT solutions that help businesses{" "}
              <span className="text-primary-light">automate</span> and scale.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-text-body">
              Aureon Systems LLC partners with growing businesses to design
              modern digital systems, automate workflows, and build scalable
              technology foundations for the future.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-button-primary px-7 py-4 text-center font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="rounded-full border border-card-border bg-card-soft px-7 py-4 text-center font-semibold text-text-title backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:bg-card-hover hover:text-primary-light"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative border-y border-card-border bg-background-deep/90 px-6 py-24 backdrop-blur sm:px-10 lg:px-20"
      >
        {/* <BackgroundFX /> */}
        <div className="absolute inset-0 -z-10 space-grid opacity-30" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
              Smart technology built around your business.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ServiceCard
              number="01"
              title="Tailored Software"
              description="Custom web platforms, internal tools, dashboards, and digital systems designed around your exact workflows."
            />

            <ServiceCard
              number="02"
              title="Workflow Automation"
              description="Automate repetitive operations, connect apps, reduce manual work, and improve speed across your teams."
            />

            <ServiceCard
              number="03"
              title="Scalable IT Systems"
              description="Modern cloud-ready architectures, integrations, and systems that grow smoothly with your business."
            />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 lg:px-20">
        {/* <BackgroundFX /> */}
        <div className="absolute inset-0 -z-10 bg-galaxy-glow opacity-30 animate-galaxy-drift" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Why Aureon Systems LLC
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
              From idea to automation, we build with clarity.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-body">
              We combine business-first thinking with reliable technical
              execution to create modern systems that are clean, connected, and
              ready to scale.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Business-first planning",
              "Clean modern interfaces",
              "Automation-ready systems",
              "Reliable scalable delivery",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-3xl border border-card-border bg-card-glass p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:bg-card-hover"
              >
                <div className="mb-5 h-3 w-3 rounded-full bg-primary-light shadow-glow transition duration-300 group-hover:scale-150" />
                <h3 className="text-xl font-semibold text-text-title">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-card-border bg-card-glass p-8 text-text shadow-glow-lg backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 bg-galaxy-glow opacity-40" />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary-light">
                Let’s Build
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
                Ready to tailor, automate, and scale your IT ecosystem?
              </h2>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-button-primary px-8 py-4 text-center font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ number, title, description }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-card-border bg-card-glass p-8 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-card-border-hover hover:bg-card-hover">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-light/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary-dark/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="text-sm font-bold text-primary-light">{number}</p>

        <h3 className="mt-8 text-2xl font-bold text-text-title">{title}</h3>

        <p className="mt-4 leading-7 text-text-body">{description}</p>

        <div className="mt-8 h-px w-full bg-card-border">
          <div className="h-px w-0 bg-primary-light transition-all duration-500 group-hover:w-full" />
        </div>

        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary-light transition duration-300 hover:gap-4 hover:text-text-title"
        >
          View All
          <span className="grid h-8 w-8 place-items-center rounded-full border border-card-border bg-card-soft text-base leading-none transition duration-300 group-hover:border-primary-light group-hover:bg-primary-light group-hover:text-background">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

function BackgroundFX() {
  const stars = [
    ["8%", "16%", "2px", "0s"],
    ["18%", "42%", "1px", "1.2s"],
    ["28%", "24%", "2px", "2s"],
    ["38%", "72%", "1px", "0.8s"],
    ["52%", "18%", "2px", "1.8s"],
    ["64%", "56%", "1px", "2.4s"],
    ["74%", "28%", "2px", "1.4s"],
    ["86%", "68%", "1px", "0.6s"],
    ["92%", "22%", "2px", "2.8s"],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 star-field opacity-35" />

      <div className="absolute left-1/2 top-[24%] h-[260px] w-[120vw] -translate-x-1/2 -rotate-12 bg-galaxy-glow opacity-50 blur-sm animate-galaxy-drift" />

      <div className="absolute left-[18%] top-[18%] h-72 w-72 rounded-full bg-primary-dark/20 blur-3xl" />
      <div className="absolute right-[12%] top-[26%] h-80 w-80 rounded-full bg-primary-light/15 blur-3xl" />
      <div className="absolute bottom-[12%] left-[30%] h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />

      {stars.map(([left, top, size, delay], index) => (
        <span
          key={index}
          className="absolute rounded-full bg-secondary-light animate-star-twinkle"
          style={{
            left,
            top,
            width: size,
            height: size,
            animationDelay: delay,
            boxShadow: "0 0 14px rgba(69, 193, 244, 0.85)",
          }}
        />
      ))}
    </div>
  );
}
