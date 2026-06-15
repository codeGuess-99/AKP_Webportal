import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Aureon Systems LLC",
  description:
    "Contact Aureon Systems LLC to discuss custom software development, AI automation, cloud engineering, modernization, consulting, and scalable technology solutions.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-text">
      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Contact Aureon Systems LLC
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-text-title sm:text-6xl lg:text-7xl">
              Let’s build the next layer of your{" "}
              <span className="text-primary-light drop-shadow-[0_0_18px_rgba(69,193,244,0.65)]">
                digital future
              </span>
              .
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-text-body">
              Whether you are planning a new software product, modernizing an
              existing system, exploring AI automation, or scaling cloud
              infrastructure, our team is ready to help you move from idea to
              execution with clarity and speed.
            </p>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="border-y border-card-border py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
                Get In Touch
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
                Start with a conversation.
              </h2>

              <p className="mt-6 leading-8 text-text-body">
                Tell us what you are building, improving, automating, or
                scaling. We will help clarify the technical path, identify the
                right starting point, and outline how Aureon Systems LLC can
                support your goals.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              <ContactDetail
                label="Phone"
                value="+1 919-914-1293"
                // href="tel:9199141293"
              />

              <ContactDetail
                label="Email"
                value="corporateservices@kazanc.app"
                // href="mailto:Corporateservices@kazanc.app"
              />

              <ContactDetail
                label="Location"
                value="1121, Lowland Street, Apex, NC - 27523"
              />
            </div>

            <div className="mt-12 border-t border-card-border pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
                What To Include
              </p>

              <ul className="mt-6 space-y-4 text-text-muted">
                <li className="flex gap-3">
                  <span className="mt-3 h-px w-6 shrink-0 bg-primary-light" />
                  <span>Your business goal or technical challenge</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-3 h-px w-6 shrink-0 bg-primary-light" />
                  <span>The type of solution you are considering</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-3 h-px w-6 shrink-0 bg-primary-light" />
                  <span>Your preferred timeline or launch target</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-3 h-px w-6 shrink-0 bg-primary-light" />
                  <span>
                    Any existing systems, tools, or integrations involved
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative" id="contact">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary-light/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-card-border bg-card-glass p-6 shadow-card backdrop-blur-xl sm:p-8">
              <div className="absolute inset-0 bg-galaxy-glow opacity-20" />

              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
                  Project Inquiry
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
                  Send us a brief message.
                </h2>

                <p className="mt-4 leading-7 text-text-body">
                  This form is styled for the page. Connect it later to your
                  preferred backend, CRM, or email service.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 border-y border-card-border bg-background-deep/80 px-6 py-24 backdrop-blur sm:px-10 lg:px-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-12%] top-12 h-32 w-[70%] -rotate-6 opacity-[0.08]">
            <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(69,193,244,0.35)_28%,rgba(244,248,255,0.08)_50%,rgba(7,143,236,0.28)_72%,transparent_100%)] [clip-path:polygon(0_45%,10%_15%,20%_45%,30%_15%,40%_45%,50%_15%,60%_45%,70%_15%,80%_45%,90%_15%,100%_45%,100%_68%,90%_38%,80%_68%,70%_38%,60%_68%,50%_38%,40%_68%,30%_38%,20%_68%,10%_38%,0_68%)]" />
          </div>

          <div className="absolute right-[-18%] bottom-16 h-32 w-[80%] rotate-6 opacity-[0.07]">
            <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(7,143,236,0.32)_28%,rgba(244,248,255,0.08)_50%,rgba(69,193,244,0.28)_72%,transparent_100%)] [clip-path:polygon(0_45%,10%_15%,20%_45%,30%_15%,40%_45%,50%_15%,60%_45%,70%_15%,80%_45%,90%_15%,100%_45%,100%_68%,90%_38%,80%_68%,70%_38%,60%_68%,50%_38%,40%_68%,30%_38%,20%_68%,10%_38%,0_68%)]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
                How We Engage
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
                A clear path from first conversation to execution.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-text-body">
                Every engagement is structured to reduce ambiguity, clarify
                technical direction, and move your organization toward
                measurable outcomes.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-card-border to-transparent md:block" />

              <div className="space-y-0 md:pl-10">
                <EngagementPanel
                  number="01"
                  title="Initial Discussion"
                  description="We learn about your goals, current systems, users, timeline, and the business outcome you want to achieve."
                />

                <EngagementPanel
                  number="02"
                  title="Technical Direction"
                  description="We identify the right path forward, whether that involves custom software, modernization, automation, cloud, AI, or data systems."
                />

                <EngagementPanel
                  number="03"
                  title="Scope & Roadmap"
                  description="We define priorities, delivery milestones, technical requirements, and the practical steps needed to move from idea to implementation."
                />

                <EngagementPanel
                  number="04"
                  title="Execution Partnership"
                  description="We move into design, development, deployment, and continuous improvement with speed, clarity, and accountability."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl border-y border-card-border py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary-light">
                Ready When You Are
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-text-title sm:text-5xl">
                Bring us your idea, system challenge, or transformation goal.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex rounded-full bg-button-primary px-8 py-4 text-center font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              Contact Aureon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactDetail({ label, value, href }) {
  const content = (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
        {label}
      </p>
      <p className="mt-2 text-lg leading-7 text-text-title">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block border-l border-card-border pl-6 transition duration-300 hover:border-primary-light"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="border-l border-card-border pl-6 hover:border-primary-light">
      {content}
    </div>
  );
}

function EngagementPanel({ number, title, description }) {
  return (
    <div className="group relative border-b border-card-border py-8 first:border-t md:py-10">
      <div className="absolute -left-[47px] top-10 hidden h-4 w-4 rounded-full border border-primary-light bg-background-deep shadow-glow md:block" />

      <div className="grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
        <div>
          <p className="text-5xl font-bold leading-none text-primary-light/25 transition duration-300 group-hover:text-primary-light/45">
            {number}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-text-title">
            {title}
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-text-body">
            {description}
          </p>

          <div className="mt-6 h-px w-full bg-card-border">
            <div className="h-px w-0 bg-primary-light transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
