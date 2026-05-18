import Link from "next/link";

export const metadata = {
  title: "Services | Aureon Systems LLC",
  description:
    "Explore Aureon Systems LLC service offerings, including custom software development, AI automation, cloud engineering, modernization, MVP delivery, consulting, managed services, and data analytics.",
};

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    eyebrow: "Scalable applications built around your business",
    description:
      "We design and develop web, mobile, and enterprise software tailored to each client’s operational requirements. Our engineering approach combines modern technologies, agile delivery, clean architecture, and performance-focused development to create solutions that are reliable, maintainable, and ready to scale.",
    capabilities: [
      "Web application development",
      "Mobile application development",
      "Enterprise platforms",
      "Internal business systems",
      "API-first architecture",
    ],
  },
  {
    number: "02",
    title: "AI & Intelligent Automation Solutions",
    eyebrow: "Smarter workflows powered by intelligent systems",
    description:
      "We help organizations apply artificial intelligence where it creates real business value. From machine learning integrations to generative AI experiences and intelligent process automation, we build systems that improve efficiency, decision-making, and operational speed.",
    capabilities: [
      "AI-powered applications",
      "Generative AI solutions",
      "Machine learning integrations",
      "Workflow automation",
      "Decision-support systems",
    ],
  },
  {
    number: "03",
    title: "Cloud & DevOps Engineering",
    eyebrow: "Reliable infrastructure for continuous delivery",
    description:
      "We design cloud-native environments and DevOps systems that support rapid, secure, and repeatable delivery. Our work includes infrastructure automation, CI/CD pipelines, containerization, deployment optimization, and scalable cloud operations.",
    capabilities: [
      "Cloud-native architecture",
      "Infrastructure automation",
      "CI/CD pipelines",
      "Containerized deployments",
      "Cloud operations optimization",
    ],
  },
  {
    number: "04",
    title: "Enterprise Application Modernization",
    eyebrow: "Transform legacy systems into scalable platforms",
    description:
      "We modernize aging systems by improving architecture, performance capability, and cloud readiness. Through microservices, API integrations, migration planning, and optimization, we help enterprises extend the value of existing systems while preparing for future growth.",
    capabilities: [
      "Legacy system modernization",
      "Microservices migration",
      "API integrations",
      "Cloud migration",
      "Performance optimization",
    ],
  },
  {
    number: "05",
    title: "Rapid Product Development & MVP Delivery",
    eyebrow: "Move from concept to market faster",
    description:
      "We support startups and enterprises that need to validate ideas quickly and launch with confidence. Our rapid delivery model focuses on prototyping, MVP development, iterative releases, and go-to-market acceleration without sacrificing technical quality.",
    capabilities: [
      "Rapid prototyping",
      "MVP development",
      "Product discovery",
      "Iterative delivery",
      "Launch acceleration",
    ],
  },
  {
    number: "06",
    title: "Technology Consulting & Digital Transformation",
    eyebrow: "Strategic guidance for intelligent digital growth",
    description:
      "We work with leadership teams to define practical technology strategies aligned with business goals. Our consulting services focus on software architecture, AI adoption, operational scalability, technology modernization, and digital innovation initiatives.",
    capabilities: [
      "Software architecture strategy",
      "AI adoption planning",
      "Digital transformation roadmaps",
      "Technology modernization",
      "Operational scalability consulting",
    ],
  },
  {
    number: "07",
    title: "Managed Technology Services",
    eyebrow: "Ongoing support for mission-critical systems",
    description:
      "We provide continuous application and infrastructure support so organizations can maintain system reliability, security, and performance. Our managed services include monitoring, maintenance, updates, infrastructure management, and operational support.",
    capabilities: [
      "Application support",
      "System monitoring",
      "Infrastructure management",
      "Security updates",
      "Operational maintenance",
    ],
  },
  {
    number: "08",
    title: "Data Engineering & Analytics",
    eyebrow: "Turn information into business intelligence",
    description:
      "We build data platforms that help organizations make faster and more informed decisions. Our data engineering services include pipelines, analytics platforms, business intelligence systems, real-time reporting, and data-driven operational insights.",
    capabilities: [
      "Data pipelines",
      "Analytics platforms",
      "Business intelligence",
      "Real-time reporting",
      "Data-driven decision systems",
    ],
  },
];

