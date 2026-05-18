import Link from "next/link";

export const metadata = {
  title: "About | Aureon Systems LLC",
  description:
    "Learn about Aureon Systems LLC, our mission, vision, engineering values, AI innovation focus, and commitment to helping organizations scale confidently.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      <AboutBackgroundFX />

      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-card-border bg-highlight-soft px-4 py-2 text-sm font-medium text-primary-light shadow-glow-soft">
              About Aureon Systems LLC
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-text-title sm:text-6xl lg:text-7xl">
              Engineering software systems for the next era of{" "}
              <span className="text-primary-light drop-shadow-[0_0_18px_rgba(69,193,244,0.65)]">
                intelligent scale
              </span>
              .
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-text-body">
              Aureon Systems LLC is a technology company focused on building
              high-performance software solutions that help organizations move
              faster, operate smarter, and scale with confidence in a rapidly
              changing digital world.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <MetricCard value="AI" label="Innovation-led development" />
            <MetricCard value="Agile" label="Rapid deployment mindset" />
            <MetricCard value="Scale" label="Enterprise-ready architecture" />
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-card-border bg-background-deep/90 px-6 py-24 backdrop-blur sm:px-10 lg:px-20">
        <div className="absolute inset-0 -z-10 space-grid opacity-20" />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <StatementCard
            eyebrow="Our Mission"
            title="To help organizations scale confidently."
            body="Aureon Systems LLC is committed to delivering high-performance software solutions through advanced engineering, AI innovation, rapid deployment methodologies, and deeply personalized client engagement. Our mission is to help organizations scale confidently in a rapidly evolving digital world."
          />

          <StatementCard
            eyebrow="Our Vision"
            title="To become a globally trusted technology leader."
            body="Aureon Systems LLC envisions becoming a globally trusted, customer-centric technology leader, recognized for delivering transformative software solutions, pioneering AI innovation, and enabling enterprises to scale intelligently in the digital era through excellence, agility, and strategic partnership."
          />
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              What Drives Us
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
              Built on engineering discipline, AI-forward thinking, and client
              partnership.
            </h2>

            <p className="mt-6 leading-8 text-text-body">
              We believe successful software is more than code. It requires
              strong architecture, clear business alignment, intelligent
              automation, and a delivery approach that turns ideas into
              measurable outcomes quickly.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PillarCard
              number="01"
              title="Advanced Engineering"
              description="We design reliable, maintainable, and performance-focused systems that can support real business growth."
            />

            <PillarCard
              number="02"
              title="AI Innovation"
              description="We help clients identify practical AI opportunities that improve productivity, decision-making, and automation."
            />

            <PillarCard
              number="03"
              title="Rapid Deployment"
              description="We use focused delivery methods to reduce time-to-market while keeping quality, scalability, and clarity intact."
            />

            <PillarCard
              number="04"
              title="Client Engagement"
              description="We work closely with each organization to understand its goals, workflows, constraints, and long-term vision."
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
              Practical strategy. Fast execution. Long-term scalability.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-text-body">
              Aureon Systems LLC partners with organizations at every stage of
              digital transformation — from planning and architecture to
              deployment, optimization, and continuous improvement.
            </p>
          </div>

          <div className="space-y-5">
            <ProcessItem
              step="Discover"
              description="We begin by understanding your business goals, current systems, operational challenges, and growth requirements."
            />

            <ProcessItem
              step="Design"
              description="We define a technical path forward using scalable architecture, clean user experiences, and automation-ready workflows."
            />

            <ProcessItem
              step="Build"
              description="We develop high-performance software with a focus on reliability, usability, security, and maintainability."
            />

            <ProcessItem
              step="Scale"
              description="We support continuous improvement so your digital systems can evolve as your organization grows."
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-card-border bg-card-glass p-8 shadow-glow-lg backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 bg-galaxy-glow opacity-30" />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary-light">
                Technology With Purpose
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
                We build software that helps organizations become more agile,
                intelligent, and future-ready.
              </h2>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-button-primary px-8 py-4 text-center font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="rounded-[2rem] border border-card-border bg-card-glass p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:bg-card-hover">
      <p className="text-4xl font-bold text-primary-light">{value}</p>
      <p className="mt-3 text-sm leading-6 text-text-body">{label}</p>
    </div>
  );
}

function StatementCard({ eyebrow, title, body }) {
  return (
    <article className="rounded-[2rem] border border-card-border bg-card-glass p-8 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:bg-card-hover sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
        {title}
      </h2>

      <p className="mt-6 leading-8 text-text-body">{body}</p>
    </article>
  );
}

function PillarCard({ number, title, description }) {
  return (
    <article className="group rounded-[2rem] border border-card-border bg-card-glass p-7 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-card-border-hover hover:bg-card-hover">
      <p className="text-sm font-bold text-primary-light">{number}</p>

      <h3 className="mt-8 text-2xl font-bold text-text-title">{title}</h3>

      <p className="mt-4 leading-7 text-text-body">{description}</p>

      <div className="mt-8 h-px w-full bg-card-border">
        <div className="h-px w-0 bg-primary-light transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}

function ProcessItem({ step, description }) {
  return (
    <div className="group rounded-3xl border border-card-border bg-card-soft p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:bg-card-hover">
      <div className="flex gap-5">
        <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-primary-light shadow-glow transition duration-300 group-hover:scale-150" />

        <div>
          <h3 className="text-xl font-semibold text-text-title">{step}</h3>
          <p className="mt-2 leading-7 text-text-body">{description}</p>
        </div>
      </div>
    </div>
  );
}

function AboutBackgroundFX() {
  const stars = [
    ["8%", "18%", "2px", "0s"],
    ["16%", "48%", "1px", "1.2s"],
    ["26%", "28%", "2px", "2s"],
    ["38%", "76%", "1px", "0.8s"],
    ["52%", "20%", "2px", "1.8s"],
    ["64%", "58%", "1px", "2.4s"],
    ["74%", "30%", "2px", "1.4s"],
    ["86%", "70%", "1px", "0.6s"],
    ["92%", "24%", "2px", "2.8s"],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 star-field opacity-30" />

      <div className="absolute left-1/2 top-[22%] h-[280px] w-[120vw] -translate-x-1/2 -rotate-12 bg-galaxy-glow opacity-45 blur-sm animate-galaxy-drift" />

      <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-primary-dark/20 blur-3xl" />
      <div className="absolute right-[8%] top-[26%] h-80 w-80 rounded-full bg-primary-light/15 blur-3xl" />
      <div className="absolute bottom-[10%] left-[28%] h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />

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
