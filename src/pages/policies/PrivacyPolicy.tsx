// pages/PrivacyPolicy.tsx
export const PrivacyPolicy = () => {
  return (
    <div className="py-10">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

          {/* Introduction */}
          <p className="mb-8 leading-relaxed text-lg">
            At <strong>E-Invyt</strong>, we value your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, and safeguard
            your information when you use our website and services.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {/* 1. Information We Collect */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone, wedding details,
                  account information.
                </li>
                <li>
                  <strong>Media Content:</strong> Photos, videos, text, and files uploaded to create
                  invitations and animations.
                </li>
                <li>
                  <strong>Payment Information:</strong> Processed securely via PayHere. We do not
                  store your card details.
                </li>
                <li>
                  <strong>Device and Usage Info:</strong> IP address, browser type, OS, pages
                  visited, and usage patterns via cookies/analytics.
                </li>
                <li>
                  <strong>Communications:</strong> Feedback, inquiries, or messages you send to our
                  support team.
                </li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and deliver services including invitations and animations.</li>
                <li>To process payments securely via PayHere.</li>
                <li>To respond to inquiries and provide support.</li>
                <li>To improve, personalize, and optimize our platform.</li>
                <li>To prevent fraud, enforce terms, and comply with laws.</li>
              </ul>
            </div>

            {/* 3. Information Sharing */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third-party providers assisting in
                  service delivery, payment processing, and operations.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Disclosures required by law, court orders, or
                  regulatory authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of
                  assets, your data may be transferred but remains protected.
                </li>
              </ul>
            </div>

            {/* 4. Data Retention */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary to provide services, comply
                with legal obligations, or enforce agreements. Data is securely deleted or
                anonymized when no longer needed.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, firewalls,
                and secure servers. No online system is 100% secure; by using E-Invyt, you accept
                the inherent online risks.
              </p>
            </div>

            {/* 6. Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
              <p>
                Cookies help enhance user experience, analyze website traffic, and provide
                personalized recommendations. You can disable cookies via browser settings, but some
                features may not work correctly.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Access, correct, or update personal information.</li>
                <li>Request deletion of data where permitted.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Restrict or object to processing of data.</li>
              </ul>
              <p className="mt-2">
                To exercise your rights, contact us at <strong>einvyt@gmail.com</strong>.
              </p>
            </div>

            {/* 8. Children’s Privacy */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
              <p>
                E-Invyt is not intended for children under 13. We do not knowingly collect personal
                information from children. If discovered, such data will be deleted promptly.
              </p>
            </div>

            {/* 9. Changes to this Privacy Policy */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page
                with the revised “Effective Date”. Review it periodically for updates.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>
                For questions, concerns, or requests regarding this Privacy Policy, contact us at{' '}
                <strong>einvyt@gmail.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