const deliveryPrinciples = [
  "Business-first discovery",
  "Architecture-led execution",
  "Rapid deployment cycles",
  "AI-ready foundations",
  "Scalable operations",
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      <ServicesBackgroundFX />

      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Core Service Offerings
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-text-title sm:text-6xl lg:text-7xl">
              Software, AI, cloud, and data services built for{" "}
              <span className="text-primary-light drop-shadow-[0_0_18px_rgba(69,193,244,0.65)]">
                intelligent scale
              </span>
              .
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-text-body">
              Aureon Systems LLC helps organizations design, modernize, and
              operate high-performance digital systems. Our services combine
              advanced engineering, AI innovation, rapid deployment, and
              personalized client engagement to support confident growth in the
              digital era.
            </p>
          </div>

          <div className="mt-14 border-y border-card-border py-6">
            <div className="grid gap-5 text-sm text-text-muted md:grid-cols-5">
              {deliveryPrinciples.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-primary-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TableOfContents />

      <section className="relative z-10 px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="divide-y divide-card-border">
            {services.map((service, index) => (
              <ServiceSection
                key={service.number}
                service={service}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-card-border bg-background-deep/80 px-6 py-24 backdrop-blur sm:px-10 lg:px-20">
        <div className="absolute inset-0 -z-10 space-grid opacity-20" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Delivery Model
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
              Built to move fast without creating fragile systems.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-text-body">
              Our work is structured around clarity, speed, and long-term
              resilience. We help teams move from strategy to execution while
              keeping architecture, security, performance, and scalability at
              the center of every decision.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-card-border" />

            <ProcessLine
              title="Understand the business"
              description="We begin with goals, constraints, users, workflows, and measurable outcomes."
            />

            <ProcessLine
              title="Engineer the foundation"
              description="We design systems that are scalable, integration-ready, and maintainable."
            />

            <ProcessLine
              title="Deploy with momentum"
              description="We use rapid delivery cycles to ship value quickly and improve continuously."
            />

            <ProcessLine
              title="Optimize for scale"
              description="We monitor, refine, automate, and expand systems as business needs evolve."
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Engagement Areas
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
              From product launches to enterprise transformation.
            </h2>
          </div>

          <div className="mt-14 overflow-hidden border-y border-card-border">
            <CapabilityRow
              label="For startups"
              text="Prototype faster, launch MVPs, validate product ideas, and establish scalable technical foundations from day one."
            />

            <CapabilityRow
              label="For growing businesses"
              text="Automate operations, connect systems, improve reporting, and create software that supports expanding teams."
            />

            <CapabilityRow
              label="For enterprises"
              text="Modernize legacy platforms, improve cloud operations, adopt AI responsibly, and strengthen digital resilience."
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 sm:px-10 lg:px-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-card-border bg-card-glass p-8 shadow-glow-lg backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 bg-galaxy-glow opacity-30" />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary-light">
                Build What Comes Next
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
                Let’s design software, automation, and cloud systems that help
                your organization scale intelligently.
              </h2>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-button-primary px-8 py-4 text-center font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function TableOfContents() {
  return (
    <section className="relative z-10 px-6 pb-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl border-y border-card-border py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
            Table of Contents
          </p>
        </div>

        <nav className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.number}
              href={`#service-${service.number}`}
              className="group border-l border-card-border pl-4 transition duration-300 hover:border-primary-light"
            >
              <span className="block text-xs font-semibold text-primary-light">
                {service.number}
              </span>

              <span className="mt-1 block text-sm leading-6 text-text-muted transition duration-300 group-hover:text-text-title">
                {service.title}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function ServiceSection({ service, reverse }) {
  return (
    <section
      id={`service-${service.number}`}
      className="group scroll-mt-32 py-14 first:pt-0 last:pb-0"
    >
      <div
        className={`grid gap-10 lg:grid-cols-[0.75fr_1.25fr] ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={reverse ? "lg:col-start-2" : ""}>
          <div className="flex items-baseline gap-5">
            <span className="text-6xl font-bold leading-none text-primary-light/25 transition duration-300 group-hover:text-primary-light/45">
              {service.number}
            </span>

            <div className="h-px flex-1 bg-card-border transition duration-300 group-hover:bg-card-border-hover" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
            {service.eyebrow}
          </p>
        </div>

        <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
          <h2 className="text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
            {service.title}
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-text-body">
            {service.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-l border-card-border py-2 pl-4 text-sm text-text-muted transition duration-300 group-hover:border-primary-light/50"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light shadow-glow-soft" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessLine({ title, description }) {
  return (
    <div className="relative pl-12 pb-10 last:pb-0">
      <span className="absolute left-[11px] top-1 h-3 w-3 rounded-full bg-primary-light shadow-glow" />

      <h3 className="text-xl font-semibold text-text-title">{title}</h3>

      <p className="mt-2 max-w-2xl leading-7 text-text-body">{description}</p>
    </div>
  );
}

function CapabilityRow({ label, text }) {
  return (
    <div className="grid gap-4 border-b border-card-border py-7 last:border-b-0 md:grid-cols-[260px_1fr] md:items-start">
      <p className="font-semibold uppercase tracking-[0.25em] text-primary-light">
        {label}
      </p>

      <p className="max-w-4xl leading-8 text-text-body">{text}</p>
    </div>
  );
}

function ServicesBackgroundFX() {
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

      <div className="absolute left-1/2 top-[18%] h-[280px] w-[120vw] -translate-x-1/2 -rotate-12 bg-galaxy-glow opacity-45 blur-sm animate-galaxy-drift" />

      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-primary-dark/20 blur-3xl" />
      <div className="absolute right-[8%] top-[28%] h-80 w-80 rounded-full bg-primary-light/15 blur-3xl" />
      <div className="absolute bottom-[10%] left-[30%] h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />

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
