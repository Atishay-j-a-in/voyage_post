import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Voyage",
  description: "Terms of Service for the Voyage AI-powered productivity workspace.",
};

export default function TermsOfServicePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-[var(--bg-obsidian)] text-[var(--text-ink)] overflow-y-auto">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white text-[15px] font-bold tracking-[-0.02em] mb-6 hover:opacity-80 transition-opacity"
          >
            <span>VOYAGE</span>
            <span className="text-[var(--accent-neon)] text-xs">✦</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">
            Last Updated: June 19, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/70 text-[15px] leading-relaxed">
          <p>
            Welcome to Voyage. These Terms of Service (&ldquo;Terms&rdquo;)
            govern your use of the Voyage application and related services
            (the &ldquo;Service&rdquo;). By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Description of the Service
            </h2>
            <p>
              Voyage is an AI-powered productivity workspace that integrates
              with your Google accounts (Gmail and Google Calendar) to help you
              triage email, plan your day, and manage your workflow. The Service
              is provided as a web application accessible via modern browsers.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least 13 years of age to use the Service. By
              creating an account or using the Service, you represent and
              warrant that you meet this requirement and have the legal capacity
              to enter into these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Account Registration
            </h2>
            <p>
              To use the Service, you must sign in via our authentication
              provider (Clerk) and connect at least one Google integration
              (Gmail or Google Calendar). You are responsible for maintaining
              the confidentiality of your account credentials and for all
              activity that occurs under your account.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Google API Services
            </h2>
            <p>
              Voyage uses Google API Services to integrate with Gmail and Google
              Calendar. By connecting these services, you authorize Voyage to
              access your data solely for the purpose of providing the features
              you enable within the Service. Your use of Google integrations is
              also subject to the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-neon)] hover:underline"
              >
                Google Privacy Policy
              </a>{" "}
              and the{" "}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-neon)] hover:underline"
              >
                Google Terms of Service
              </a>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Your Content
            </h2>
            <p>
              You retain ownership of all data you access or create through the
              Service, including emails, calendar events, and AI-generated
              content. By using the Service, you grant Voyage a limited,
              non-exclusive license to process this data strictly for the
              purpose of operating and improving the Service. We will never sell
              or share your content with third parties for their own purposes.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Use the Service for any unlawful or fraudulent purpose.</li>
              <li>Attempt to gain unauthorized access to the Service or its infrastructure.</li>
              <li>Interfere with or disrupt the Service, servers, or networks.</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service.</li>
              <li>Use the Service to send spam, phishing messages, or other unsolicited communications.</li>
              <li>Exceed reasonable usage limits or abuse the Service in a way that impacts other users.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Intellectual Property
            </h2>
            <p>
              The Service, including its design, code, features, and branding,
              is owned by Voyage and protected by applicable intellectual
              property laws. These Terms do not grant you any right to use our
              trademarks, logos, or other brand features without prior written
              consent.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Disclaimers
            </h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, whether express
              or implied. We do not warrant that the Service will be
              uninterrupted, error-free, or secure. AI-generated outputs are
              provided for informational purposes and should not be considered
              professional advice.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Voyage shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the Service. Our total liability
              to you for any claim arising from or related to the Service shall
              not exceed the amount you paid us in the twelve (12) months
              preceding the claim.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Termination
            </h2>
            <p>
              You may stop using the Service and delete your account at any
              time. We reserve the right to suspend or terminate your access to
              the Service at our discretion, with or without notice, if you
              violate these Terms or engage in conduct that we reasonably
              believe is harmful to the Service or other users.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes by posting the updated Terms on this page and,
              where appropriate, by email. Your continued use of the Service
              after any changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the United States, without regard to its conflict of law
              principles. Any disputes arising from or relating to these Terms or
              the Service shall be resolved in the courts of competent
              jurisdiction.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:legal@voyage.app"
                className="text-[var(--accent-neon)] hover:underline"
              >
                legal@voyage.app
              </a>
            </p>
          </section>

          {/* Footer link */}
          <div className="pt-8 border-t border-white/10">
            <Link
              href="/"
              className="text-[var(--accent-neon)] hover:underline text-sm"
            >
              ← Back to Voyage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
