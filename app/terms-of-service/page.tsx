import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Terms of Service — Haywood Technologies",
  description: "Terms of service governing the use of Haywood Technologies website and professional services.",
};

const sections = [
  "Acceptance of Terms",
  "Services",
  "Client Responsibilities",
  "Fees & Payment",
  "Intellectual Property",
  "Confidentiality",
  "Warranties & Disclaimers",
  "Limitation of Liability",
  "Indemnification",
  "Termination",
  "Governing Law",
  "Changes to Terms",
  "Contact",
];

export default function TermsOfServicePage() {
  const lastUpdated = "September 24, 2026";
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-36 pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-mono text-secondary mb-4">/ legal</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
                <nav className="space-y-2">
                  {sections.map((s, i) => (
                    <a key={s} href={`#tos-${i + 1}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      {s}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-12">
              <div className="p-5 rounded-sm border border-border bg-muted/30 text-sm text-muted-foreground leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your use of the Haywood Technologies website and the professional services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms. Please read them carefully. If you do not agree, do not use our website or services.
              </div>

              <TSection id="tos-1" title="1. Acceptance of Terms">
                <p>By using haywood-tech.com or engaging Haywood Technologies for professional services, you confirm that you are at least 18 years old, have the legal authority to enter into binding contracts, and agree to these Terms on behalf of yourself or the organisation you represent.</p>
              </TSection>

              <TSection id="tos-2" title="2. Services">
                <p>Haywood Technologies provides IT consultancy services including, but not limited to, software development, AI engineering, cloud and DevOps, managed IT services, web development, and SaaS product development.</p>
                <p className="mt-4">The specific scope, deliverables, timeline, and pricing for each engagement are defined in a separate Statement of Work (&quot;SOW&quot;) or project agreement signed by both parties. In the event of any conflict between these Terms and an SOW, the SOW shall prevail.</p>
                <p className="mt-4">We reserve the right to decline any project or terminate a client relationship that conflicts with our values, capabilities, or legal obligations.</p>
              </TSection>

              <TSection id="tos-3" title="3. Client Responsibilities">
                <p>To enable us to deliver services effectively, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Provide timely access to systems, personnel, and information required for the project</li>
                  <li>Designate a primary point of contact with authority to make project decisions</li>
                  <li>Review and provide feedback on deliverables within agreed timescales</li>
                  <li>Ensure that any materials, data, or content provided to us do not infringe third-party rights</li>
                  <li>Keep your login credentials and account information secure</li>
                </ul>
                <p className="mt-4">Delays caused by failure to meet these responsibilities may result in timeline adjustments or additional charges, which will be communicated to you in advance.</p>
              </TSection>

              <TSection id="tos-4" title="4. Fees & Payment">
                <p>All fees are specified in the applicable SOW or invoice. Unless otherwise agreed:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Fixed-price projects require a deposit (typically 40–50%) before work begins</li>
                  <li>Milestone-based payments are due upon milestone acceptance</li>
                  <li>Retainer and managed services fees are invoiced monthly in advance</li>
                  <li>Invoices are payable within 14 days of issuance</li>
                  <li>Late payments incur interest at 2% per month on the outstanding balance</li>
                </ul>
                <p className="mt-4">All prices are exclusive of applicable taxes (VAT, GST, or equivalent), which will be added where required by law.</p>
                <p className="mt-4">Out-of-scope requests will be quoted separately and require written approval before work begins.</p>
              </TSection>

              <TSection id="tos-5" title="5. Intellectual Property">
                <p>Upon receipt of full payment for a project, Haywood Technologies assigns to the client all intellectual property rights in the custom deliverables created specifically for that client under the applicable SOW.</p>
                <p className="mt-4">The following are explicitly excluded from this assignment and remain the property of Haywood Technologies:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Our proprietary tools, frameworks, libraries, and methodologies used in delivering the services</li>
                  <li>Pre-existing IP, including open-source components (which are subject to their own licences)</li>
                  <li>General knowledge, skills, and experience gained during the engagement</li>
                </ul>
                <p className="mt-4">We retain the right to reference the existence of our work together in our portfolio and marketing materials, unless you request otherwise in writing.</p>
              </TSection>

              <TSection id="tos-6" title="6. Confidentiality">
                <p>Each party agrees to keep confidential all non-public information received from the other party in connection with the services (&quot;Confidential Information&quot;). This includes business strategies, technical architecture, source code, pricing, and client data.</p>
                <p className="mt-4">Confidential Information may only be disclosed to employees or contractors who need to know it to perform the services, and who are bound by equivalent confidentiality obligations.</p>
                <p className="mt-4">These obligations do not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was already known to the receiving party; (c) is required to be disclosed by law or regulation.</p>
                <p className="mt-4">Confidentiality obligations survive termination of any engagement for a period of five (5) years.</p>
              </TSection>

              <TSection id="tos-7" title="7. Warranties & Disclaimers">
                <p>Haywood Technologies warrants that services will be performed with reasonable skill and care, and that deliverables will materially conform to the specifications agreed in the applicable SOW for a period of 30 days following delivery (&quot;Warranty Period&quot;).</p>
                <p className="mt-4">Outside the Warranty Period, services and deliverables are provided &quot;as is&quot;. To the maximum extent permitted by law, we disclaim all other warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                <p className="mt-4">We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
              </TSection>

              <TSection id="tos-8" title="8. Limitation of Liability">
                <p>To the maximum extent permitted by applicable law, Haywood Technologies&apos; total liability for any claim arising out of or related to these Terms or our services shall not exceed the total fees paid by you in the three (3) months preceding the claim.</p>
                <p className="mt-4">In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunity, even if advised of the possibility of such damages.</p>
              </TSection>

              <TSection id="tos-9" title="9. Indemnification">
                <p>You agree to indemnify, defend, and hold harmless Haywood Technologies and its officers, directors, employees, and contractors from any claims, damages, losses, and expenses (including reasonable legal fees) arising from: (a) your use of our services in violation of these Terms; (b) your breach of any representation or warranty; (c) any content or materials you provide that infringe third-party rights.</p>
              </TSection>

              <TSection id="tos-10" title="10. Termination">
                <p>Either party may terminate an engagement by providing written notice as specified in the applicable SOW (typically 30 days).</p>
                <p className="mt-4">Upon termination: (a) all outstanding invoices for work completed become immediately due; (b) each party shall return or destroy the other&apos;s Confidential Information; (c) IP rights in completed and paid-for work transfer to the client.</p>
                <p className="mt-4">We may terminate immediately if you breach a material term of these Terms or an SOW and fail to remedy the breach within 14 days of written notice.</p>
              </TSection>

              <TSection id="tos-11" title="11. Governing Law">
                <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan, unless otherwise agreed in writing.</p>
                <p className="mt-4">For clients located in the European Union or United Kingdom, the parties agree that EU or UK law (respectively) may additionally apply to data protection matters as required by GDPR or UK GDPR.</p>
              </TSection>

              <TSection id="tos-12" title="12. Changes to Terms">
                <p>We reserve the right to update these Terms at any time. We will post the updated version on our website with a revised &quot;Last updated&quot; date. For material changes, we will notify active clients by email at least 14 days in advance. Continued use of our services after the effective date constitutes acceptance of the updated Terms.</p>
              </TSection>

              <TSection id="tos-13" title="13. Contact">
                <p>For questions about these Terms, please contact:</p>
                <div className="mt-4 p-5 rounded-sm border border-border bg-muted/20">
                  <p className="font-semibold text-foreground">Haywood Technologies</p>
                  <p className="text-muted-foreground mt-1">Email: <a href="mailto:legal@haywood-tech.com" className="text-primary hover:underline">legal@haywood-tech.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+923279401611" className="text-primary hover:underline">+92 327 940 1611</a></p>
                </div>
              </TSection>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

function TSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-32">
      <h2 className="text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
