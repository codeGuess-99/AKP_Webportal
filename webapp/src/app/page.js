import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061b17] text-white">
      {/* <Header /> */}
      <section className=" relative px-6 pt-28 pb-24 sm:px-10 lg:px-20">
        <Image
          src="/bg-1.png"
          alt="bg"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#006a58]/40 blur-3xl" />
          <div className="absolute right-0 top-60 h-[360px] w-[360px] rounded-full bg-[#f5b618]/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-[280px] w-[280px] rounded-full bg-[#009c82]/20 blur-3xl" />
        </div>

        <div className="">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-[#f5b618]/30 bg-[#f5b618]/10 px-4 py-2 text-sm font-medium text-[#f5b618]">
              Tailor | Automate | Scale
            </p>

            <h1 className=" text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tailored IT solutions that help businesses{" "}
              <span className="text-[#f5b618]">automate</span> and scale.
            </h1>

            <p className="mt-7 text-lg leading-8 text-white">
              AkshayaPatra partners with growing businesses to design modern
              digital systems, automate workflows, and build scalable technology
              foundations for the future.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-[#f5b618] px-7 py-4 text-center font-semibold text-[#061b17] shadow-lg shadow-[#f5b618]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#ffd257]"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#f5b618] hover:text-[#f5b618]"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative border-y border-white/10 bg-[#08241f] px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5b618]">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
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

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5b618]">
              Why AkshayaPatra
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From idea to automation, we build with clarity.
            </h2>
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
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f5b618]/50 hover:bg-[#f5b618]/10"
              >
                <div className="mb-5 h-3 w-3 rounded-full bg-[#f5b618] transition duration-300 group-hover:scale-150" />
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#f5b618]/20 bg-[#f5b618] p-8 text-[#061b17] shadow-2xl shadow-[#f5b618]/10 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em]">
                Let’s Build
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                Ready to tailor, automate, and scale your IT ecosystem?
              </h2>
            </div>

            <a
              href="mailto:Corporateservices@kazanc.app"
              className="rounded-full bg-[#061b17] px-8 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#003f35]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ number, title, description }) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#f5b618]/50 hover:bg-white/[0.07]">
      <p className="text-sm font-bold text-[#f5b618]">{number}</p>
      <h3 className="mt-8 text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-white/65">{description}</p>
      <div className="mt-8 h-px w-full bg-white/10">
        <div className="h-px w-0 bg-[#f5b618] transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}
