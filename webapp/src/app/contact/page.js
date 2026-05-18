import ContactForm from "@/components/ContactForm";
import Fx from "@/components/fx";
import Link from "next/link";

export const metadata = {
  title: "Contact | Aureon Systems LLC",
  description:
    "Contact Aureon Systems LLC to discuss custom software development, AI automation, cloud engineering, modernization, consulting, and scalable technology solutions.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* <ContactBackgroundFX /> */}
      {/* <Fx /> */}

      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
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

                {/* <form className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Your name" />
                    <Field
                      label="Company"
                      name="company"
                      placeholder="Company name"
                    />
                  </div>

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                  <Field
                    label="Service Interest"
                    name="service"
                    placeholder="Software, AI, cloud, modernization..."
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-text-body"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us about your project, goals, timeline, or current technical challenge."
                      className="w-full resize-none rounded-2xl border border-card-border bg-background-deep px-4 py-3 text-text-title outline-none transition duration-300 placeholder:text-text-faint focus:border-primary-light focus:shadow-glow-soft"
                    />
                  </div>

                  <a
                    href="mailto:Corporateservices@kazanc.app?subject=Project Inquiry for Aureon Systems LLC"
                    className="inline-flex w-full items-center justify-center rounded-full bg-button-primary px-8 py-4 text-center font-semibold text-button-text shadow-button transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:w-auto"
                  >
                    Email Our Team
                  </a>
                </form> */}
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

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-text-body"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-card-border bg-background-deep px-4 py-3 text-text-title outline-none transition duration-300 placeholder:text-text-faint focus:border-primary-light focus:shadow-glow-soft"
      />
    </div>
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

function ProcessLine({ title, description }) {
  return (
    <div className="relative pl-12 pb-10 last:pb-0">
      <span className="absolute left-[11px] top-1 h-3 w-3 rounded-full bg-primary-light shadow-glow" />

      <h3 className="text-xl font-semibold text-text-title">{title}</h3>

      <p className="mt-2 max-w-2xl leading-7 text-text-body">{description}</p>
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

function ContactBackgroundFX() {
  const particles = Array.from({ length: 140 }, (_, index) => {
    const left = `${(index * 37) % 100}%`;
    const top = `${(index * 53) % 100}%`;
    const size = index % 5 === 0 ? "2.5px" : index % 3 === 0 ? "2px" : "1px";
    const opacity = 0.22 + ((index * 11) % 45) / 100;
    const delay = `${(index % 18) * 0.22}s`;
    const duration = `${5.5 + (index % 9) * 0.45}s`;
    const driftX = `${index % 2 === 0 ? 12 + (index % 18) : -12 - (index % 18)}px`;
    const driftY = `${-18 - (index % 34)}px`;

    return {
      left,
      top,
      size,
      opacity,
      delay,
      duration,
      driftX,
      driftY,
    };
  });

  const microParticles = Array.from({ length: 120 }, (_, index) => {
    const left = `${(index * 29 + 13) % 100}%`;
    const top = `${(index * 41 + 7) % 100}%`;
    const opacity = 0.12 + ((index * 7) % 28) / 100;
    const delay = `${(index % 20) * 0.18}s`;
    const duration = `${7 + (index % 8) * 0.5}s`;

    return {
      left,
      top,
      opacity,
      delay,
      duration,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(69,193,244,0.1),transparent_30%),linear-gradient(180deg,rgba(0,0,6,0)_0%,rgba(1,8,30,0.55)_48%,rgba(0,0,6,0)_100%)]" />

      <div className="absolute left-[-18%] top-[10%] h-20 w-[76%] -rotate-10 opacity-[0.14]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(69,193,244,0.28)_20%,rgba(244,248,255,0.08)_50%,rgba(69,193,244,0.24)_80%,transparent_100%)] [clip-path:polygon(0_45%,8%_12%,18%_45%,28%_12%,38%_45%,48%_12%,58%_45%,68%_12%,78%_45%,88%_12%,100%_45%,100%_68%,88%_35%,78%_68%,68%_35%,58%_68%,48%_35%,38%_68%,28%_35%,18%_68%,8%_35%,0_68%)]" />
      </div>

      <div className="absolute left-[42%] top-[34%] h-24 w-[84%] rotate-12 opacity-[0.12]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(7,143,236,0.28)_20%,rgba(244,248,255,0.08)_50%,rgba(0,213,255,0.18)_80%,transparent_100%)] [clip-path:polygon(0_45%,8%_12%,18%_45%,28%_12%,38%_45%,48%_12%,58%_45%,68%_12%,78%_45%,88%_12%,100%_45%,100%_68%,88%_35%,78%_68%,68%_35%,58%_68%,48%_35%,38%_68%,28%_35%,18%_68%,8%_35%,0_68%)]" />
      </div>

      <div className="absolute left-[-22%] top-[68%] h-24 w-[92%] rotate-10 opacity-[0.1]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(69,193,244,0.22)_20%,rgba(244,248,255,0.07)_50%,rgba(7,143,236,0.22)_80%,transparent_100%)] [clip-path:polygon(0_45%,8%_12%,18%_45%,28%_12%,38%_45%,48%_12%,58%_45%,68%_12%,78%_45%,88%_12%,100%_45%,100%_68%,88%_35%,78%_68%,68%_35%,58%_68%,48%_35%,38%_68%,28%_35%,18%_68%,8%_35%,0_68%)]" />
      </div>

      {microParticles.map((particle, index) => (
        <span
          key={`micro-particle-${index}`}
          className="contact-micro-particle absolute rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {particles.map((particle, index) => (
        <span
          key={`particle-${index}`}
          className="contact-particle absolute rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            "--delay": particle.delay,
            "--duration": particle.duration,
            "--drift-x": particle.driftX,
            "--drift-y": particle.driftY,
          }}
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background to-transparent" />

      <style>
        {`
          .contact-particle {
            box-shadow:
              0 0 10px rgba(244, 248, 255, 0.85),
              0 0 22px rgba(69, 193, 244, 0.4);
            animation:
              contactParticleFloat var(--duration) ease-in-out var(--delay) infinite,
              contactParticleTwinkle 2.8s ease-in-out var(--delay) infinite;
          }

          .contact-micro-particle {
            width: 1px;
            height: 1px;
            box-shadow:
              0 0 8px rgba(244, 248, 255, 0.7),
              0 0 14px rgba(69, 193, 244, 0.25);
            animation:
              contactMicroFloat ease-in-out infinite,
              contactMicroTwinkle 2.4s ease-in-out infinite;
          }

          @keyframes contactParticleFloat {
            0% {
              transform: translate3d(0, 0, 0) scale(0.75);
            }

            50% {
              transform: translate3d(var(--drift-x), var(--drift-y), 0) scale(1.25);
            }

            100% {
              transform: translate3d(0, 0, 0) scale(0.75);
            }
          }

          @keyframes contactParticleTwinkle {
            0%,
            100% {
              filter: brightness(0.75);
            }

            50% {
              filter: brightness(2);
            }
          }

          @keyframes contactMicroFloat {
            0% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(8px, -18px, 0);
            }

            100% {
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes contactMicroTwinkle {
            0%,
            100% {
              opacity: 0.18;
              filter: brightness(0.8);
            }

            50% {
              opacity: 0.75;
              filter: brightness(1.9);
            }
          }
        `}
      </style>
    </div>
  );
}
