import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Privacy Policy — Haywood Technologies",
  description: "Haywood Technologies privacy policy — how we collect, use, and protect your personal information.",
};

const sections = [
  "Information We Collect",
  "How We Use Your Information",
  "Information Sharing",
  "Cookies & Analytics",
  "Data Retention",
  "Security",
  "Your Rights",
  "Third-Party Services",
  "Changes to This Policy",
  "Contact Us",
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 24, 2026";
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-36 pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-mono text-secondary mb-4">/ legal</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* TOC */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
                <nav className="space-y-2">
                  {sections.map((s, i) => (
                    <a key={s} href={`#section-${i + 1}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      {s}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-3 prose prose-neutral max-w-none space-y-12">
              <div className="p-5 rounded-sm border border-border bg-muted/30 text-sm text-muted-foreground leading-relaxed">
                This Privacy Policy explains how Haywood Technologies (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects information about visitors to our website (haywood-tech.com) and clients who engage our services. We are committed to protecting your privacy and handling your data responsibly.
              </div>

              <Section id="section-1" title="1. Information We Collect">
                <p>We collect information in the following ways:</p>
                <SubList items={[
                  { title: "Contact Information", body: "When you contact us via email, phone, or our contact page, we collect your name, email address, phone number, company name, and the content of your message." },
                  { title: "Usage Data", body: "We collect anonymized data about how visitors use our website — pages visited, time on site, and referral sources — through Vercel Analytics. This data does not identify individual users." },
                  { title: "Communications", body: "We retain email and written communications between you and Haywood Technologies for operational and legal purposes." },
                  { title: "Client Project Data", body: "In the course of delivering services, we may process business data, system credentials (stored in encrypted vaults), and project-related files provided by clients." },
                ]} />
                <p>We do not collect payment card numbers directly. All billing is processed through third-party providers who are PCI-DSS compliant.</p>
              </Section>

              <Section id="section-2" title="2. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Respond to your enquiries and provide requested services</li>
                  <li>Send project updates, invoices, and service-related communications</li>
                  <li>Improve our website and understand how it is used</li>
                  <li>Comply with legal obligations and enforce our agreements</li>
                  <li>Protect the security of our systems and detect fraudulent activity</li>
                </ul>
                <p className="mt-4">We do not sell, rent, or trade your personal information to third parties for marketing purposes. We do not send unsolicited marketing emails.</p>
              </Section>

              <Section id="section-3" title="3. Information Sharing">
                <p>We share your information only in the following limited circumstances:</p>
                <SubList items={[
                  { title: "Service Providers", body: "We use trusted third-party tools to operate our business (e.g., email hosting, project management, cloud infrastructure). These providers are contractually bound to protect your data and use it only to deliver services on our behalf." },
                  { title: "Legal Requirements", body: "We may disclose information when required by law, court order, or governmental authority, or to protect the rights, property, or safety of Haywood Technologies, our clients, or the public." },
                  { title: "Business Transfers", body: "In the event of a merger, acquisition, or sale of all or part of our business, client data may be transferred as part of that transaction. We will notify affected clients before any such transfer." },
                ]} />
              </Section>

              <Section id="section-4" title="4. Cookies & Analytics">
                <p>Our website uses the following types of cookies and tracking technologies:</p>
                <SubList items={[
                  { title: "Strictly Necessary Cookies", body: "Required for the website to function. These cannot be disabled." },
                  { title: "Vercel Analytics", body: "We use Vercel Analytics, which collects anonymized, aggregated usage data. No personally identifiable information is collected, and no cookies are set by this tool. Data is processed on Vercel's infrastructure." },
                ]} />
                <p>You can disable cookies in your browser settings. Disabling cookies may affect some website functionality.</p>
              </Section>

              <Section id="section-5" title="5. Data Retention">
                <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Enquiry data:</strong> 2 years from last contact, unless a client relationship develops</li>
                  <li><strong>Client project data:</strong> 7 years from project completion (for legal and financial compliance)</li>
                  <li><strong>Email communications:</strong> 5 years</li>
                  <li><strong>Analytics data:</strong> Retained per Vercel's data retention policy (90 days for raw data)</li>
                </ul>
                <p className="mt-4">You may request deletion of your personal data at any time. We will comply within 30 days, subject to any legal retention obligations.</p>
              </Section>

              <Section id="section-6" title="6. Security">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All data transmitted to and from our website is encrypted using TLS 1.2 or higher</li>
                  <li>Client credentials and sensitive data are stored in encrypted vaults (never in plaintext)</li>
                  <li>Access to client data is restricted to team members who require it for service delivery</li>
                  <li>We conduct regular security reviews of our systems and processes</li>
                </ul>
                <p className="mt-4">No method of transmission over the internet is 100% secure. While we take all reasonable precautions, we cannot guarantee absolute security.</p>
              </Section>

              <Section id="section-7" title="7. Your Rights">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <SubList items={[
                  { title: "Access", body: "The right to request a copy of the personal data we hold about you." },
                  { title: "Rectification", body: "The right to request correction of inaccurate or incomplete data." },
                  { title: "Erasure", body: "The right to request deletion of your personal data, subject to legal retention requirements." },
                  { title: "Portability", body: "The right to receive your personal data in a structured, machine-readable format." },
                  { title: "Objection", body: "The right to object to processing of your personal data for direct marketing or where we are relying on legitimate interests." },
                  { title: "Restriction", body: "The right to request that we restrict processing of your personal data in certain circumstances." },
                ]} />
                <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@haywood-tech.com" className="text-primary hover:underline">privacy@haywood-tech.com</a>. We will respond within 30 days.</p>
              </Section>

              <Section id="section-8" title="8. Third-Party Services">
                <p>Our website and services may contain links to third-party websites or integrate with third-party services. This policy does not cover those third parties. We encourage you to review the privacy policies of any third-party services you use in connection with our services.</p>
                <p className="mt-4">Key third-party services we use include Vercel (hosting and analytics) and Google Workspace (email and productivity). Each of these providers maintains their own GDPR-compliant privacy practices.</p>
              </Section>

              <Section id="section-9" title="9. Changes to This Policy">
                <p>We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. For material changes, we will notify active clients by email. Your continued use of our website after any changes constitutes acceptance of the updated policy.</p>
              </Section>

              <Section id="section-10" title="10. Contact Us">
                <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:</p>
                <div className="mt-4 p-5 rounded-sm border border-border bg-muted/20">
                  <p className="font-semibold text-foreground">Haywood Technologies</p>
                  <p className="text-muted-foreground mt-1">Email: <a href="mailto:privacy@haywood-tech.com" className="text-primary hover:underline">privacy@haywood-tech.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+923279401611" className="text-primary hover:underline">+92 327 940 1611</a></p>
                  <p className="text-muted-foreground">Location: Lahore, Pakistan</p>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-32">
      <h2 className="text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function SubList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="space-y-3 my-4">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
          <span><strong className="text-foreground">{item.title}:</strong> {item.body}</span>
        </li>
      ))}
    </ul>
  );
}
