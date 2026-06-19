import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Voyage",
  description: "Privacy Policy for the Voyage AI-powered productivity workspace.",
};

export default function PrivacyPolicyPage(): React.ReactElement {
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
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Last Updated: June 19, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/70 text-[15px] leading-relaxed">
          <p>
            Thank you for using Voyage (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). This Privacy Policy outlines how we collect,
            use, and protect your personal and non-personal information when you
            use our application and related services (the
            &ldquo;Service&rdquo;).
          </p>
          <p>
            By accessing or using the Service, you agree to the terms of this
            Privacy Policy. If you do not agree with the practices described in
            this policy, please do not use the Service.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-white mb-1">1.1 Personal Data</h3>
                <p>
                  We collect the following personal information when you create an
                  account and use the Service:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>
                    <span className="text-white">Name</span> — used to
                    personalize your experience.
                  </li>
                  <li>
                    <span className="text-white">Email address</span> — used for
                    account authentication, communication, and service updates.
                  </li>
                  <li>
                    <span className="text-white">Google account data</span> —
                    when you connect Gmail and/or Google Calendar, we access your
                    email messages, calendar events, and related metadata solely
                    to power the features you enable within the Service.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Provide, operate, and maintain the Service.</li>
              <li>Authenticate your identity and manage your account.</li>
              <li>Process your Google integrations (email triage, calendar planning) as directed by you.</li>
              <li>Send you service-related communications and updates.</li>
              <li>Improve, personalize, and develop new features.</li>
              <li>Detect and prevent fraud, abuse, or security issues.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Google API Services
            </h2>
            <p>
              Voyage uses Google API Services to integrate with Gmail and Google
              Calendar. Your use of these features is also subject to the{" "}
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
              . We access your Google data only as needed to provide the
              features you explicitly use, and we do not use it for advertising
              or any purpose unrelated to the Service.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We share information only in
              the following limited circumstances:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>
                <span className="text-white">Service providers</span> — we
                engage trusted third-party providers (e.g., hosting, database,
                authentication) who process data on our behalf under strict
                contractual obligations.
              </li>
              <li>
                <span className="text-white">Legal requirements</span> — we may
                disclose information if required by law, regulation, or valid
                legal process.
              </li>
              <li>
                <span className="text-white">With your consent</span> — we may
                share data when you explicitly authorize us to do so.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data, including encryption of OAuth tokens both in transit and at
              rest. While we strive to use commercially acceptable means to
              protect your personal information, no method of transmission over
              the Internet or electronic storage is 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to provide the Service and fulfill the purposes described in this
              policy. When you delete your account, we will delete or
              anonymize your personal data within a reasonable timeframe,
              except where retention is required by law.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Export your data in a portable format.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@voyage.app"
                className="text-[var(--accent-neon)] hover:underline"
              >
                privacy@voyage.app
              </a>
              .
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Voyage is not intended for children under the age of 13, and we do
              not knowingly collect personal data from children. If you believe
              we have inadvertently collected such information, please contact us
              and we will promptly delete it.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy on
              this page and, where appropriate, by email. Your continued use of
              the Service after any changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests related to this
              Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:privacy@voyage.app"
                className="text-[var(--accent-neon)] hover:underline"
              >
                privacy@voyage.app
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
