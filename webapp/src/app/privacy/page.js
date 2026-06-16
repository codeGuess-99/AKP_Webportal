import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Aureon Systems LLC",
  description:
    "Privacy Policy for Aureon Systems LLC, including information collection, cookies, customer interest tracking, data security, retention, privacy rights, and contact details.",
};

const effectiveDate = "June 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-text">
      <section className="relative z-10 px-6 pt-32 pb-14 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
              Privacy Policy
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-text-title sm:text-6xl lg:text-7xl">
              How Aureon Systems LLC protects your{" "}
              <span className="text-primary-light drop-shadow-[0_0_18px_rgba(69,193,244,0.65)]">
                privacy and data
              </span>
              .
            </h1>

            <div className="mt-8 border-l border-card-border pl-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-light">
                Effective Date
              </p>
              <p className="mt-2 text-text-muted">{effectiveDate}</p>
            </div>

            <div className="mt-8 max-w-3xl space-y-5 leading-8 text-text-body">
              <p>
                Aureon Systems LLC (&quot;Aureon Systems,&quot; &quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                committed to protecting the personal information you share with
                us through our website,{" "}
                <span className="text-primary-light">
                  https://www.kazanc.app
                </span>{" "}
                (&quot;Website&quot;).
              </p>

              <p>
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our Website, register
                for an account, communicate with us, or use our software and
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="border-y border-card-border py-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              Contents
            </p>

            <nav className="grid gap-x-10 gap-y-4 text-sm text-text-muted sm:grid-cols-2 lg:grid-cols-3">
              <PolicyNavLink
                href="#information"
                label="Information We Collect"
              />
              <PolicyNavLink href="#cookies" label="Cookies and Technologies" />
              <PolicyNavLink
                href="#interest"
                label="Customer Interest Tracking"
              />
              <PolicyNavLink href="#use" label="How We Use Information" />
              <PolicyNavLink href="#sharing" label="Sharing of Information" />
              <PolicyNavLink href="#security" label="Data Security" />
              <PolicyNavLink href="#retention" label="Data Retention" />
              <PolicyNavLink href="#rights" label="Your Privacy Rights" />
              <PolicyNavLink href="#children" label="Children’s Privacy" />
              <PolicyNavLink href="#third-party" label="Third-Party Websites" />
              <PolicyNavLink href="#changes" label="Changes to This Policy" />
              <PolicyNavLink href="#contact" label="Contact Us" />
            </nav>
          </div>

          <div className="mt-10 space-y-8">
            <PolicySection
              id="information"
              number="01"
              title="Information We Collect"
            >
              <SubSection title="Personal Information">
                <p>
                  We may collect personal information that you voluntarily
                  provide, including:
                </p>

                <PolicyList
                  items={[
                    "Name",
                    "Company name",
                    "Email address",
                    "Phone number",
                    "Job title",
                    "Business information",
                    "Account registration information",
                    "Information submitted through contact forms",
                    "Information shared through live chat conversations",
                  ]}
                />
              </SubSection>

              <SubSection title="Account Information">
                <p>When you create an account, we may collect:</p>

                <PolicyList
                  items={[
                    "Username",
                    "Login credentials",
                    "Profile information",
                    "Service preferences",
                    "Subscription and account management details",
                  ]}
                />
              </SubSection>

              <SubSection title="Automatically Collected Information">
                <p>When you visit our Website, we may automatically collect:</p>

                <PolicyList
                  items={[
                    "IP address",
                    "Browser type and version",
                    "Device information",
                    "Operating system",
                    "Date and time of visits",
                    "Pages viewed",
                    "Referral URLs",
                    "Website interaction data",
                  ]}
                />
              </SubSection>
            </PolicySection>

            <PolicySection
              id="cookies"
              number="02"
              title="Cookies and Similar Technologies"
            >
              <p>
                We use cookies and similar technologies to improve user
                experience, maintain website functionality, analyze website
                performance, and understand visitor interests.
              </p>

              <SubSection title="Essential Cookies">
                <p>
                  These cookies are necessary for the operation and security of
                  our Website.
                </p>
              </SubSection>

              <SubSection title="Functional Cookies">
                <p>
                  These cookies remember user preferences and improve website
                  usability.
                </p>
              </SubSection>

              <SubSection title="Analytics Cookies">
                <p>
                  These cookies help us understand how visitors interact with
                  our Website, including:
                </p>

                <PolicyList
                  items={[
                    "Pages visited",
                    "Session duration",
                    "Navigation behavior",
                    "Website performance metrics",
                  ]}
                />
              </SubSection>

              <SubSection title="Marketing and Lead Identification Technologies">
                <p>
                  We may use technologies that help us understand visitor
                  engagement and business interest in our services. These
                  technologies may collect information regarding:
                </p>

                <PolicyList
                  items={[
                    "Form submissions",
                    "Pages visited",
                    "Service inquiries",
                    "Engagement with marketing content",
                    "Interactions through live chat",
                  ]}
                />
              </SubSection>

              <p>
                You may control cookie preferences through your browser
                settings. Disabling certain cookies may affect Website
                functionality.
              </p>
            </PolicySection>

            <PolicySection
              id="interest"
              number="03"
              title="How We Track Customer Interest"
            >
              <p>
                To better understand customer needs and improve our services, we
                may track interactions with our Website and communications.
              </p>

              <p>This may include:</p>

              <PolicyList
                items={[
                  "Contact form submissions",
                  "Service inquiries",
                  "Account registrations",
                  "Live chat interactions",
                  "Website engagement patterns",
                  "Requests for demonstrations or consultations",
                  "Customer support interactions",
                ]}
              />

              <p>The information collected helps us:</p>

              <PolicyList
                items={[
                  "Respond to inquiries",
                  "Provide requested services",
                  "Improve user experience",
                  "Identify business opportunities",
                  "Enhance our products and services",
                ]}
              />
            </PolicySection>

            <PolicySection id="use" number="04" title="How We Use Information">
              <p>We may use collected information to:</p>

              <PolicyList
                items={[
                  "Provide and maintain our services",
                  "Create and manage user accounts",
                  "Respond to inquiries and support requests",
                  "Communicate regarding services and updates",
                  "Improve Website functionality",
                  "Analyze Website usage",
                  "Detect fraud and security threats",
                  "Comply with legal obligations",
                  "Market and promote our services where permitted by law",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="sharing"
              number="05"
              title="Sharing of Information"
            >
              <p className="font-semibold text-text-title">
                We do not sell personal information.
              </p>

              <p>We may share information with:</p>

              <PolicyList
                items={[
                  "Service providers supporting our operations",
                  "Hosting and cloud service providers",
                  "Customer support providers",
                  "Analytics providers",
                  "Legal authorities when required by law",
                  "Successors in connection with a merger, acquisition, or business transfer",
                ]}
              />

              <p>
                All third parties are expected to maintain appropriate security
                measures and use information only for authorized purposes.
              </p>
            </PolicySection>

            <PolicySection id="security" number="06" title="Data Security">
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards designed to protect personal information from
                unauthorized access, disclosure, alteration, or destruction.
              </p>

              <p>
                However, no method of transmission or storage is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection id="retention" number="07" title="Data Retention">
              <p>
                We retain personal information only for as long as necessary to:
              </p>

              <PolicyList
                items={[
                  "Provide services",
                  "Maintain business records",
                  "Resolve disputes",
                  "Enforce agreements",
                  "Comply with legal obligations",
                ]}
              />
            </PolicySection>

            <PolicySection id="rights" number="08" title="Your Privacy Rights">
              <p>
                Depending on your location, you may have rights regarding your
                personal information, including:
              </p>

              <PolicyList
                items={[
                  "Access to personal data",
                  "Correction of inaccurate information",
                  "Deletion of personal information",
                  "Restriction of processing",
                  "Objection to certain processing activities",
                  "Withdrawal of consent where applicable",
                ]}
              />

              <p>
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:corporateservices@kazanc.app"
                  className="text-primary-light transition hover:text-text-title"
                >
                  corporateservices@kazanc.app
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection id="children" number="09" title="Children’s Privacy">
              <p>
                Our Website and services are not directed toward children under
                the age of 13. We do not knowingly collect personal information
                from children.
              </p>
            </PolicySection>

            <PolicySection
              id="third-party"
              number="10"
              title="Third-Party Websites"
            >
              <p>
                Our Website may contain links to third-party websites. We are
                not responsible for the privacy practices of those websites.
              </p>

              <p>
                We encourage users to review the privacy policies of any
                third-party sites they visit.
              </p>
            </PolicySection>

            <PolicySection
              id="changes"
              number="11"
              title="Changes to This Privacy Policy"
            >
              <p>
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page with an updated Effective Date.
              </p>

              <p>
                Continued use of the Website after changes are posted
                constitutes acceptance of the updated Privacy Policy.
              </p>
            </PolicySection>

            <PolicySection id="contact" number="12" title="Contact Us">
              <p>
                If you have questions regarding this Privacy Policy or our data
                practices, please contact:
              </p>

              <div className="mt-8 border-y border-card-border py-6">
                <div className="grid gap-6 text-sm text-text-muted sm:grid-cols-2">
                  <ContactLine label="Company" value="Aureon Systems LLC" />
                  <ContactLine
                    label="Location"
                    value="North Carolina, United States"
                  />
                  <ContactLine label="Website" value="https://www.kazanc.app" />
                  <ContactLine
                    label="Email"
                    value="corporateservices@kazanc.app"
                  />
                </div>
              </div>
            </PolicySection>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicyNavLink({ href, label }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center text-text-muted transition duration-300 hover:translate-x-1 hover:text-primary-light"
    >
      <span className="mr-3 text-text-faint transition group-hover:text-primary-light">
        /
      </span>
      {label}
    </a>
  );
}

function PolicySection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-y border-card-border bg-background-deep/45 px-5 py-8 backdrop-blur-sm sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex items-baseline gap-5">
        <span className="text-4xl font-bold leading-none text-primary-light/25 sm:text-5xl">
          {number}
        </span>

        <div className="h-px flex-1 bg-card-border" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 leading-8 text-text-body">{children}</div>
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="border-l border-card-border pl-5">
      <h3 className="text-xl font-semibold text-text-title">{title}</h3>
      <div className="mt-3 space-y-4 text-text-body">{children}</div>
    </div>
  );
}

function PolicyList({ items }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-text-muted">
          <span className="mt-3 h-px w-6 shrink-0 bg-primary-light" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactLine({ label, value }) {
  return (
    <div className="border-l border-card-border pl-4">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-light">
        {label}
      </p>
      <p className="mt-2 break-words text-text-title">{value}</p>
    </div>
  );
}
