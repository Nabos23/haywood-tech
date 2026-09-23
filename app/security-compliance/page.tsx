import type { Metadata } from "next";
import { Shield, Lock, Eye, Server, AlertTriangle, FileCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Security & Compliance — Haywood Technologies",
  description:
    "How Haywood Technologies secures client data, maintains infrastructure integrity, and aligns with SOC 2, HIPAA, GDPR, and ISO 27001 compliance frameworks.",
};

const highlights = [
  { icon: Lock, label: "TLS 1.3", description: "All data in transit" },
  { icon: Server, label: "AES-256", description: "Data at rest encryption" },
  { icon: Eye, label: "SOC 2 Aligned", description: "Controls & processes" },
  { icon: Shield, label: "Zero-trust", description: "Access model" },
  { icon: AlertTriangle, label: "<1 hr", description: "Incident response SLA" },
  { icon: FileCheck, label: "HIPAA Ready", description: "For healthcare clients" },
];

const sections = [
  "Our Security Commitment",
  "Infrastructure Security",
  "Data Encryption",
  "Access Controls",
  "Application Security",
  "Incident Response",
  "Compliance Frameworks",
  "Third-Party Risk",
  "Vulnerability Disclosure",
  "Contact",
];

export default function SecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: "radial-gradient(circle, #2d3192 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-mono text-white/40 mb-6">/ legal &amp; compliance</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] max-w-3xl">
            Security &amp; Compliance
          </h1>
          <p className="mt-6 text-lg text-white/55 max-w-2xl leading-relaxed">
            How we protect your data, secure our infrastructure, and maintain the controls required by regulated industries.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="flex flex-col items-center text-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-base font-semibold text-foreground font-mono">{h.label}</p>
                <p className="text-xs text-muted-foreground">{h.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Content */}
      <div className="pt-16 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
                <nav className="space-y-2">
                  {sections.map((s, i) => (
                    <a key={s} href={`#sec-${i + 1}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      {s}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-12">
              <Sec id="sec-1" title="1. Our Security Commitment">
                <p>Security is not a feature we add at the end of a project — it is embedded in every architecture decision, every deployment process, and every system we manage. We apply defence-in-depth principles across all our client engagements and internal operations.</p>
                <p className="mt-4">We operate on the principle of least privilege: every person, system, and service has the minimum access required to do its job and nothing more. Access is reviewed quarterly and revoked immediately upon offboarding.</p>
              </Sec>

              <Sec id="sec-2" title="2. Infrastructure Security">
                <p>All client infrastructure managed by Haywood Technologies adheres to the following baseline controls:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Network segmentation:</strong> Production, staging, and development environments are isolated in separate VPCs or equivalent network boundaries. No direct internet exposure of databases or internal services.</li>
                  <li><strong className="text-foreground">Firewall rules:</strong> Default-deny ingress rules with explicit allowlists. All rules are version-controlled in Terraform or equivalent IaC.</li>
                  <li><strong className="text-foreground">DDoS protection:</strong> Cloudflare or cloud-native WAF and DDoS mitigation on all public-facing endpoints.</li>
                  <li><strong className="text-foreground">Logging & monitoring:</strong> Centralised log aggregation, anomaly detection, and alerting with documented escalation paths.</li>
                  <li><strong className="text-foreground">Patch management:</strong> Critical patches applied within 24 hours of release; standard patches within 7 days.</li>
                </ul>
              </Sec>

              <Sec id="sec-3" title="3. Data Encryption">
                <p>We enforce encryption everywhere:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">In transit:</strong> TLS 1.2 minimum, TLS 1.3 preferred, on all internal and external connections. Certificates are managed via automated renewal (Let&apos;s Encrypt or AWS Certificate Manager).</li>
                  <li><strong className="text-foreground">At rest:</strong> AES-256 encryption for all stored data, including database volumes, object storage (S3 or equivalent), and backups.</li>
                  <li><strong className="text-foreground">Secrets management:</strong> API keys, database credentials, and service tokens are stored in a dedicated secrets manager (AWS Secrets Manager, Vault, or equivalent) — never in code, environment files, or version control.</li>
                  <li><strong className="text-foreground">Backups:</strong> Encrypted, geographically distributed backups with tested restoration procedures. Recovery Point Objective (RPO) and Recovery Time Objective (RTO) are defined per client SLA.</li>
                </ul>
              </Sec>

              <Sec id="sec-4" title="4. Access Controls">
                <p>We enforce a strict access control policy across all systems:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Multi-factor authentication (MFA):</strong> Required for all engineers accessing client systems, cloud consoles, and code repositories. TOTP or hardware keys preferred over SMS.</li>
                  <li><strong className="text-foreground">SSH key-only access:</strong> Password-based SSH authentication is disabled on all servers we manage. Keys are rotated at least annually or immediately upon team changes.</li>
                  <li><strong className="text-foreground">Role-based access control (RBAC):</strong> Cloud IAM roles, database permissions, and application roles are scoped to the minimum required for each function.</li>
                  <li><strong className="text-foreground">Privileged access management:</strong> Root and administrator accounts are used only for initial provisioning and are then locked. Day-to-day operations use least-privilege roles.</li>
                  <li><strong className="text-foreground">Access reviews:</strong> Quarterly audits of all access grants to client systems, with immediate revocation upon project completion or personnel changes.</li>
                </ul>
              </Sec>

              <Sec id="sec-5" title="5. Application Security">
                <p>All software developed by Haywood Technologies is subject to the following security controls:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">OWASP Top 10:</strong> All web applications are reviewed against the OWASP Top 10 before production deployment.</li>
                  <li><strong className="text-foreground">Dependency scanning:</strong> Automated scanning of all third-party dependencies for known CVEs via Dependabot or equivalent, integrated into CI/CD pipelines.</li>
                  <li><strong className="text-foreground">Static analysis (SAST):</strong> Automated static analysis on every pull request to detect security anti-patterns.</li>
                  <li><strong className="text-foreground">Code review:</strong> All code changes require peer review by a senior engineer before merging to the main branch.</li>
                  <li><strong className="text-foreground">Input validation:</strong> All user inputs are validated server-side. SQL queries use parameterised statements. Output is encoded to prevent XSS.</li>
                  <li><strong className="text-foreground">Security headers:</strong> All web applications include X-Frame-Options, Content-Security-Policy, X-Content-Type-Options, and Referrer-Policy headers.</li>
                </ul>
              </Sec>

              <Sec id="sec-6" title="6. Incident Response">
                <p>We maintain a documented incident response plan for all managed environments:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Detection:</strong> 24/7 automated monitoring with alerting for anomalous activity, error rate spikes, and security events.</li>
                  <li><strong className="text-foreground">Initial response:</strong> Acknowledged within 1 hour for critical incidents; 4 hours for high severity.</li>
                  <li><strong className="text-foreground">Client notification:</strong> Clients are notified within 2 hours of confirming a security incident that may affect their data, and again within 72 hours with full details (meeting GDPR breach notification requirements).</li>
                  <li><strong className="text-foreground">Containment & eradication:</strong> Affected systems are isolated, root cause identified, and remediation applied before services are restored.</li>
                  <li><strong className="text-foreground">Post-incident review:</strong> A written post-mortem is delivered within 5 business days of resolution, including timeline, root cause, and preventive measures.</li>
                </ul>
              </Sec>

              <Sec id="sec-7" title="7. Compliance Frameworks">
                <p>We are experienced in implementing and maintaining controls aligned to the following frameworks, tailored to each client&apos;s regulatory context:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    { name: "SOC 2 Type II", desc: "Security, availability, and confidentiality trust service criteria. We help SaaS clients prepare for and maintain SOC 2 certification." },
                    { name: "HIPAA", desc: "Technical, administrative, and physical safeguards for protected health information (PHI). We implement HIPAA-compliant architectures for healthcare clients." },
                    { name: "GDPR / UK GDPR", desc: "Data minimisation, consent management, DSAR handling, and breach notification processes for clients operating in or serving the EU/UK." },
                    { name: "ISO 27001", desc: "Information security management system (ISMS) alignment and gap analysis for clients pursuing certification." },
                    { name: "Cyber Essentials", desc: "UK government-backed scheme for baseline cyber hygiene. We help clients achieve and maintain Cyber Essentials and Cyber Essentials Plus." },
                    { name: "PCI DSS", desc: "Payment Card Industry Data Security Standard controls for clients processing cardholder data, in partnership with qualified security assessors." },
                  ].map((f) => (
                    <div key={f.name} className="p-5 rounded-sm border border-border bg-card">
                      <p className="font-semibold text-foreground mb-2">{f.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </Sec>

              <Sec id="sec-8" title="8. Third-Party Risk">
                <p>We evaluate all third-party tools and services before use in client environments. Our assessment covers:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>SOC 2 or ISO 27001 certification status</li>
                  <li>Data processing agreements (DPAs) in place</li>
                  <li>Geographic data residency requirements</li>
                  <li>Historical security incident record</li>
                  <li>Supply chain and open-source dependency posture</li>
                </ul>
                <p className="mt-4">We maintain a register of all third-party services used in client environments and review it quarterly.</p>
              </Sec>

              <Sec id="sec-9" title="9. Vulnerability Disclosure">
                <p>If you discover a security vulnerability in any system or website operated by Haywood Technologies, we ask that you report it to us responsibly:</p>
                <div className="mt-4 p-5 rounded-sm border border-border bg-muted/20">
                  <p className="font-semibold text-foreground mb-2">Responsible Disclosure</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Email: <a href="mailto:security@haywood-tech.com" className="text-primary hover:underline">security@haywood-tech.com</a></p>
                  <p className="text-muted-foreground text-sm mt-2">Please include: the affected system or URL, a description of the vulnerability, steps to reproduce, and your assessment of the potential impact.</p>
                  <p className="text-muted-foreground text-sm mt-2">We commit to: acknowledging your report within 24 hours, keeping you updated on our progress, and not taking legal action against researchers acting in good faith.</p>
                </div>
              </Sec>

              <Sec id="sec-10" title="10. Contact">
                <p>For security-related enquiries, incident reports, or compliance questions:</p>
                <div className="mt-4 p-5 rounded-sm border border-border bg-muted/20">
                  <p className="font-semibold text-foreground">Haywood Technologies — Security Team</p>
                  <p className="text-muted-foreground mt-1">General: <a href="mailto:security@haywood-tech.com" className="text-primary hover:underline">security@haywood-tech.com</a></p>
                  <p className="text-muted-foreground">Compliance: <a href="mailto:compliance@haywood-tech.com" className="text-primary hover:underline">compliance@haywood-tech.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+923279401611" className="text-primary hover:underline">+92 327 940 1611</a></p>
                </div>
              </Sec>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

function Sec({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-32">
      <h2 className="text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
